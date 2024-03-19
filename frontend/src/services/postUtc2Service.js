import utc2Api from "../api/utc2Api";

export const getNotificationPostAPI = () => {
  return utc2Api.get("/post", {
    params: {
      currentPage: 1,
      pageSize: 20,
      sortField: "created_at",
      sortOrder: "DESC",
      filters: "type==STUDENT_ANNOUNCEMENT,display==true",
    },
  });
};

export const getNotificationPostByIdAPI = (postId) => {
  return utc2Api.get(`/post/${postId}`);
};
