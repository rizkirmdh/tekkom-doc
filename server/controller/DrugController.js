import Drug from "../models/DrugModel.js"

// CREATE
export const createDrug = async (req, res, next)=>{
    const newDrug = new Drug(req.body)
    
    try{
        const savedDrug = await newDrug.save();
        res.status(200).json(savedDrug);
    } catch(err){
        next(err);
    }
}

// UPDATE
export const updateDrug = async (req, res, next)=>{
    try{
        const updatedDrug = await Drug.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedDrug);
    } catch(err){
        next(err)
    }
}

// DELETE
export const deleteDrug = async (req, res, next)=>{
    try{
        await Drug.findByIdAndDelete(req.params.id);
        res.status(200).json("Drug has been deleted.");
    } catch(err){
        next(err);
    }
}

// GET
export const getDrug = async (req, res, next)=>{
    try{
        const drug = await Drug.findById(req.params.id);
        res.status(200).json(drug);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getAllDrug = async (req, res, next)=>{
    try{
        const drugs = await Drug.find();
        res.status(200).json(drugs);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getDrugByNameCategory = async (req, res, next)=>{
    const {min, max, ...others} = req.query;
    try{
        const drugs = await Drug.find({...others, price: {$gte: min | 0, $lte: max || 999999},}).limit(req.query.limit);
        res.status(200).json(drugs);
    } catch(err){
        next(err);
    }
}