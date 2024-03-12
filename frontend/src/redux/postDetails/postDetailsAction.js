import toast from "react-hot-toast";
import { getPostByIdAPI } from "../../services/postService";
import {
  getPostById,
  getPostByIdError,
  getPostByIdSuccess,
} from "./postDetailsSlice";

export const handleGetPostById = (postId) => {
  return async (dispatch, getState) => {
    dispatch(getPostById());

    let res = await getPostByIdAPI(postId);

    console.log("getPostById", res);

    if (res.status === "success") {
      dispatch(getPostByIdSuccess(res.responseData));
    } else {
      dispatch(getPostByIdError());
    }
  };
};
