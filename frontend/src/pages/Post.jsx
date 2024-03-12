import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPost } from "../redux/post/postAction";
import { NavLink, useParams } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import AllPost from "../components/AllPost";
import { handleGetPostById } from "../redux/postDetails/postDetailsAction";

const Post = () => {
  const { postId } = useParams();

  return <>{postId ? <PostDetails /> : <AllPost />}</>;
};

export default Post;
