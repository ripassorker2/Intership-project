import React from "react";
import GetInTouch from "../../../Shared/GetInTouch/GetInTouch";

const PartnerWithUs = () => {
   let title = "Partner with us";
   let bg = "bg-[#2143f5]";
   let photo2 =
      "https://t3.ftcdn.net/jpg/00/94/43/44/360_F_94434495_kqP2DyNTpVJEfF2px0soelCEjamyriMR.jpg";
   return (
      <div className="my-20">
         <GetInTouch title={title} bg={bg} photo2={photo2} />
      </div>
   );
};

export default PartnerWithUs;
