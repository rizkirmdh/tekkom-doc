import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Patient from "../models/PatientModel.js"
import { createError } from "../utils/error.js"
import Doctor from "../models/DoctorModel.js"

// PATIENT
// register patient
export const registerPatient = async (req, res, next)=>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newPatient = new Patient({
            ...req.body,
            password:hash,
        });

        await newPatient.save();
        res.status(201).send("Patient has been created.")
    } catch(err){
        next(err);
    }
}

// login patient
export const loginPatient = async (req, res, next)=>{
    try{
        const patient = await Patient.findOne({ email:req.body.email });
        if (!patient) return next(createError(404, "Patient account not found"));

        const isPass = await bcrypt.compare(req.body.password, patient.password);
        if (!isPass) return next(createError(401, "Email or password incorrect!"));
        
        const { password, ...otherDetails } = patient._doc;

        res.status(201).json({...otherDetails});
    } catch(err){
        next(err);
    }
}

// DOCTOR
// register doctor
export const registerDoctor = async (req, res, next)=>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        var priceSpecialist = 0;
        if (req.body.specialist === "anak"){
            priceSpecialist = 30000;
        } else if(req.body.specialist === "mata"){
            priceSpecialist = 40000;
        } else{
            priceSpecialist = 25000;
        }

        const newDoctor = new Doctor({
            ...req.body,
            password:hash,
            price:priceSpecialist,
        });

        await newDoctor.save();
        res.status(201).send("Doctor has been created.")
    } catch(err){
        next(err);
    }
}

// login doctor
export const loginDoctor = async (req, res, next)=>{
    try{
        const doctor = await Doctor.findOne({ email:req.body.email });
        if (!doctor) return next(createError(404, "Doctor account not found"));

        const isPass = await bcrypt.compare(req.body.password, doctor.password);
        if (!isPass) return next(createError(401, "Email or password incorrect!"));
        
        const token = jwt.sign({ id: doctor._id, isAdmin: doctor.isAdmin }, process.env.JWT);

        const { password, isAdmin, ...otherDetails } = doctor._doc;
        res.cookie("access_token", token, {
            httpOnly: true, // any client secret cannot reach to this cookie 
        }).status(201).json({details:{...otherDetails}, isAdmin});
    } catch(err){
        next(err);
    }
}