const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required!']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
})

module.exports = mongoose.model('user', userSchema, 'users');
