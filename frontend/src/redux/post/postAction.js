import toast from "react-hot-toast";
import { getPostAPI } from "../../services/postService";
import { getPost, getPostError, getPostSuccess } from "./postSlice";

export const handleGetPost = () => {
  return async (dispatch, getState) => {
    dispatch(getPost());

    let res = await getPostAPI();

    console.log(res);

    if (res.status === "success") {
      dispatch(getPostSuccess(res.responseData));
    } else {
      dispatch(getPostError());
    }
  };
};
