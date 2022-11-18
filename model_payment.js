const mongoose = require('mongoose');
const ClientError = require('./error');

const PaymentSchema = new mongoose.Schema({

});

const Payment = mongoose.model("Payments", PaymentSchema);