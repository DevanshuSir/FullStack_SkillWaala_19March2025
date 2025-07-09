const api = require("express").Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");

api.get("/", (req, res) => {
  res.send("Hello Backend");
});
api.post("/regdata", userController.regDataController);
api.post("/loginuser", userController.loginDataController);
api.post("/addadminproduct", adminController.addAdminProductController);

module.exports = api;
