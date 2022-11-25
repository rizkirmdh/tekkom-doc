const mongoose = require('mongoose');
const ClientError = require('./error');

var emailValidation = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}
const AccountSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: [emailValidation, 'Fill a valid email address, please!'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Fill a valid email address, please!']
    },
    password: {

    },
    phoneNumber: {
        type: Number,
    },
    type: {
        
    }

});

const Account = mongoose.model("Accounts", AccountSchema);