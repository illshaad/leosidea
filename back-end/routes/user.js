const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user-ctrl");
const userGetCtrl = require("../controller/user-ctrl");

router.post("/user", userCtrl.saveUserToBDD);
router.get("/user/users", userGetCtrl.getUser);

module.exports = router;
