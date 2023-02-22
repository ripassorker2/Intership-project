import React from "react";
import GetInTouch from "../../../Shared/GetInTouch/GetInTouch";

const PartnerWithUs = () => {
  let title = "";
  let photo1 =
    "https://mindtrailz.com/mtwpemp/wp-content/uploads/2022/06/partner-with-us.jpg";
  let photo2 =
    "https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA=";
  return (
    <div className="my-20">
      <GetInTouch title={title} photo1={photo1} photo2={photo2} />
    </div>
  );
};

export default PartnerWithUs;
