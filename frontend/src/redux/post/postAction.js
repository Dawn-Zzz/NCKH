import { createPost, getPostsAPI } from "../../services/postService";
import { getPost, getPostError, getPostSuccess } from "./postSlice";

export const handleCreatePost = (formData) => {
  return async (dispatch, getState) => {
    // let res = await createPosts(content, images, files);
    let res = await createPost(formData);

    // if (res) {
    //   if (res.code === 0) {
    //     toast.success("Tạo bài viết thành công");
    //   } else {
    //     toast.error("Có lỗi khi tạo bài viết. Hãy thử lại");
    //   }
    // } else {
    //   toast.error("Error handleCreatePosts");
    // }
  };
};

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
