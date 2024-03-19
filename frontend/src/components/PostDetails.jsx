import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { handleGetPostDetailById } from "../redux/postDetails/postDetailsAction";
import Loading from "./Loading";
import CustomCreateComment from "./CustomCreateComment";
import CommentCard from "./CommentCard";

const PostDetails = () => {
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(handleGetPostDetailById(postId));
  }, []);

  useEffect(() => {
    setComments(postDetails.post?.comments || []);
  }, [postDetails.post]);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-auto">
      <Link to="/community">Quay lại</Link>

      <div className="mb-2 bg-primary p-4 rounded-xl">
        <div className="flex flex-col gap-3 items-center mb-2">
          <div className="w-full flex justify-between">
            <div className="">
              {postDetails.isLoading ? (
                <Loading />
              ) : (
                <>
                  <div>{postDetails.post?.content}</div>
                  <br />
                  <div className="flex gap-3 flex-wrap">
                    {postDetails.post?.images &&
                      postDetails.post?.images?.map((image, index) => {
                        return (
                          <div className="" key={index}>
                            <img
                              className="w-20 h-auto"
                              alt={`Post Image ${index}`}
                              src={`data:${image.contentType};base64,${image.data}`}
                            />
                          </div>
                        );
                      })}
                  </div>
                  <br />
                  {postDetails.post?.files &&
                    postDetails.post?.files.map((file, index) => (
                      <div key={index} className="file-item">
                        <a
                          href={`data:${file.contentType};base64,${file.data}`}
                          download={file.originalName}
                        >
                          {file.originalName} (Size: {file.size} bytes)
                        </a>
                      </div>
                    ))}
                  <br />
                  <CustomCreateComment
                    postId={postId}
                    addComment={addComment}
                  />

                  {comments.length > 0 ? (
                    comments.map((item, index) => (
                      <CommentCard key={index} comment={item} />
                    ))
                  ) : (
                    <div className="flex w-full h-full items-center justify-center">
                      <p className="text-lg text-ascent-2">
                        Bài viết chưa có bình luận nào.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
