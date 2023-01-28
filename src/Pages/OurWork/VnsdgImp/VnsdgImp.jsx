import React from 'react';
import './VnsdgImp.css';
import { FaHandPointRight } from "react-icons/fa";
import img from '../../../assets/eduction/E_SDG_Icons-02.jpg'
import img1 from '../../../assets/eduction/Sustainable_Development_Goal_3.png'
import img2 from '../../../assets/eduction/Sustainable_Development_Goal_13.png'

const VnsdgImp = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="text-center my-24">
        <h1 className="unsdgs-title">UNSDGs IMPLEMENTATION</h1>
      </div>
      <h2 className="text-center mt-10 m-4">
        There are 17 United Nations Sustainable Development Goals listed by the
        United Nations to achieve it by the 2030 in order to make this continent
        Peaceful, Sustainable and Inclusive. Here, at The Change we focus on the
        following SDGs.
      </h2>
      <div
        className="lg:card-side bg-base-100 drop-shadow-2xl 
           flex justify-center my-12 gap-4 md:p-4 xl:w-[950px] lg:w-[800px] md:w-[700px] mx-auto stewacd_card"
      >
        <div className="flex items-center justify-center">
          <img
            className="xl:w-[290px] lg:w-[220px] md:w-[220px] w-[250px] 
              xl:h-[180px] 
              lg:h-[140px] md:h-[100px] lg:px-0 rounded"
            src={img}
            alt="Album"
          />
        </div>
        <div className="px-2">
          <h2 className="card-title">UNSDG GOAL: 02: ZERO HUNGER </h2>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Food Drives at Orphanages and Old age homes
          </p>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Adopted 20 kids in the month of June,2019 in Mariyamma Anathasramam
            and provided food three times a day along with Fruits and Milk.
          </p>
        </div>
      </div>

      <div
        className="lg:card-side bg-base-100 drop-shadow-2xl 
           flex my-12 gap-4 md:p-4 xl:w-[950px] lg:w-[800px] md:w-[700px] 
           mx-auto stewacd_card"
      >
        <div className="flex items-center justify-center">
          <img
            className="xl:w-[200px] lg:w-[135px] md:w-[116px] w-[250px] 
              xl:h-[180px] 
              lg:h-[146px] md:h-[100px] lg:px-0 rounded stewacd_img"
            src={img1}
            alt="Album"
          />
        </div>
        <div className="px-2">
          <h2 className="card-title">
            UNSDG GOAL: 03: GOOD HEALTH AND WELL-BEING
          </h2>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Youth Psychology camps at the Colleges and Universities.
          </p>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Menstrual Hygiene camps at schools and colleges.
          </p>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Good Touch-Bad Touch sessions at Schools and colleges.
          </p>
        </div>
      </div>
      <div
        className="lg:card-side bg-base-100 drop-shadow-2xl 
           flex justify-center my-12 gap-4 md:p-4 xl:w-[950px] lg:w-[800px]
            md:w-[700px] mx-auto stewacd_card"
      >
        <div className="flex items-center justify-center">
          <img
            className="xl:w-[230px] lg:w-[178px] md:w-[180px] w-[250px] 
              xl:h-[180px] 
              lg:h-[145px] md:h-[100px] lg:px-0 rounded"
            src={img2}
            alt="Album"
          />
        </div>
        <div className="px-2">
          <h2 className="card-title">UNSDG GOAL: 13: CLIMATE ACTION</h2>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Go Green Initiative: planting Saplings at Schools.
          </p>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Weekend Agriculture sessions for the interested Youth .
          </p>
          <p className="flex">
            <span className="text-[18px] mt-1 mr-2">
              <FaHandPointRight />
            </span>
            Sessions and Panel discussions with farmers and agriculturalists for
            better Planning and cropping patterns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VnsdgImp;