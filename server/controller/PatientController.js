import Patient from "../models/PatientModel.js"

// UPDATE
export const updatePatient = async (req, res, next)=>{
    try{
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedPatient);
    } catch(err){
        next(err)
    }
}

// UPDATE PASSWORD
export const updatePasswordPatient = async (req, res, next)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try{
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, {password:hash}, { new: true });
        res.status(200).json(updatedPatient);
    } catch(err){
        next(err)
    }
}

// DELETE
export const deletePatient = async (req, res, next)=>{
    try{
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json("Patient has been deleted.");
    } catch(err){
        next(err);
    }
}

// GET
export const getPatient = async (req, res, next)=>{
    try{
        const patient = await Patient.findById(req.params.id);
        res.status(200).json(patient);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getAllPatient = async (req, res, next)=>{
    try{
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch(err){
        next(err);
    }
}