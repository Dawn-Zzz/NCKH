import React from "react";
import { TbSocial } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

  const dispatch = useDispatch();

  const onClickLogout = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmed) {
      dispatch(handleLogout());
      dispatch(handleRefresh());
    }
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

      <form
        className="hidden md:flex items-center justify-center"
        // onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder="Search..."
          styles="w-[20rem] lg:w-[30rem]  rounded-l-full py-3 "
          //   register={register("search")}
        />
        <CustomButton
          title="Search"
          type="submit"
          containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </form>

      {/* ICONS */}
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        {/* <button onClick={() => handleTheme()}>
          {theme ? <BsMoon /> : <BsSunFill />}
        </button> */}
        <div className="hidden lg:flex">
          <IoMdNotificationsOutline />
        </div>

        <div>
          <CustomButton
            onClick={() => onClickLogout()}
            title="Log Out"
            containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
