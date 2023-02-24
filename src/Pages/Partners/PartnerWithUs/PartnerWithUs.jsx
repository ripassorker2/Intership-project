import React from "react";
import GetInTouch from "../../../Shared/GetInTouch/GetInTouch";

const PartnerWithUs = () => {
   let title = "Partner with us";
   let bg = "bg-[#2143f5]";
   let photo2 =
      "https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA=";
   return (
      <div className="my-20">
         <GetInTouch title={title} bg={bg} photo2={photo2} />
      </div>
   );
};

export default PartnerWithUs;
