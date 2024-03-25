import Header from "../components/Header";
import FiltersCard from "../components/FiltersCard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostCardUtc2 from "../components/PostCardUtc2";
import { handleGetNotificationPost } from "../redux/postUtc2/postUtc2Action";
import CustomCreatePost from "../components/CustomCreatePost";
import { handleGetPosts } from "../redux/post/postAction";
import PostCard from "../components/PostCard";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const postUtc2 = useSelector((state) => state.postUtc2);
  const post = useSelector((state) => state.post);
  const [posts, setPosts] = useState([]);

  const isCommunityPath = window.location.pathname === "/community";

  const addPost = (data) => {
    setPosts((posts) => [data.post, ...posts]);
  };

  useEffect(() => {
    if (isCommunityPath) {
      dispatch(handleGetPosts());
    } else {
      dispatch(handleGetNotificationPost());
    }
  }, [isCommunityPath]);

  useEffect(() => {
    if (post.posts && !post.isLoading) {
      setPosts(post.posts);
    }
  }, [post]);

  return (
    <>
      <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
        <Header />

        <div className="w-full flex gap-2 lg:gap-4 pt-3 h-full">
          <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
            <Sidebar />
            <FiltersCard />
          </div>

          {/* CENTER */}
          <div className="flex-1 h-full flex flex-col gap-6 overflow-y-auto rounded-lg">
            {!isCommunityPath ? (
              <>
                {postUtc2.isLoading ? (
                  <Loading />
                ) : postUtc2?.rows?.length > 0 ? (
                  postUtc2?.rows?.map((item) => (
                    <PostCardUtc2 key={item?._id} post={item} />
                  ))
                ) : (
                  <div className="flex w-full h-full items-center justify-center">
                    <p className="text-lg text-ascent-2">
                      Không tìm thấy bài viết nào
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Hiển thị khi /community */}
                <CustomCreatePost addPost={addPost} />

                <>
                  {post.isLoading ? (
                    <Loading />
                  ) : posts.length > 0 ? (
                    posts.map((item) => <PostCard post={item} />)
                  ) : (
                    <div className="flex w-full h-full items-center justify-center">
                      <p className="text-lg text-ascent-2">
                        Không tìm thấy bài viết nào
                      </p>
                    </div>
                  )}
                </>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
