import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../redux/auth/authAction";
import TextInput from "../components/TextInput";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
import CustomButton from "../components/CustomButton";
import logo_utc2 from "../assets/logo_utc2.png";
import logo_google from "../assets/logo_google.png";
import { loginWithGoogleAPI } from "../services/authService";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);

  const onclickLogin = () => {
    dispatch(handleLogin(email, password));
  };

  const onclickLoginWithGoogle = async () => {
    window.open("http://localhost:3001/api/auth/google", "_self");
  };

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="rounded text-white w-20">
              <img src={logo_utc2} alt="" />
            </div>

            <span className="text-2xl text-[#065ad8] font-semibold">NCKH</span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>

          <div
            className="py-5 flex flex-col gap-5="
            // onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // register={register("email", {
              //   required: "Email Address is required",
              // })}
              styles="w-full rounded-full"
              labelStyle="ml-2"
              // error={errors.email ? errors.email.message : ""}
            />

            <TextInput
              name="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              styles="w-full rounded-full"
              labelStyle="ml-2"
              // register={register("password", {
              //   required: "Password is required!",
              // })}
              // error={errors.password ? errors.password?.message : ""}
            />

            <Link
              to="/reset-password"
              className="text-sm text-right text-blue font-semibold"
            >
              Forgot Password ?
            </Link>

            {/* {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )} */}

            {/* {isSubmitting ? (
              <Loading />
            ) : ( */}
            <CustomButton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
              title="Login"
              onClick={() => {
                onclickLogin();
              }}
            />
            {/* )} */}
          </div>

          <CustomButton
            type="submit"
            containerStyles={`inline-flex justify-center items-center rounded-md bg-white border border-black px-8 py-3 text-sm font-medium text-black outline-none`}
            title="Login with google"
            onClick={() => {
              onclickLoginWithGoogle();
            }}
            img={logo_google}
          ></CustomButton>

          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?
            <Link
              to="/register"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-yellow">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={logo_utc2}
              alt="Bg Image"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />

            <div className="absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full">
              <ImConnection />
              <span className="text-xs font-medium">Connect</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full">
              <AiOutlineInteraction />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-base">
              Connect with friedns & have share for fun
            </p>
            <span className="text-sm text-white/80">
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
