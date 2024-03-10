import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "../redux/auth/authAction";

const AppRoutes = () => {
  // const auth = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("2");

  //   dispatch(handleRefresh());
  // }, []);

  // useEffect(() => {
  //   if (!auth.auth || auth.isError) {
  //     navigate("/login");
  //   }
  // }, [auth]);

  // if (window.location.pathname === "/login") {
  //   return (
  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
  //   );
  // }

  // if (window.location.pathname === "/register") {
  //   return (
  //     <Routes>
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
  //   );
  // }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
