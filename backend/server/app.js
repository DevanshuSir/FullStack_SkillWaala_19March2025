const express = require("express");
const app = express();
const apiRouter = require("./routes/api");
app.use(express.json());

app.use("/api", apiRouter);
let port = 5000;
app.listen(port, () => {
  console.log(`Running on port :- ${port}`);
});
