import Payment from "../models/PaymentModel.js"

// CREATE
export const createPayment = async (req, res, next)=>{
    const newPayment = new Payment(req.body)
    
    try{
        const savedPayment = await newPayment.save();
        res.status(200).json(savedPayment);
    } catch(err){
        next(err);
    }
}

// UPDATE
export const updatePayment = async (req, res, next)=>{
    try{
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedPayment);
    } catch(err){
        next(err)
    }
}

// DELETE
export const deletePayment = async (req, res, next)=>{
    try{
        await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json("Payment has been deleted.");
    } catch(err){
        next(err);
    }
}

// GET
export const getPayment = async (req, res, next)=>{
    try{
        const payment = await Payment.findById(req.params.id);
        res.status(200).json(payment);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getAllPayment = async (req, res, next)=>{
    try{
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch(err){
        next(err);
    }
}

// GET ALL PAYMENT WITH PATIENT ID
export const getAllPaymentPatientID = async (req, res, next)=>{
    try{
        const payment = await Payment.find({ patient_id: req.params.id })
        res.status(200).json(payment);
    } catch(err){
        next(err);
    }
}