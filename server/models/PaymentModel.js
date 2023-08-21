import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    patient_id:{
        type: String,
        required: true,
    },
    product_id:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    service:{
        type: String,
        required: true,
    },
    total_product:{
        type: Number,
    }
},
 { timestamps:true }
);

export default mongoose.model("Payment", PaymentSchema);