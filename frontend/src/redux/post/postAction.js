import toast from "react-hot-toast";
import { getPostsAPI, toggleLikePostAPI } from "../../services/postService";
import {
  getPost,
  getPostError,
  getPostSuccess,
  toggleLikePost,
  toggleLikePostError,
  toggleLikePostSuccess,
} from "./postSlice";

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

export const handleToggleLikePost = (postId) => {
  return async (dispatch, getState) => {
    dispatch(toggleLikePost());

    let res = await toggleLikePostAPI(postId);

    if (res) {
      if (res.code === 0) {
        dispatch(toggleLikePostSuccess(res.like));
        toast.success(res.message);
      } else {
        dispatch(toggleLikePostError());
        toast.error(res.message);
      }
    } else {
      dispatch(toggleLikePostError());
      toast.error("Error handleToggleLikePost");
    }
  };
};
