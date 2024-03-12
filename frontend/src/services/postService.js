import utc2Api from "../api/utc2Api";

export const getPostAPI = () => {
  return utc2Api.get("/post", {
    params: {
      currentPage: 1,
      pageSize: 10,
      sortField: "created_at",
      sortOrder: "DESC",
      filters: "type==STUDENT_ANNOUNCEMENT,display==true",
    },
  });
};

export const getPostByIdAPI = (postId) => {
  return utc2Api.get(`/post/${postId}`);
};
