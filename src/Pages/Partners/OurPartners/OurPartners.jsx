import React from "react";
import img1 from "../../../assets/partners/Apnao.jpg";
import img2 from "../../../assets/partners/partners.jpg";
import img3 from "../../../assets/partners/Good win Trust.jpeg";
import img4 from "../../../assets/partners/Mahaboob Charitable Trust logo.png";
import img5 from "../../../assets/partners/our-pat.jpeg";

const OurPartners = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <h1 className="md:text-5xl text-3xl font-bold text-center">
        OUR PARTNERS
      </h1>
      <div className="flex gap-10 justify-center mt-10">
        <div className="w-48 h-40">
          <img className="w-full h-full" src={img1} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full" src={img2} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full" src={img3} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full" src={img4} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full" src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
