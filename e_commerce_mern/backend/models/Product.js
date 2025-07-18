const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: String, required: true },
    productCategory: { type: String, required: true },
    productStatus: { type: String, default: "Out-Of-Stock" },
    productImage: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = model("product", ProductSchema);
