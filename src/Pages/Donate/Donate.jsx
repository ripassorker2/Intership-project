import React from "react";
import img from '../../assets/Donate-part-voluteer/5573383.jpg'


const Donate = () => {

   return (
     //  <div className="grid place-content-center  w-[95%] m-auto my-14">
     //      <img className="w-[500px] h-[400px]" src={img} alt="" />
     //  </div>
     <div className="w-[95%] m-auto my-14 h-[520px]">
       <img
         className="w-full h-full"
         src={
           "https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg?w=740&t=st=1678453453~exp=1678454053~hmac=dc693026210e86ccf1e59e86a42f40b3ac63092dd46ab58a5abecfdccdcba41f"
         }
         alt=""
       />
     </div>
   );
};

export default Donate;
