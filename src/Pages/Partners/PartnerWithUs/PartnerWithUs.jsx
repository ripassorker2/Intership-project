import React from "react";
import img from "../../../assets/Donate-part-voluteer/partners.png";
import './Partners.css'

const PartnerWithUs = () => {
   return (
     <section className="max-w-screen-xl w-[90%] mx-auto my-16 bg-indigo-500">
       <div className="">
         <div className="flex justify-center mx-auto">
           <img
             className="w-[600px] h-[520px] mt-10 relative"
             src={img}
             alt=""
           />
         </div>
         <div className=" absolute ">
           <h4 className="text-4xl font-serif font-semibold partners">
             Partners with us
           </h4>
           <div>
             <button className="btn btn-success">NGO</button>
             <button className="btn btn-success">NGO</button>
             <button className="btn btn-success">NGO</button>
             <button className="btn btn-success">NGO</button>
           </div>
         </div>
       </div>
     </section>
   );
};

export default PartnerWithUs;
