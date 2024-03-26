import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
      <Header />

      <div className="w-full flex gap-2 lg:gap-4 pt-3 h-full">
        {/* CENTER */}
        <div className="flex-1 h-full flex flex-col gap-6 overflow-y-auto rounded-lg">
          <div className="bg-primary p-4 rounded-xl mb-20">message page</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
