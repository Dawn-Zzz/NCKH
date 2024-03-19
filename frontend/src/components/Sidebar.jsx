import React from "react";
import { Link } from "react-router-dom";

const FriendsCard = ({ friends }) => {
  return (
    <div>
      <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
        <div className="w-full flex flex-col gap-4">
          <Link
            to="/"
            className="w-full flex gap-4 items-center pb-4 cursor-pointer border-b border-[#66666645]"
          >
            Thông báo
          </Link>

          <Link
            to="/community"
            className="w-full flex gap-4 items-center cursor-pointer"
          >
            Cộng đồng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
