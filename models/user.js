const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref: "List",
    },]
})


module.exports = mongoose.model('User', userSchema)