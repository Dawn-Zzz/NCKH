import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPostById } from "../redux/postDetails/postDetailsAction";
import { NavLink, useParams } from "react-router-dom";

const PostDetails = () => {
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const { postId } = useParams();

  useEffect(() => {
    dispatch(handleGetPostById(postId));
  }, []);

  console.log("postDetails: ", postDetails);

  return (
    <div>
      <NavLink
        to="/post"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        Quay lại Post
      </NavLink>
      <div dangerouslySetInnerHTML={{ __html: postDetails.content }} />
    </div>
  );
};

export default PostDetails;
