import React from "react";
 import img from '../../assets/Donate-part-voluteer/donate.jpeg'
import "./donate.css";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import Title from "../../Shared/Title/Title";

const Donate = () => {

   return (
     <section className="max-w-screen-xl w-[90%] mx-auto my-16">
       <h4 className="md:text-4xl text-2xl text-center font-serif font-semibold mb-3 uppercase">
         <Title title={"Donate us"}></Title>
       </h4>
       <div className="grid md:grid-cols-2 gap-10 place-content-center">
         <div className="md:w-[90%] mx-auto grid place-content-center mt-5">
           <img src={img} alt="" className="rounded-lg w-full bg-cover" />
         </div>
         <div className="grid place-content-center md:w-[90%] leading-6 text-xl">
           <p className="font-semibold mb-3 italic">
             "Alone we can do so little, Together we can do so much" - Helen
             Keller.
           </p>
           <p className="mb-2">
             Unity is the only hope to save humanity. That's why we are working
             as hard as possible to bring people together beyond borders in
             order to deal with global challenges like Gender disparity, climate
             change, Poverty, and many more. For this, we need your help !
           </p>
           <p>
             We strive to maintain our independence by relying on contributions
             from people like you everywhere on the planet. Donations can be
             Monetary and Non-Monetary like Food parcels, Sanitary Pads, etc.
             Contact us to donate.
           </p>
           <div className="mt-4 ">
             <h4 className="inline-flex text-xl font-semibold">
               <HiOutlineMail size={30} className="mr-2" />
               <a href="mailto:thechange2k19@gmail.com">
                 thechange2k19@gmail.com
               </a>
             </h4>{" "}
             <br />
             <h4 className="inline-flex text-xl font-semibold">
               <TbWorld size={30} className="mr-2" />
               https://www.the-change.com
             </h4>
           </div>
         </div>
       </div>
     </section>
   );
};

export default Donate;
