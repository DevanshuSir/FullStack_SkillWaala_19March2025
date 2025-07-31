const api = require("express").Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");
const uploads = require("../middleware/multer");
const auth = require("../middleware/auth");

api.get("/", (req, res) => {
  res.send("Hello Backend");
});
api.post("/regdata", userController.regDataController);
api.post("/loginuser", userController.loginDataController);
api.post(
  "/addadminproduct",
  uploads.single("image"),
  adminController.addAdminProductController
);
api.get("/getproduct", adminController.getAllProductsController);
api.delete("/productdelete/:id", adminController.deleteProductController);
api.get("/editvaluedata/:abc", adminController.editValueDataController);
api.put("/productupdate/:abc", adminController.updateProductController);
api.get("/userproducts", userController.userAllProducts);
api.post("/userquery", userController.userQueryController);
api.get("/userallquery", adminController.userAllQueryController);
api.delete("/deletequery/:abc", adminController.deleteQueryController);
api.get("/querysingledata/:abc", adminController.singleQueryController);
api.post("/mailreply/:abc", adminController.MailReplyController);
api.post("/cart/save", auth, userController.saveCartController);
api.get("/cart/:userId", auth, userController.getCartController);
api.get("/serach", userController.serachController);
api.post("/create-order", userController.OrderController);
api.post("/verify", auth, userController.VerifyController);

module.exports = api;
