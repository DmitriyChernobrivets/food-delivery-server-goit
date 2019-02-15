const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    favoriteCategories: Array,
    products: Array,
    viewedProducts: Array
})

module.exports = mongoose.model('User', usersSchema);