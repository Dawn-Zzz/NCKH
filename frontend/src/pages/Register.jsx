import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleRegister } from "../redux/auth/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onclickRegister = () => {
    dispatch(handleRegister(name, email, password));
  };

  return (
    <div className="flex flex-col items-center m-auto pt-20">
      <div className="text-2xl font-bold">Đăng nhập</div>

      {/* Nhập name */}
      <input
        type="name"
        placeholder="Họ và tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

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

      {/* Button đăng ký */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          onclickRegister();
        }}
      >
        <> Đăng ký </>
      </button>

      {/* Chưa có tài khoản - đăng ký */}
      <span>
        Đã có tài khoản? <NavLink to="/login">Đăng nhập</NavLink>
      </span>
    </div>
  );
};

export default Register;
