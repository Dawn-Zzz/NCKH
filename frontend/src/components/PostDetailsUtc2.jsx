import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { handleNotificationPostById } from "../redux/postDetailsUtc2/postDetailsUtc2Action";

const PostDetailsUtc2 = () => {
  const dispatch = useDispatch();
  const postDetailsUtc2 = useSelector((state) => state.postDetailsUtc2);
  const { postUtc2Id } = useParams();

  useEffect(() => {
    dispatch(handleNotificationPostById(postUtc2Id));
  }, []);

  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-auto">
      <Link to="/">Quay lại</Link>

      <div className="mb-2 bg-primary p-4 rounded-xl">
        <div className="flex gap-3 items-center mb-2">
          <div className="w-full flex justify-between">
            <div className="">
              {postDetailsUtc2.isLoading ? (
                <Loading />
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: postDetailsUtc2.content }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsUtc2;
