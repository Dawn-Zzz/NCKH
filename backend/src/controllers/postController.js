const userModel = require("../models/UserModel");
const postModel = require("../models/postModel");

let createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const images = req.files.images || [];
    const files = req.files.files || [];

    const userId = req.userId;

    if (!content || !title) {
      throw {
        code: 1,
        message: "Lỗi khi tạo bài viết: Thông tin chưa đủ",
      };
    }

    let user = await userModel.findById(userId);

    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy user",
      };
    }

    // Convert images
    const imageObjects = images.map((image) => ({
      data: image.buffer,
      contentType: image.mimetype,
      size: image.size,
    }));

    // Convert files
    const fileObjects = files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
      originalName: file.originalname,
      size: file.size,
    }));

    // Tạo bài viết mới
    post = await postModel.create({
      user: userId,
      title,
      content,
      images: imageObjects,
      files: fileObjects,
    });

    res.status(200).json({
      code: 0,
      message: "Tạo bài viết thành công",
      post,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: createPost",
    });
  }
};

let getPosts = async (req, res) => {
  try {
    const userId = req.userId;

    let user = await userModel.findById(userId);

    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy user",
      };
    }

    const posts = await postModel
      .find()
      .populate("user", "name pic")
      .select("_id title createdAt updatedAt")
      .sort({ createdAt: -1 });

    if (!posts || posts.length === 0) {
      throw {
        code: 1,
        message: "Không có bài viết nào",
      };
    }

    res.status(200).json({
      code: 0,
      message: "Lấy bài viết thành công",
      posts: posts,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getPosts",
    });
  }
};
let getPostDetailById = async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.postId;

    let user = await userModel.findById(userId);

    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy user",
      };
    }

    const postDetail = await postModel
      .findById(postId)
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name pic",
        },
      })
      .populate({
        path: "comments",
        populate: {
          path: "replies",
          populate: {
            path: "user",
            select: "name pic",
          },
        },
      })
      .populate("user", "name pic");

    if (!postDetail) {
      throw {
        code: 1,
        message: "Không tìm thấy bài viết",
      };
    }

    // Convert image data to base64 for sending to the client
    const images = postDetail.images.map((image) => ({
      contentType: image.contentType,
      data: image.data.toString("base64"),
    }));

    const files = postDetail.files.map((file) => ({
      contentType: file.contentType,
      data: file.data.toString("base64"),
      originalName: file.originalName, // Tên gốc của file
      size: file.size, // Kích thước của file trong byte
    }));

    const postsWithImagesAndFiles = {
      ...postDetail._doc,
      images,
      files,
    };

    res.status(200).json({
      code: 0,
      message: "Lấy thông tin bài viết thành công",
      postDetail: postsWithImagesAndFiles, // Sử dụng postsWithImagesAndFiles thay vì postDetail
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getPostDetailById",
    });
  }
};

module.exports = { createPost, getPosts, getPostDetailById };
