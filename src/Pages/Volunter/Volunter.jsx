import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const Volunter = () => {
   let title = "Volunteer with us";
   let bg = "bg-[#F48E40]";
   let photo2 =
      "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2018/01/109217437_9de9566f65_b.jpg";
   return (
      <div className="my-20">
         <GetInTouch title={title} bg={bg} photo2={photo2} />
      </div>
   );
};

export default Volunter;
