const mongoose = require('mongoose');
const ClientError = require('./error');

const PaymentSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    payment_type:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    time:{
        type: Date,
        required: true,
    }
});

const Payment = mongoose.model("Payments", PaymentSchema);