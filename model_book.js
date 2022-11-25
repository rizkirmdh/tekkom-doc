const mongoose = require('mongoose');
const ClientError = require('./error');

const BookSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    room_name:{
        type: String,
        required: true,
    },
    booking_time:{
        type: String,
        required: true,
    },
    booked_time:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
});

const Book = mongoose.model("Books", BookSchema);