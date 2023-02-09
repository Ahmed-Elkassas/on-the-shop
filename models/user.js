const mongoose = require("mongoose");
const { schema } = require("./product");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: { type: Schema.Types.ObjectId },
        quntity: { type: Number, required: true },
      },
    ],
  },
});

module.exports = mongoose.model('User', userSchema);