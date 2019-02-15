const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    currency: String,

    categories: Array,
    rating: Number,
    likes: Number,
    forSale: Boolean,
    buyer: Number,
    seller: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Products', productsSchema);