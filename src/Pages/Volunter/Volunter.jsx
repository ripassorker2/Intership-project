import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

import "./volunter.css";

const Volunter = () => {
   return (
     <div className="mx-7">
       <div
         className=" my-11 py-4 md:py-10 max-w-screen-xl m-auto bg-repeat-round bg-cover "
         id="bg-overlay"
       >
         <h3 className="lg:text-5xl md:text-4xl text-xl font-semibold text-center underline text-gray-200 md:mb-6">
           Volunteer with us
         </h3>
         <div className="flex flex-col justify-center items-center text-gray-200 md:text-lg  ">
           <div className="inline-block border p-4 m-3 rounded-lg max-w-[440px] font-serif text-start md:text-xl text-[12px]">
             <p className="pb-2">
               We welcome all volunteers, with any availabilities and
               experience!
             </p>
             <p>
               Volunteer with us today if you are passonate about making a
               difference in the live of young people!
             </p>
            
               <h4 className="flex items-center mb-1 font-bold md:text-lg mt-4 tracking-wider">
                 <span>
                   <AiOutlineMail size={24} className="mr-3" />
                 </span>
                 <span className="text-[12px] md:text-xl">
                   thechange2k19@gmail.com
                 </span>
               </h4>
               <h4 className="flex items-center mb-1 font-bold md:text-lg  tracking-wider">
                 <span>
                   <GiWorld size={24} className="mr-3" />
                 </span>
                 <span className="text-[12px] md:text-xl">
                   http://the-changes.com/
                 </span>
               </h4>
            
           </div>
         </div>
       </div>
     </div>
   );
};

export default Volunter;
