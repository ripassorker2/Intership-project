import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const Volunter = () => {
   let title = "Volunteer with us";
   let bg = "bg-[#F48E40]";
   let photo2 =
      "https://images.yourstory.com/cs/wordpress/2018/03/19884450_1686832194672581_7847578843808818976_n.jpg?w=752&fm=auto&ar=2:1&mode=crop&crop=faces";
   return (
      <div className="my-20">
         <GetInTouch title={title} bg={bg} photo2={photo2} />
      </div>
   );
};

export default Volunter;
