import backendApi from "../api/backendApi";

export const createCommentAPI = (content, postId) => {
  return backendApi.post("/api/comment/createComment", { content, postId });
};

export const createReplyAPI = (content, commentId) => {
  return backendApi.post("/api/comment/createReply", {
    content,
    commentId,
  });
};

export const getReplyByCommentIdAPI = (commentId) => {
  return backendApi.get(`/api/comment/getReplyByCommentId/${commentId}`);
};
