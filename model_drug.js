const mongoose = require('mongoose');
const ClientError = require('./error');

const DrugSchema = new mongoose.Schema({

});

const Drug = mongoose.model("Drugs", DrugSchema);