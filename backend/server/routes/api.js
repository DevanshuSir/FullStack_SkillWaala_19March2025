const router = require("express").Router();
const UserController = require("../controller/user");

router.get("/", UserController.HomeController);
router.get("/data", UserController.DataController);
router.post("/userdata", UserController.UserDataController);
router.delete("/userdatadelete/:id", UserController.DeleteController);
router.get("/updateuserdata/:abc", UserController.UpdateUserDataController);
router.put("/updateuser/:abc", UserController.UpdateController);

module.exports = router;
