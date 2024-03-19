import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { handleCreateComment } from "../redux/comment/commentAction";

const CustomCreateComment = ({ postId, addComment }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const comment = useSelector((state) => state.comment);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (comment.comment) {
      addComment(comment.comment);
    }
  }, [comment.comment]);

  const onclickCreateComment = () => {
    dispatch(handleCreateComment(content, postId));
    setContent("");
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
          title="Comment"
          containerStyles="bg-[#0444a4] text-white py-3 px-10 rounded-full font-semibold text-sm"
          onClick={() => {
            onclickCreateComment();
          }}
        />
      </div>
    </div>
  );
};

export default CustomCreateComment;
