import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

import "./volunter.css";

const Volunter = () => {
   return (
      <div className="mx-7">
         <div
            className=" my-11  py-8 max-w-screen-xl m-auto bg-repeat-round bg-cover "
            id="bg-overlay"
         >
            <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center underline text-gray-200 p-4 pt-10 pb-8">
               Volunteer with us
            </h3>
            <div className="flex flex-col justify-center items-center pb-5 text-gray-200 md:text-lg  ">
               <div className="inline-block border p-4 m-3 rounded-lg max-w-[440px] text-center font-serif">
                  <p className="pb-2">
                     We welcome all volunteers, with any availabilities and
                     experience!
                  </p>
                  <p>
                     Volunteer with us today if you are passonate about making a
                     difference in the live of young people!
                  </p>
               </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-9 text-gray-900  ">
               <div className="bg-slate-100  inline-block rounded-md p-5">
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

export default Volunter;
