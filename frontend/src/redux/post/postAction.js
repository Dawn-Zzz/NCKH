import toast from "react-hot-toast";
import { getPostsAPI, toggleLikePostAPI } from "../../services/postService";
import { getPost, getPostError, getPostSuccess } from "./postSlice";

export const handleGetPosts = () => {
  return async (dispatch, getState) => {
    dispatch(getPost());

    let res = await getPostsAPI();

    if (res) {
      if (res.code === 0) {
        dispatch(getPostSuccess(res.posts));
      } else {
        dispatch(getPostError());
      }
    } else {
      dispatch(getPostError());
    }
  };
};
