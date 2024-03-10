import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../redux/auth/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);

  const onclickLogin = () => {
    dispatch(handleLogin(email, password));
  };

  return (
    <div className="flex flex-col items-center m-auto pt-20">
      <div className="text-2xl font-bold">Đăng nhập</div>

      {/* Nhập email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      {/* Nhập password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      {/* Quên mật khẩu */}
      <a href="#">Quên mật khẩu?</a>

      {/* Button đăng nhập */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          onclickLogin();
        }}
      >
        <> Đăng nhập </>
      </button>

      {/* Chưa có tài khoản - đăng ký */}
      <span>
        Chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
      </span>
    </div>
  );
};

export default Login;
