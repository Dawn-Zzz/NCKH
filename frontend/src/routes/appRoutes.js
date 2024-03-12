import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "../redux/auth/authAction";
import Post from "../pages/Post";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
