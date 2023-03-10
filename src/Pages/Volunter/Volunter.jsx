import React from "react";
import img from "../../assets/Donate-part-voluteer/volunter.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
const Volunter = () => {
   return (
      <section className="max-w-screen-xl w-[90%] mx-auto my-16">
         <h4
            className="md:text-4xl text-
         2xl text-center font-serif font-semibold mb-3"
         >
            Volunteer with us
         </h4>
         <div className="grid md:grid-cols-2 gap-10">
            <div className="md:w-[90%] mx-auto">
               <img src={img} alt="" className="rounded-lg" />
            </div>
            <div className=" mt-6">
               <h4 className="md:text-2xl font-serif font-semibold mb-3">
                  Volunteer
               </h4>
               <p className="md:w-[90%] text-lg font-serif">
                  We welcome all volunteers, with any availabilities and
                  experience! Volunteer with us today if you are passionate
                  about making a difference in the lives of young people!
               </p>
               <div className="mt-5">
                  <h4 className="inline-flex text-lg">
                     <HiOutlineMail size={30} className="mr-2" />
                     thechange2k19@gmail.com
                  </h4>{" "}
                  <br />
                  <h4 className="inline-flex text-lg">
                     <TbWorld size={30} className="mr-2" />
                     https://www.the-change.com
                  </h4>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Volunter;
