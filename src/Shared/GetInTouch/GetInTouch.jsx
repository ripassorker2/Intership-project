import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

const GetInTouch = ({ title, bg, photo2 }) => {
   console.log(bg);
   return (
      <div className="grid place-content-center  w-[95%] m-auto">
         <div className=" md:h-[600px] h-[400px] md:w-[700px] w-full bg-repeat-round bg-cover">
            <div
               className={`md:h-[250px] h-[150px] grid place-content-center ${bg}`}
            >
               <div className="">
                  <h2 className="lg:text-6xl md:text-5xl  text-3xl text-center p-3  font-bold text-gray-100">
                     {title}
                  </h2>
               </div>
            </div>
            <div
               className="grid place-content-center md:h-[70%] h-[50%] bg-repeat-round bg-cover"
               style={{
                  backgroundImage: `url(${photo2})`,
               }}
            >
               <div className="bg-slate-900 text-gray-200 inline-block text-sm md:p-14 m-8  p-5 rounded-md ">
                  <h4 className="flex items-center mb-1 md:text-lg tracking-wider">
                     <span>
                        <AiOutlineMail size={24} className="mr-3" />
                     </span>
                     <span>thechange2k19@gmail.com</span>
                  </h4>
                  <h4 className="flex items-center mb-1 md:text-lg  tracking-wider">
                     <span>
                        <GiWorld size={24} className="mr-3" />
                     </span>
                     <span>http://the-changes.com/</span>
                  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GetInTouch;
