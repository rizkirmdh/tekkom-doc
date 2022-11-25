//
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path'); 
const mongoose = require('mongoose');
const ClientError = require('./error');
const Account = require('../../proyek/model_account');
const Book = require('../../proyek/model_book');
const Drug = require('../../proyek/model_drug');
const Invoice = require('../../proyek/model_invoice');
const Payment = require('../../proyek/model_payment');
//
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://rpl_8:alUZ1cwPohm8sLOu@cluster0.gwrnbun.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("MongoDB Connected succesfully");
});



app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})