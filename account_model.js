const mongoose = require('mongoose');
const ClientError = require('./error');

const AccountSchema = new mongoose.Schema({

});

const PaymentSchema = new mongoose.Schema({

});

const BookSchema = new mongoose.Schema({

});

const Account = mongoose.model("Accounts", AccountSchema);
const Payment = mongoose.model("Payments", PaymentSchema);
const Book = mongoose.model("Books", BookSchema);