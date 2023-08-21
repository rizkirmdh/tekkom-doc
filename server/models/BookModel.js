import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    patient_id:{
        type: String,
        required: true,
    },
    doctor_id:{
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
    day:{
        type: String,
    },
    hour:{
        type: String,
    },
    minute:{
        type: String,
    },
},
 { timestamps:true }
);

export default mongoose.model("Book", BookSchema);