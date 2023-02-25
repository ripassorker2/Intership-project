import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const Donate = () => {
   let title = "Donate us";
   let bg = "bg-[#71e432]";
   let photo2 =
      "https://img.global.news.samsung.com/in/wp-content/uploads/2018/08/IMG_5905-e1533544026651.jpg";
   return (
      <div className="my-20">
         <GetInTouch title={title} bg={bg} photo2={photo2} />
      </div>
   );
};

export default Donate;
