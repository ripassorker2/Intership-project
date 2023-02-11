import React from 'react';
import './Events.css';
import { Link } from "react-router-dom";
import gender from "../../../assets/event/gender.jpg";
import good from "../../../assets/event/good.jpg";
import Nutritous from "../../../assets/event/Nutritous.jpg";
import quality from "../../../assets/event/quality.jpg";
import skill from "../../../assets/event/skill.jpg";
import img1 from "../../../assets/event/Event.jpg";
//import { AiFillFolderOpen } from "react-icons/ai";

const Events = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className='text-center my-24'>
        <h1 className='events-title'>EVENTS</h1>
      </div>
      <div className=" gap-10 justify-center mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <div className="card-compact w-96 bg-base-100 shadow-xl ">
            <figure>
              <img className="h-[420px]" src={img1} alt="Shoes" />
            </figure>
          </div>
        </div>
        <Link to="/GenderAwarness">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={gender} alt="Shoes" />
            </figure>
            <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Gender Awarness Session</h2>
            </div>
          </div>
        </Link>

        <Link to="/GoodTouch">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={good} alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Good Touch and Bad Touch Session</h2>
            </div>
          </div>
        </Link>

        <Link to="/NutritousFood">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={Nutritous} alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Nutritous food </h2>
            </div>
          </div>
        </Link>

        <Link to="/QualityEducation">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={quality} alt="Shoes" />
            </figure>
            <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Quality Education Session</h2>
            </div>
          </div>
        </Link>

        <Link to="/SkillEnhancement">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={skill} alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">SEP Sessions</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
