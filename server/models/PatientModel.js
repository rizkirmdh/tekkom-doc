import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ['MALE', 'FEMALE'],
        required: true,
    },
    bornDay:{
        type: Date,
    },
    city:{
        type: String,
    },
    phone:{
        type: String, 
    },
    balance:{
        type: Number,
        default: 0
    },
    photos:{
        type: [String],
    }
},
 { timestamps:true }
);

export default mongoose.model("Patient", PatientSchema);

