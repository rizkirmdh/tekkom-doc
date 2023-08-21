import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You aren't authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, accountInfo)=>{
        if(err) return next(createError(403, "Token is not valid!"));
        req.accountInfo = accountInfo;
        next();
    })
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.accountInfo.id === req.params.id || req.accountInfo.isAdmin){
            next();
        } else{
            return next(createError(403, "You aren't authorized!"));
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.accountInfo.isAdmin){
            next();
        } else{
            return next(createError(403, "You aren't authorized!"));
        }
    })
}