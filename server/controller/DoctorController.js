import Doctor from "../models/DoctorModel.js"
import Schedule from "../models/ScheduleModel.js"


// UPDATE
export const updateDoctor = async (req, res, next)=>{
    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedDoctor);
    } catch(err){
        next(err)
    }
}

// UPDATE PASSWORD
export const updatePasswordDoctor = async (req, res, next)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, {password:hash}, { new: true });
        res.status(200).json(updatedDoctor);
    } catch(err){
        next(err)
    }
}

// DELETE
export const deleteDoctor = async (req, res, next)=>{
    try{
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json("Doctor has been deleted.");
    } catch(err){
        next(err);
    }
}

// GET
export const getDoctor = async (req, res, next)=>{
    try{
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).json(doctor);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getAllDoctor = async (req, res, next)=>{
    const {min, max, ...others} = req.query;
    try{
        const doctors = await Doctor.find({...others, price: {$gte: min | 0, $lte: max || 999999},}).limit(req.query.limit);
        res.status(200).json(doctors);
    } catch(err){
        next(err);
    }
}

export const countBySp = async (req, res, next)=>{
    const specialists = req.query.specialists.split(",")

    try{
        const list = await Promise.all(specialists.map(specialist=>{
            return Doctor.countDocuments({specialist:specialist})
        }))
        res.status(200).json(list);
    } catch(err){
        next(err);
    }
}

export const countByGen = async (req, res, next)=>{
    try{
        const maleCount = await Doctor.countDocuments({gender:"MALE"})
        const femaleCount = await Doctor.countDocuments({gender:"FEMALE"})
        
        res.status(200).json([
            {gender: "MALE", count: maleCount},
            {gender: "FEMALE", count: femaleCount},
        ]);
    } catch(err){
        next(err)
    }
}

export const getDoctorSchedule = async (req,res,next)=>{
    try{
        const doctor = await Doctor.findById(req.params.id)
        const list = await Promise.all(doctor.schedule.map(scheduleId=>{
            return Schedule.findById(scheduleId)
        }));
        res.status(200).json(list);
    } catch(err){
        next(err)
    }
}

