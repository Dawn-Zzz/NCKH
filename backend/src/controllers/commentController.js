const userModel = require("../models/UserModel");
const postModel = require("../models/postModel");
const commentModel = require("../models/commentModel");

let createComment = async (req, res) => {
  try {
    const { content, postId } = req.body;
    const userId = req.userId;

    if (!content || !postId) {
      throw {
        code: 1,
        message: "Lỗi khi tạo bình luận: Thông tin chưa đủ",
      };
    }

    let user = await userModel.findById(userId);
    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy user",
      };
    }

    let post = await postModel.findById(postId);
    if (!post) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy bài viết",
      };
    }

    // Tạo comment mới
    const comment = await commentModel.create({
      user: userId,
      content: content,
    });

    // Thêm comment vào mảng comments của post
    post.comments.unshift(comment._id);
    await post.save();

    // Lấy thông tin của comment vừa được tạo
    const commentInfo = await commentModel
      .findById(comment._id)
      .populate("user", "name pic");

    res.status(200).json({
      code: 0,
      message: "Bình luận bài viết thành công",
      comment: commentInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra khi tạo bình luận",
    });
  }
};

let createReply = async (req, res) => {
  try {
    const { content, commentId } = req.body;
    const userId = req.userId;

    if (!content || !commentId) {
      throw {
        code: 1,
        message: "Lỗi khi tạo phản hồi: Thông tin chưa đủ",
      };
    }

    let user = await userModel.findById(userId);
    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy user",
      };
    }

    let comment = await commentModel.findById(commentId);
    if (!comment) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy bình luận",
      };
    }

    // Tạo reply mới
    const reply = await commentModel.create({
      user: userId,
      content: content,
    });

    // Thêm Reply vào mảng replies của comment
    comment.replies.unshift(reply._id);
    await comment.save();

    // Lấy thông tin của reply vừa được tạo
    const replyInfo = await commentModel
      .findById(reply._id)
      .populate("user", "name pic");

    res.status(200).json({
      code: 0,
      message: "Phản hồi thành công",
      commentId: comment._id,
      reply: replyInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra khi tạo phản hồi",
    });
  }
};

let getReplyByCommentId = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    if (!commentId) {
      throw {
        code: 1,
        message: "Lỗi: Thông tin chưa đủ",
      };
    }

    // Lấy thông tin của reply vừa được tạo

    const comment = await commentModel.findById(commentId).populate({
      path: "replies",
      populate: {
        path: "user",
        select: "name pic",
      },
    });

    if (!comment) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra: Không tìm thấy bình luận",
      };
    }

    res.status(200).json({
      code: 0,
      message: "Lấy phản hồi theo bình luận thành công",
      comment,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra khi tạo phản hồi",
    });
  }
};

module.exports = { createComment, createReply, getReplyByCommentId };
