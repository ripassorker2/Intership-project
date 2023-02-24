import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const Donate = () => {
   let title = "Donate us";
   let bg = "bg-[#71e432]";
   let photo2 =
      "https://media.licdn.com/dms/image/C5622AQFVpHfQSz6dQw/feedshare-shrink_800/0/1667436817730?e=1680134400&v=beta&t=vWpgY1Re0H7_TuX-C86He3WhvWr8YSsqJmBuSkZdoeU";
   return (
      <div className="my-20">
         <GetInTouch title={title} bg={bg} photo2={photo2} />
      </div>
   );
};

export default Donate;
