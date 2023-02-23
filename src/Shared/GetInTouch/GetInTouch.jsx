import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

const GetInTouch = ({ title, photo1, photo2 }) => {
  return (
    <div className="">
      <div
        className="grid place-content-center md:h-[400px] h-[300px] bg-repeat-round bg-cover"
        style={{ backgroundImage: `url(${photo1})` }}
      >
        <div className="">
          <h2 className="lg:text-6xl text-5xl  font-bold text-gray-100">
            {title}
          </h2>
        </div>
      </div>
      <div
        className="grid place-content-center md:h-[500px] h-[300px] bg-repeat-round bg-cover"
        style={{
          backgroundImage: `url(${photo2})`,
        }}
      >
        <div className="bg-slate-900 text-gray-200 inline-block lg:p-16 md:p-12 p-5 rounded-md ">
          <h4 className="flex items-center mb-1 md:text-lg tracking-wider">
            <span>
              <AiOutlineMail size={24} className="mr-3" />
            </span>
            <span>thechange2k19@gmail.com</span>
          </h4>
          <h4 className="flex items-center mb-1 md:text-lg tracking-wider">
            <span>
              <GiWorld size={24} className="mr-3" />
            </span>
            <span>http://the-changes.com/</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
