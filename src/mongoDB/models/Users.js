const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const usersSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    // required: true,
    lowercase: true,
    validate: {
      validator: value => /male|female|transe/.exec(value),
      message: "Inccorect gender value"
    }
  },
  age: {
    type: Number,
    min: 11,
    max: 65
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  favoriteCategories: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  viewedProducts: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

// usersSchema.methods.hashingPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// usersSchema.methods.validatePassword = password =>
//   bcrypt.compareSync(password, this.local.password);

module.exports = mongoose.model("User", usersSchema);
