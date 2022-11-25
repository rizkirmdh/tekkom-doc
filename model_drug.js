const mongoose = require('mongoose');
const ClientError = require('./error');

const DrugSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    product_name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    }
});

const Drug = mongoose.model("Drugs", DrugSchema);