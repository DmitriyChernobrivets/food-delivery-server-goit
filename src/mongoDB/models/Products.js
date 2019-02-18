const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,

        required: true
    },
    price: {
        type: Number,
        required: false
    },
    currency: {
        type: String,
        uppercase: true,
        validate: {
            validator: (text) => /^(UAH|DOL|RUB)$/.test(text),
            message: "Wrong currency input"
        }
    },
    categories: [{ type: String }],
    rating: Number,
    likes: {
        type: Number,
        default: 0
    },
    forSale: {
        type: Boolean,
        default: true
    },
    buyer: mongoose.Schema.Types.ObjectId,
    seller: mongoose.Schema.Types.ObjectId,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Products', productsSchema);