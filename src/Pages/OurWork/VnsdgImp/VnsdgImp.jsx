import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import img from '../../../assets/eduction/E_SDG_Icons-02.jpg'
import img1 from '../../../assets/eduction/Sustainable_Development_Goal_3.png'
import img2 from '../../../assets/eduction/Sustainable_Development_Goal_13.png'

const VnsdgImp = () => {
    return (
      <div className="max-w-screen-xl mx-auto my-20">
        <h1 className="text-5xl font-bold text-center">
          UNSDGs IMPLEMENTATION
        </h1>
        <h2 className="text-center mt-10">
          At our organisation we work on separate programmes like STEWACD, it is
          the acronym of Support Towards Empowerment of Women and Child
          Development. This initiative is mainly focussed on the UNSDG Goals-4,5
          namely Quality Education and Gender Equality. We initiate these things
          in school children as they are prone to difference in households and
          schools for doing various works based on their gender. Under this
          flagship we conduct the following programmes.
        </h2>
        <div className="card lg:card-side bg-base-100 shadow-xl my-16">
          <div>
            <img className="w-[780px] h-72" src={img} alt="Album" />
          </div>
          <div className="card-body">
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
              Adopted 20 kids in the month of June,2019 in Mariyamma
              Anathasramam and provided food three times a day along with Fruits
              and Milk.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl my-16">
          <div className="card-body">
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
          <div>
            <img className="w-[600px] h-72" src={img1} alt="Album" />
          </div>
        </div>
        {/* ========= */}
        <div className="card lg:card-side bg-base-100 shadow-xl my-16">
          <div>
            <img className="w-[600px] h-72" src={img2} alt="Album" />
          </div>
          <div className="card-body">
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
              Sessions and Panel discussions with farmers and agriculturalists
              for better Planning and cropping patterns.
            </p>
          </div>
        </div>
      </div>
    );
};

export default VnsdgImp;