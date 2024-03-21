import toast from "react-hot-toast";
import { createCommentAPI } from "../../services/commentService";
import {
  Create_Comment,
  Create_Comment_Error,
  Create_Comment_Success,
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
