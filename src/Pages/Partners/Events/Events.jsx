import React from 'react';
import './Events.css';
import { Link } from "react-router-dom";
import img1 from "../../../assets/event/Event.jpg";
import img2 from "../../../assets/event/event-2.jpg";
import img3 from "../../../assets/event/event-3.jpg";
import { AiFillFolderOpen } from "react-icons/ai";


const Events = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className='text-center my-24'>
        <h1 className='events-title'>EVENTS</h1>
      </div>
      <div className="lg:flex gap-10 justify-center mt-10 grid md:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <img className="w-96 h-80" src={img1} alt="" />
        </div>
        <div className="">
          <Link to="/august19">
            <img className="w-96 h-80" src={img2} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/august20">
            <img className="w-96 h-80" src={img3} alt="" />
          </Link>
        </div>
        <div className=" w-96">
          <ul>
            <li>
              <Link to="/AwardsCeremony">
                <div className="w-72 bg-green-600 hover:bg-white shadow-xl ">
                  <div className="flex items-center h-12 font-bold">
                    <h1 className='text-5xl ml-5 text-orange-400'><AiFillFolderOpen /></h1>
                    <p className=''>Awards Ceremony</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/GenderAwarness">
                <div className="w-72  bg-green-600 hover:bg-white shadow-xl mt-1">
                  <div className="flex items-center h-12 font-bold">
                    <h1 className='text-5xl ml-5 text-orange-400'><AiFillFolderOpen /></h1>
                    <p>Gender Awarness and  Well-Being Session</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/GoodTouch">
                <div className="w-72  bg-green-600 hover:bg-white shadow-xl mt-1">
                  <div className="flex items-center h-12 font-bold">
                    <h1 className='text-5xl ml-5 text-orange-400'><AiFillFolderOpen /></h1>
                    <p>Good Touch and Bad Touch Session and Skill </p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/NutritousFood">
                <div className="w-72  bg-green-600 hover:bg-white shadow-xl mt-1">
                  <div className="flex items-center h-12 font-bold">
                    <h1 className='text-5xl ml-5 text-orange-400'><AiFillFolderOpen /></h1>
                    <p>Nutritous food drive</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/QualityEducation">
                <div className="w-72  bg-green-600 hover:bg-white shadow-xl mt-1">
                  <div className="flex items-center h-12 font-bold">
                    <h1 className='text-5xl ml-5 text-orange-400'><AiFillFolderOpen /></h1>
                    <p>Quality Education Session-Bowrampet</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/SkillEnhancement">
                <div className="w-72  bg-green-600 hover:bg-white shadow-xl mt-1">
                  <div className="flex items-center h-12 font-bold">
                    <h1 className='text-5xl ml-5 text-orange-400'><AiFillFolderOpen /></h1>
                    <p>Skill Enhancement programme-Orphanage</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
// end
export default Events;