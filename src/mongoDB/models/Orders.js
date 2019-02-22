const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const orderSchema = new Schema({
  creator: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  productsList: [
    {
      product: mongoose.Types.ObjectId,
      type: {
        type: String,
        uppercase: true,
        validate: {
          validator: text => /M|XL|XXL/.test(text)
        }
      },
      itemsCount: Number
    }
  ],
  deliveryType: {
    type: String,
    validate: {
      validator: text => /delivery|office/.test(text)
    }
  },
  deliveryAdress: String,
  itemCost: Number,
  status: {
    type: String,
    validate: {
      validator: text => /inProgress|declined|finished|failed/.test(text)
    }
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Orders", orderSchema);
