import React from "react";
import './OurPartners.css';
import img1 from "../../../assets/partners/Apnao.jpg";
import img2 from "../../../assets/partners/partners.jpg";
import img3 from "../../../assets/partners/Good win Trust.jpeg";
import img4 from "../../../assets/partners/Mahaboob Charitable Trust logo.png";
import img5 from "../../../assets/partners/our-pat.jpeg";

const OurPartners = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-[90%] lg:my-28 my-14">
      <div className="text-center">
        <h1 className="our-partners-title">OUR PARTNERS</h1>
      </div>
      <div
        className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10
       justify-center align-middle mt-10"
      >
        <div className="">
          <img className="w-full h-full rounded-md" src={img1} alt="" />
        </div>
        <div className="">
          <img className="w-full h-full rounded-md" src={img2} alt="" />
        </div>
        <div className="">
          <img className="w-full h-full rounded-md" src={img3} alt="" />
        </div>
        <div className="">
          <img className="w-full h-full rounded-md" src={img4} alt="" />
        </div>
        <div className="">
          <img className="w-full h-full rounded-md" src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
