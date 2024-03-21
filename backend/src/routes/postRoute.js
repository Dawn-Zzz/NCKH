const express = require("express");
const postController = require("../controllers/postController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/createPost",
  checkJWT,
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "files", maxCount: 10 },
  ]),
  postController.createPost
);

router.get("/getPosts", checkJWT, postController.getPosts);
router.get(
  "/getPostDetail/:postId",
  checkJWT,
  postController.getPostDetailById
);
router.post("/toggleLikePost", checkJWT, postController.toggleLikePost);

module.exports = router;
