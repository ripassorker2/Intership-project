import React from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import gender from "../../../assets/event/gender.jpg";
import good from "../../../assets/event/good.jpg";
import Nutritous from "../../../assets/event/Nutritous.jpg";
import quality from "../../../assets/event/quality.jpg";
import skill from "../../../assets/event/skill.jpg";
import img1 from "../../../assets/event/Event.jpg";

const Events = () => {
   return (
     <div className="max-w-screen-xl mx-auto lg:my-16 md:my-10 my-5 px-4">
       <div className="text-center">
         <h1 className="events-title">EVENTS</h1>
       </div>
       <div className=" mx-auto gap-10 justify-center lg:mt-10 md:mt-5 mt-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
         <div className="mx-auto img-b">
           <div className="card-compact card-size w-96  ">
             <figure>
               <img className="h-[420px] " src={img1} alt="img" />
             </figure>
           </div>
         </div>
         <Link to="/GenderAwarness" className="mx-auto">
           <div className="card card-compact card-size w-96 bg-base-100 shadow-xl">
             <figure>
               <img
                 className="h-[350px] hover:scale-125 duration-300  w-96"
                 src={gender}
                 alt="Shoes"
               />
             </figure>
             <div className="card-body  bg-[#F48E40] ">
               <h2 className="card-title">Gender Awarness Session</h2>
             </div>
           </div>
         </Link>

         <Link to="/GoodTouch" className="mx-auto">
           <div className="card card-compact card-size w-96 bg-base-100 shadow-xl">
             <figure>
               <img
                 className="h-[350px] hover:scale-125 duration-300 w-96"
                 src={good}
                 alt="Shoes"
               />
             </figure>
             <div className="card-body bg-[#F48E40] ">
               <h2 className="card-title">Good Touch and Bad Touch Session</h2>
             </div>
           </div>
         </Link>

         <Link to="/NutritousFood" className="mx-auto">
           <div className="card card-compact card-size w-96 bg-base-100 shadow-xl">
             <figure>
               <img
                 className="h-[350px] hover:scale-125 duration-300 w-96"
                 src={Nutritous}
                 alt="Shoes"
               />
             </figure>
             <div className="card-body bg-[#F48E40] ">
               <h2 className="card-title">Nutritous food </h2>
             </div>
           </div>
         </Link>

         <Link to="/QualityEducation" mx-auto>
           <div className="card card-compact card-size w-96 bg-base-100 shadow-xl">
             <figure>
               <img
                 className="h-[350px] hover:scale-125 duration-300 w-96"
                 src={quality}
                 alt="Shoes"
               />
             </figure>
             <div className="card-body  bg-[#F48E40] ">
               <h2 className="card-title">Quality Education Session</h2>
             </div>
           </div>
         </Link>

         <Link to="/SkillEnhancement" className="mx-auto">
           <div className="card card-compact card-size w-96 bg-base-100 shadow-xl">
             <figure>
               <img
                 className="h-[350px] hover:scale-125 duration-300 w-96"
                 src={skill}
                 alt="Shoes"
               />
             </figure>
             <div className="card-body bg-[#F48E40] ">
               <h2 className="card-title">SEP Sessions</h2>
             </div>
           </div>
         </Link>
       </div>
     </div>
   );
};

export default Events;
