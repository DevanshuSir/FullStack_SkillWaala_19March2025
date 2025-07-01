const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const apiRouter = require("./routes/api");

app.use("/api", apiRouter);
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
