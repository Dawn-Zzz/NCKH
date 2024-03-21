import backendApi from "../api/backendApi";

export const createPostAPI = (formData) => {
  return backendApi.post(`/api/post/createPost`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getPostsAPI = () => {
  return backendApi.get(`/api/post/getPosts`);
};

export const getPostDetailByIdAPI = (postId) => {
  return backendApi.get(`/api/post/getPostDetail/${postId}`);
};

export const toggleLikePostAPI = (postId) => {
  return backendApi.post(`/api/post/toggleLikePost`, { postId });
};
