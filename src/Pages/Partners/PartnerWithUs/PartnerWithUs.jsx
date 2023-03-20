import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import img from "../../../assets/Donate-part-voluteer/partner.png";

const PartnerWithUs = () => {
   return (
      <section className="max-w-screen-xl w-[90%] mx-auto my-16">
         <h4 className="md:text-4xl text-2xl text-center font-serif font-semibold mb-3 uppercase">
            Partner with us
         </h4>
         <div className="grid md:grid-cols-2 gap-10 place-content-center">
            <div className="md:w-[90%] mx-auto grid place-content-center mt-5">
               <img loading="lazy" src={img} alt="" className="rounded-lg w-full bg-cover" />
            </div>
            <div className="grid place-content-center md:w-[90%] leading-3 ">
               <p className=" text-xl font-serif w-[90%]">
               Integrityaction never works alone; we always work in partnership. We are keen to initiate partnerships with organisations that share our ambition to ensure citizens have a prominent voice in how projects and services are delivered where they live.
               </p>
               <div className="mt-4">
                  <h4 className="inline-flex text-lg">
                     <HiOutlineMail size={30} className="mr-2" />
                     <a href="mailto:thechange2k19@gmail.com">thechange2k19@gmail.com</a>
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

export default PartnerWithUs;
