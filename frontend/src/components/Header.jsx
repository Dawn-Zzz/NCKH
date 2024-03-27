import React, { useEffect, useState } from "react";
import { TbSocial } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
// import { useForm } from "react-hook-form";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { handleLogout, handleRefresh } from "../redux/auth/authAction";
// import { SetTheme } from "../redux/theme";
// import { Logout } from "../redux/userSlice";
import logo_utc2 from "../assets/logo_utc2.png";

const Header = () => {
  //   const { theme } = useSelector((state) => state.theme);
  //   const { user } = useSelector((state) => state.user);
  //   const dispatch = useDispatch();
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const handleTheme = () => {
  //     const themeValue = theme === "light" ? "dark" : "light";

  //     dispatch(SetTheme(themeValue));
  //   };

  //   const handleSearch = async (data) => {};
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pathname = window.location.pathname;

  const onClickLogout = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmed) {
      dispatch(handleLogout(navigate));
    }
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-3 px-4 bg-primary">
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 w-16 rounded text-white">
          <img src={logo_utc2} alt="" />
        </div>
        <span className="text-xl md:text-2xl text-[#065ad8] font-semibold">
          NCKH
        </span>
      </Link>

      {pathname === "/message" ? (
        <div className="text-xl md:text-1xl font-bold">Nhắn tin</div>
      ) : (
        <>
          <div
            className="hidden md:flex items-center justify-center"
            // onSubmit={handleSubmit(handleSearch)}
          >
            <TextInput
              placeholder="Nhập từ khóa tìm kiếm..."
              styles="w-[20rem] lg:w-[30rem]  rounded-l-full py-3 "
              //   register={register("search")}
            />
            <CustomButton
              title="Search"
              // type="submit"
              containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
            />
          </div>
        </>
      )}

      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <div className="hidden lg:flex">
          {pathname === "/message" ? (
            <Link to="/">
              <i class="fa-solid fa-house"></i>
            </Link>
          ) : (
            <Link to="/message">
              <i class="fa-solid fa-message pr-1"></i>
            </Link>
          )}

          <button>
            <i class="fa-solid fa-bell pl-4"></i>
          </button>
        </div>

        <div>
          {auth.isLoading || auth.isInit ? null : (
            <>
              {auth.auth ? (
                <CustomButton
                  onClick={() => onClickLogout()}
                  title="Đăng xuất"
                  containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
                />
              ) : (
                <CustomButton
                  onClick={() => onClickLogin()}
                  title="Đăng nhập"
                  containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
