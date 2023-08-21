import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"

import adminRoute from "./routes/AdminRoute.js"
import authRoute from "./routes/Auth.js"
import patientRoute from "./routes/PatientRoute.js"
import doctorRoute from "./routes/DoctorRoute.js"
import drugRoute from "./routes/DrugRoute.js"
import scheduleRoute from "./routes/ScheduleRoute.js"
import paymentRoute from "./routes/PaymentRoute.js"
import bookRoute from "./routes/BookRoute.js"
import conversationRoute from "./routes/ConversationRoute.js"
import messageRoute from "./routes/MessageRoute.js"
// const express = require("express");
const app = express()
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: ")); // if error opening database
db.once('open', () => console.log("Database is running~")); // if opening the database successfull

//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/tekkomdoc/admin", adminRoute);
app.use("/tekkomdoc/auth", authRoute);
app.use("/tekkomdoc/patient", patientRoute);
app.use("/tekkomdoc/doctor", doctorRoute);
app.use("/tekkomdoc/drug", drugRoute);
app.use("/tekkomdoc/schedule", scheduleRoute);
app.use("/tekkomdoc/payment", paymentRoute);
app.use("/tekkomdoc/book", bookRoute)
app.use("/tekkomdoc/conversations", conversationRoute);
app.use("/tekkomdoc/messages", messageRoute);

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong!"
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    });
});

app.listen(3000, ()=>{ 
    connect();
    console.log("Server is running")
});