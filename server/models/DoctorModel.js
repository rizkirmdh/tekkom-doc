import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    str:{
        type: Number,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
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
    phone:{
        type: String, 
    },
    specialist:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    photos:{
        type: [String],
    },
    workLocation:{
        type: String,
    },
    education:{
        type: String,
    },
    yearsExperience:{
        type: Number,
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    price:{
        type: Number,
    },
    schedule: {
        type: [String],
    },
    balance: {
        type: Number,
        default: 0,
    }
},
 { timestamps:true }
);

export default mongoose.model("Doctor", DoctorSchema);