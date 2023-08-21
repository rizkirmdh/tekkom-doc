import mongoose from "mongoose";

const DrugSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    composition:{
        type: [String],
        required: true,
    },
    sideEffect:{
        type: [String],
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    photos:{
        type: [String]
    }
});

export default mongoose.model("Drug", DrugSchema);