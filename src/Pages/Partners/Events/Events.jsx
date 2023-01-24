import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/event/Event.jpg";
import img2 from "../../../assets/event/event-2.jpg";
import img3 from "../../../assets/event/event-3.jpg";
import demo from "../../../assets/event/event-0 (2).jpg";
//import { AiFillFolderOpen } from "react-icons/ai";

const Events = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <h1 className="text-5xl font-bold text-center">EVENTS</h1>
      <div className=" gap-10 justify-center mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure>
              <img className="h-[420px]" src={img1} alt="Shoes" />
            </figure>
          </div>
        </div>
        <div className="">
          <Link to="/august19">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[350px]" src={img2} alt="Shoes" />
              </figure>
              <div className="card-body bg-[#F48E40] hover:bg-[#fff] ">
                <h2 className="card-title">AUGUST 15-2019</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link to="/august20">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[350px] w-96" src={img3} alt="Shoes" />
              </figure>
              <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
                <h2 className="card-title">AUGUST 15 - 2020</h2>
              </div>
            </div>
          </Link>
        </div>

        <Link to="/AwardsCeremony">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Awards Ceremony</h2>
            </div>
          </div>
        </Link>

        <Link to="/GenderAwarness">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Gender Awarness Session</h2>
            </div>
          </div>
        </Link>

        <Link to="/GoodTouch">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Good Touch and Bad Touch Session</h2>
            </div>
          </div>
        </Link>

        <Link to="/NutritousFood">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Nutritous food drive</h2>
            </div>
          </div>
        </Link>

        <Link to="/QualityEducation">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Quality Education Session</h2>
            </div>
          </div>
        </Link>

        <Link to="/SkillEnhancement">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Skill Enhancement programme..</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
