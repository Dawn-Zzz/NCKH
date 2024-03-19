import toast from "react-hot-toast";
import {
  createCommentAPI,
  createReplyAPI,
} from "../../services/commentService";
import {
  Create_Comment,
  Create_Comment_Error,
  Create_Comment_Success,
  Create_Reply,
  Create_Reply_Error,
  Create_Reply_Success,
} from "./commentSlice";

export const handleCreateComment = (content, postId) => {
  return async (dispatch, getState) => {
    dispatch(Create_Comment());
    let res = await createCommentAPI(content, postId);
    console.log(res);
    if (res) {
      if (res.code === 0) {
        dispatch(Create_Comment_Success(res.comment));
        toast.success(res.message);
      } else {
        dispatch(Create_Comment_Error());
        toast.error(res.message);
      }
    } else {
      dispatch(Create_Comment_Error());
      toast.error("Error handleCreateComment");
    }
  };
};

export const handleCreateReply = (content, commentId) => {
  return async (dispatch, getState) => {
    dispatch(Create_Reply());
    let res = await createReplyAPI(content, commentId);

    if (res) {
      if (res.code === 0) {
        dispatch(Create_Reply_Success(res.reply));
        toast.success(res.message);
      } else {
        dispatch(Create_Reply_Error());
        toast.error(res.message);
      }
    } else {
      dispatch(Create_Reply_Error());
      toast.error("Error handleCreateReply");
    }
  };
};
