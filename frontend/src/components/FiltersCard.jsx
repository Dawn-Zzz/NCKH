import React from "react";
import { BsBriefcase, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const FiltersCard = () => {
  return (
    <div>
      <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 ">
        <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium text-ascent-1">Bộ lọc</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <div className="flex gap-2 items-center text-ascent-2">
            <CiLocationOn className="text-xl text-ascent-1" />
            <span>lọc</span>
          </div>

          <div className="flex gap-2 items-center text-ascent-2">
            <BsBriefcase className=" text-lg text-ascent-1" />
            <span>lọc</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <p className="text-xl text-ascent-1 font-semibold">lọc</p>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">lọc</span>
            <span className="text-ascent-1 text-lg">lọc</span>
          </div>

          <span className="text-base text-blue">lọc</span>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">lọc</span>
            <span className="text-ascent-1 text-base">lọc</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 py-4 pb-6">
          <p className="text-ascent-1 text-lg font-semibold">lọc</p>

          <div className="flex gap-2 items-center text-ascent-2">
            <BsInstagram className=" text-xl text-ascent-1" />
            <span>lọc</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaTwitterSquare className=" text-xl text-ascent-1" />
            <span>lọc</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsFacebook className=" text-xl text-ascent-1" />
            <span>lọc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersCard;
