const api = require("express").Router();
const userController = require("../controller/user");

api.get("/", (req, res) => {
  res.send("Hello Backend");
});
api.post("/regdata", userController.regDataController);

module.exports = api;
