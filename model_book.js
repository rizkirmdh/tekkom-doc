const mongoose = require('mongoose');
const ClientError = require('./error');

const BookSchema = new mongoose.Schema({

});

const Book = mongoose.model("Books", BookSchema);