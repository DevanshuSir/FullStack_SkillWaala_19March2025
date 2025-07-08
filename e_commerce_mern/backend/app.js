const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const apiRouter = require("./routes/api");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/eshop")
  .then(() => {
    console.log("Successfully Connect DB..");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api", apiRouter);
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
