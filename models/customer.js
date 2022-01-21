const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 25
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 60
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        max: 12
    },
    city: {
        type: String,
        require: true,
        min: 3,
        max: 16
    },
}, { timestamps: true })

module.exports = mongoose.model('Customer', customer);



