import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { createCommentAPI } from "../services/commentService";
import toast from "react-hot-toast";

const CustomCreateComment = ({ postId, addComment }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const comment = useSelector((state) => state.comment);
  const [content, setContent] = useState("");
  const [loadCreateComment, setLoadCreateComment] = useState("");

  const onclickCreateComment = async () => {
    if (!content || !postId) {
      return toast.error("Hãy nhập nội dung");
    } else {
      setLoadCreateComment(true);
      await toast.promise(createCommentAPI(content, postId), {
        loading: "Loading...",
        success: (data) => {
          setLoadCreateComment(false);
          if (data.code === 0) {
            addComment(data.comment);
            setContent("");
            return data.message;
          } else {
            throw new Error(data.message);
          }
        },
        error: (error) => {
          setLoadCreateComment(false);
          return error.message;
        },
      });
    }
  };

  return (
    <div className="bg-primary px-4 rounded-lg">
      <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
        <img
          src={auth.pic}
          alt="User Image"
          className="w-12 h-12 rounded-full object-cover"
        />

        <TextInput
          styles="w-full"
          placeholder="Nội dung bình luận...."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <CustomButton
          title={
            loadCreateComment ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : (
              "Comment"
            )
          }
          containerStyles={`bg-[#0444a4] text-white py-3 px-10 rounded-full font-semibold text-sm ${
            loadCreateComment && "pointer-events-none"
          }`}
          onClick={() => {
            if (!loadCreateComment) {
              onclickCreateComment();
            }
          }}
        />
      </div>
    </div>
  );
};

export default CustomCreateComment;
