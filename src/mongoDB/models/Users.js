const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: (value) => /male|female|transe/.exec(value),
            message: "Inccorect gender value"
        }
    },
    age: {
        type: Number,
        min: 11,
        max: 65,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    favoriteCategories: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    viewedProducts: [{
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('User', usersSchema);