const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

// router.post("/register", authController.registerUser);
router.post("/login", authController.login);
// router.post("/refresh", checkJWT, authController.refreshUser);
// router.post("/logout", authController.logoutUser);

module.exports = router;
