const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPass: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
