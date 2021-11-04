const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user-ctrl");

router.post("/user", userCtrl.saveUserToBDD);

module.exports = router;
