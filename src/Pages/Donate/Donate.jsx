import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import logo from '../../assets/banner-logo/customer-service.png'

import './Donate.css'

const Donate = () => {

   return (
     <div className="mx-7">
       <div
         className=" my-11 py-6 max-w-screen-xl m-auto bg-repeat-round bg-cover "
         id="bg-donate"
       >
         <h3
           className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center underline
          text-gray-200 md:mb-8"
         >
           Donate us
         </h3>
         <div className="flex flex-col justify-center items-center pb-5 text-gray-200 md:text-lg  ">
           <div className="inline-block border p-8 xl:w-80 xl:h-80 md:w-52 md:h-52 w-40 h-40 bg-[#34910b] rounded-full max-w-[440px] text-center font-serif">
             <div className="w-full flex justify-center">
               <img className="xl:w-28 md:w-20 w-16" src={logo} alt="" />
             </div>
             <p className="xl:text-4xl md:text-[20px] text-[12px] font-bold xl:mt-6 lg:mt-2">
               Support us - Donate now
             </p>
           </div>
         </div>
         <div className="flex flex-col justify-center items-center md:mb-8 mb-2 text-gray-900">
           <div className="bg-slate-100  inline-block rounded-md p-2">
             <h4 className="flex items-center mb-1 md:text-lg tracking-wider">
               <span>
                 <AiOutlineMail size={24} className="mr-3" />
               </span>
               <span className="text-[12px] md:text-xl">thechange2k19@gmail.com</span>
             </h4>
             <h4 className="flex items-center mb-1 md:text-lg  tracking-wider">
               <span>
                 <GiWorld size={24} className="mr-3" />
               </span>
               <span className="text-[12px] md:text-xl">http://the-changes.com/</span>
             </h4>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Donate;
