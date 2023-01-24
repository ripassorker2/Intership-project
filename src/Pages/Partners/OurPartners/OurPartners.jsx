import React from "react";
import './OurPartners.css';
import img1 from "../../../assets/partners/Apnao.jpg";
import img2 from "../../../assets/partners/partners.jpg";
import img3 from "../../../assets/partners/Good win Trust.jpeg";
import img4 from "../../../assets/partners/Mahaboob Charitable Trust logo.png";
import img5 from "../../../assets/partners/our-pat.jpeg";

const OurPartners = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className='text-center my-24'>
        <h1 className='our-partners-title'>OUR PARTNERS</h1>
      </div>
      <div className="flex gap-10 justify-center mt-10">
        <div className="w-48 h-40">
          <img className="w-full h-full rounded-md" src={img1} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full rounded-md" src={img2} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full rounded-md" src={img3} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full rounded-md" src={img4} alt="" />
        </div>
        <div className="w-48 h-40">
          <img className="w-full h-full rounded-md" src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
