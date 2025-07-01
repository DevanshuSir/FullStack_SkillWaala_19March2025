const router = require("express").Router();
const userC = require("../controller/user");

router.get("/", userC.homepageController);
router.post("/user", userC.userDataController);
router.get("/useralldata", userC.userAllDataController);
router.delete("/userdatadelete/:abc", userC.userDataDelete);
router.get("/updatevalue/:abc", userC.userUpdateData);
router.put("/newupdate/:abc", userC.newUpdate);

module.exports = router;
