const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name']
    },
    email: {
        type: String,
        require: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please add a password'],
        unique: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },

}, {
    timestamps: true, 
})

module.exports = mongoose.model('User', userSchema)