import Schedule from "../models/ScheduleModel.js"
import Doctor from "../models/DoctorModel.js"
import { createError } from "../utils/error.js"

// CREATE
export const createSchedule = async (req, res, next)=>{
    const doctorId = req.params.doctorId;
    const newSchedule = new Schedule({...req.body, doctor_id:doctorId});
    
    try{
        const savedSchedule = await newSchedule.save();
        try{
            await Doctor.findByIdAndUpdate(doctorId, {
                $push: {schedule: savedSchedule._id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedSchedule);
    } catch(err){
        next(err);
    }
}

// UPDATE
export const updateSchedule = async (req, res, next)=>{
    try{
        const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedSchedule);
    } catch(err){
        next(err)
    }
}

// DELETE
export const deleteSchedule = async (req, res, next)=>{
    const doctorId = req.params.doctorId;
    try{
        await Schedule.findByIdAndDelete(req.params.id);
        try{
            await Doctor.findByIdAndUpdate(doctorId, {
                $pull: {schedule: req.params.id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Schedule has been deleted.");
    } catch(err){
        next(err);
    }
}

// GET
export const getSchedule = async (req, res, next)=>{
    try{
        const schedule = await Schedule.findById(req.params.id);
        res.status(200).json(schedule);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getAllSchedule = async (req, res, next)=>{
    try{
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch(err){
        next(err);
    }
}

// UPDATE SCHEDULE BOOK
export const updateScheduleBooked = async (req,res,next)=>{
    try{
        const updateBookSchedule = await Schedule.findByIdAndUpdate(req.params.id, { unavailable: true }, { new: true })
        res.status(200).json(updateBookSchedule);
    } catch(err){
        next(err)
    }
}