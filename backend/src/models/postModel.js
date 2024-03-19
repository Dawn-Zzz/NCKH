const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "users",
    },
    tags: [String],
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [
      {
        data: Buffer,
        contentType: String,
        size: Number,
      },
    ],
    files: [
      {
        data: Buffer, // Dữ liệu file dưới dạng Buffer
        contentType: String, // Loại nội dung của file
        originalName: String, // Tên gốc của file
        size: Number, // Kích thước của file trong byte
      },
    ],
    likes: [
      {
        type: String,
      },
    ],
    comments: [
      {
        type: String,
        ref: "comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
