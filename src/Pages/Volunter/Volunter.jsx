import React from "react";
import img from "../../assets/Donate-part-voluteer/volunter.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import Title from "../../Shared/Title/Title";
const Volunter = () => {
   return (
     <section className="max-w-screen-xl w-[90%] mx-auto lg:my-16 md:my-10 my-5">
       <h4
       >
         <Title title={"Volunteer with us"} />
       </h4>
       <div className="grid md:grid-cols-2 gap-10">
         <div className="md:w-[90%] mx-auto flex justify-center  items-center">
           <img src={img} alt="" className="rounded-lg" />
         </div>
         <div className=" lg:mt-6 md:mt-4 grid place-content-center">
           <p className="md:w-[95%] text-lg font-serif ">
             <span className="font-semibold text-[16px] inline-block mb-2 italic">
               "Helping Hands are better than praying lips" - Mother Theresa.
             </span>
             <br />
             We welcome all volunteers, with any availabilities and experience!
             Volunteer with us today if you are passionate about making a
             difference in the lives of young people!
           </p>
           <div className="mt-5">
             <h4 className="inline-flex text-xl font-semibold">
               <HiOutlineMail size={30} className="mr-2" />
               thechange2k19@gmail.com
             </h4>{" "}
             <br />
             <h4 className="inline-flex text-xl font-semibold">
               <TbWorld size={30} className="mr-2" />
               https://www.the-change.com/
             </h4>
           </div>
         </div>
       </div>
     </section>
   );
};

export default Volunter;