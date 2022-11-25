const mongoose = require('mongoose');
const ClientError = require('./error');

const InvoiceSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    transaction_type:{
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

const Invoice = mongoose.model("Invoice", InvoiceSchema);