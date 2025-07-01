const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: String,
  pass: String,
  userdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("userdata", userSchema);
