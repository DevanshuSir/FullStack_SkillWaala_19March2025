const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  cartItems: [],
  totalPrice: Number,
  totalQunatity: Number,
});

module.exports = mongoose.model("cart", cartSchema);
