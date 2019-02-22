const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
  name: String,

  description: String,
  price: Number,
  currency: {
    type: String,
    uppercase: true,
    validate: {
      validator: text => /^(UAH|DOL|RUB)$/.test(text),
      message: "Wrong currency input"
    }
  },
  categories: [{ type: String }],
  rating: Number,
  likes: Number,
  forSale: Boolean,
  buyer: mongoose.Schema.Types.ObjectId,
  seller: mongoose.Schema.Types.ObjectId,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Products", productsSchema);
