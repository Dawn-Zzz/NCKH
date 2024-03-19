const express = require("express");
const commentController = require("../controllers/commentController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

router.post("/createComment", checkJWT, commentController.createComment);

router.post("/createReply", checkJWT, commentController.createReply);

module.exports = router;
