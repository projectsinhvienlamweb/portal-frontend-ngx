const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    dob: Date,
    avatar: String,
    role: String,
    phone_number: Number
})

module.exports = mongoose.model('User', userSchema);
