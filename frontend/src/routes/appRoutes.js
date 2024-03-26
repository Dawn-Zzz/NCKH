import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "../redux/auth/authAction";
import PostDetailsUtc2 from "../components/PostDetailsUtc2";
import PostDetails from "../components/PostDetails";
import Message from "../pages/Message";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/student/post/:postUtc2Id" element={<PostDetailsUtc2 />} />
        <Route path="/community/post/:postId" element={<PostDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
