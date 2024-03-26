import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { handleNotificationPostById } from "../redux/postDetailsUtc2/postDetailsUtc2Action";
import Header from "./Header";
import FiltersCard from "./FiltersCard";
import Sidebar from "./Sidebar";

const PostDetailsUtc2 = () => {
  const dispatch = useDispatch();
  const postDetailsUtc2 = useSelector((state) => state.postDetailsUtc2);
  const { postUtc2Id } = useParams();

  useEffect(() => {
    dispatch(handleNotificationPostById(postUtc2Id));
  }, []);

  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
      <Header />

      <div className="w-full flex gap-2 lg:gap-4 pt-3 h-full">
        <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
          <Sidebar />
          <FiltersCard />
        </div>

        {/* CENTER */}
        <div className="flex-1 h-full flex flex-col gap-6 overflow-y-auto rounded-lg">
          <div className="">
            <Link to="/">
              <i class="fa-solid fa-arrow-left"></i> Quay lại
            </Link>
          </div>

          <div className="bg-primary p-4 rounded-xl mb-20">
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
  );
};

export default PostDetailsUtc2;
