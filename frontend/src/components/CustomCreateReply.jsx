import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { createReplyAPI } from "../services/commentService";
import toast from "react-hot-toast";

const CustomCreateReply = ({ commentId, addReply }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  const [loadCreateReply, setLoadCreateReply] = useState(false);

  const onclickCreateReply = async () => {
    if (!content || !commentId) {
      return toast.error("Hãy nhập nội dung");
    } else {
      setLoadCreateReply(true);
      await toast.promise(createReplyAPI(content, commentId), {
        loading: "Loading...",
        success: (data) => {
          setLoadCreateReply(false);
          if (data.code === 0) {
            addReply(data);
            setContent("");
            return data.message;
          } else {
            throw new Error(data.message);
          }
        },
        error: (error) => {
          setLoadCreateReply(false);
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
          className="w-10 h-10 rounded-full object-cover"
        />

        <TextInput
          styles="w-full"
          placeholder="Nội dung bình luận...."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <CustomButton
          title={
            loadCreateReply ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : (
              "Reply"
            )
          }
          containerStyles={`bg-[#0444a4] text-white py-3 px-10 rounded-full font-semibold text-sm ${
            loadCreateReply && "pointer-events-none"
          }`}
          onClick={() => {
            if (!loadCreateReply) {
              onclickCreateReply();
            }
          }}
        />
      </div>
    </div>
  );
};

export default CustomCreateReply;
