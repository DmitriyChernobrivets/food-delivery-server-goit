const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    categories: [{
        type: String
    }],
    rating: Number,
    likes: Number,
    forSale: Boolean,
    buyer: Number,
    seller: Number,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Products', productsSchema);