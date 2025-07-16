const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const QuerySchema = new Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Query: { type: String, required: true },
    QueryStatus: { type: String, default: "Unread" },
  },
  { timestamps: true }
);

module.exports = model("Query", QuerySchema);
