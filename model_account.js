const mongoose = require('mongoose');
const ClientError = require('./error');

const AccountSchema = new mongoose.Schema({

});

const Account = mongoose.model("Accounts", AccountSchema);