import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { handleGetPostDetailById } from "../redux/postDetails/postDetailsAction";
import Loading from "./Loading";
import CustomCreateComment from "./CustomCreateComment";
import CommentCard from "./CommentCard";
import { handleToggleLikePost } from "../redux/post/postAction";
import { toggleLikePostAPI } from "../services/postService";
import toast from "react-hot-toast";

const PostDetails = () => {
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const post = useSelector((state) => state.post);
  const auth = useSelector((state) => state.auth);
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [isLike, setIsLike] = useState();
  const [isLoadingLike, setIsLoadingLike] = useState(false);

  useEffect(() => {
    dispatch(handleGetPostDetailById(postId));
  }, []);

  useEffect(() => {
    setComments(postDetails.post?.comments || []);
    setIsLike(postDetails.post?.likes.some((like) => like.user === auth.id));
  }, [postDetails.post]);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  const onclickToggleLikePost = async () => {
    setIsLoadingLike(true);
    await toast.promise(toggleLikePostAPI(postId), {
      loading: "Loading...",
      success: (data) => {
        if (data.code === 0) {
          return data.message;
        } else {
          throw new Error(data.message);
        }
      },
      error: (error) => {
        return error.message;
      },
    });

    setIsLike(!isLike); // Khi người dùng click để toggle like, cập nhật lại trạng thái của isLiked
    setIsLoadingLike(false);
  };

  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-auto">
      <div className="p-2">
        <Link to="/community">
          <i class="fa-solid fa-arrow-left"></i> Quay lại
        </Link>
      </div>

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
                  {isLoadingLike ? (
                    <>
                      <button className="pl-10">
                        <i className="fas fa-circle-notch fa-spin"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="pl-10" onClick={onclickToggleLikePost}>
                        {isLike ? (
                          <i class="fa-solid fa-thumbs-up"></i>
                        ) : (
                          <i class="fa-regular fa-thumbs-up"></i>
                        )}
                      </button>
                    </>
                  )}

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
                    <div className="mb-2 bg-primary p-4 rounded-xl">
                      <div className="flex gap-3 items-center mb-2">
                        Bài viết chưa có bình luận nào.
                      </div>
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
