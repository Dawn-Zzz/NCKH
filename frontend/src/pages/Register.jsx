import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { handleRegister } from "../redux/auth/authAction";
import { TbSocial } from "react-icons/tb";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";
import logo_utc2 from "../assets/logo_utc2.png";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onclickRegister = () => {
    dispatch(handleRegister(name, email, password));
  };

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="rounded text-white w-10">
              <img src={logo_utc2} alt="" />
            </div>
            <span className="text-2xl text-[#065ad8] " font-semibold>
              NCKH
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">
            Create your account
          </p>

          <div
            className="py-8 flex flex-col gap-5"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="name"
                label="Name"
                placeholder="Name"
                type="text"
                styles="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // register={register("firstName", {
                //   required: "First Name is required!",
                // })}
                // error={errors.firstName ? errors.firstName?.message : ""}
              />
            </div>

            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              styles="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // register={register("email", {
              //   required: "Email Address is required",
              // })}
              // error={errors.email ? errors.email.message : ""}
            />

            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // register={register("password", {
                //   required: "Password is required!",
                // })}
                // error={errors.password ? errors.password?.message : ""}
              />

              <TextInput
                label="Confirm Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                // register={register("cPassword", {
                //   validate: (value) => {
                //     const { password } = getValues();

                //     if (password != value) {
                //       return "Passwords do no match";
                //     }
                //   },
                // })}
                // error={
                //   errors.cPassword && errors.cPassword.type === "validate"
                //     ? errors.cPassword?.message
                //     : ""
                // }
              />
            </div>

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
              title="Create Account"
              onClick={() => {
                onclickRegister();
              }}
            />
            {/* )} */}
          </div>

          <p className="text-ascent-2 text-sm text-center">
            Already has an account?{" "}
            <Link
              to="/login"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-yellow">
          <div className="relative w-full flex items-center justify-center">
            <img
              // src={BgImage}
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

export default Register;
