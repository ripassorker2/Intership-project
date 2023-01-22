import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import img from '../../../assets/eduction/download.png'
import img1 from '../../../assets/eduction/Sustainable_Development_Goal_5.png'
import './Stewacd.css'

const Stewacd = () => {
    return (
      <div className="max-w-screen-xl mx-auto my-20">
        <h1 className="text-5xl font-bold text-center">STEWACD</h1>
        <h2 className="text-center mt-10 px-4">
          At our organisation we work on separate programmes like STEWACD, it is
          the acronym of Support Towards Empowerment of Women and Child
          Development. This initiative is mainly focussed on the UNSDG Goals-4,5
          namely Quality Education and Gender Equality. We initiate these things
          in school children as they are prone to difference in households and
          schools for doing various works based on their gender. Under this
          flagship we conduct the following programmes.
        </h2>
        <div
          className=" lg:card-side bg-base-100 drop-shadow-2xl 
           flex justify-center my-12 gap-4 md:p-4 xl:w-[950px] lg:w-[800px] md:w-[700px] mx-auto stewacd_card"
        >
          <div className="flex items-center justify-center">
            <img
              className="xl:w-[280px] lg:w-[210px] md:w-[200px] w-[250px] 
              xl:h-[180px] lg:h-[140px] md:h-[100px] lg:px-0 rounded"
              src={img}
              alt="Album"
            />
          </div>
          <div className="px-2">
            <h2 className="card-title">UNSDG GOAL: 04: QUALITY EDUCATION</h2>
            <p className="flex leading-6 mt-2">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Sessions on LSRW (Listening, Speaking, Reading and Writing) Skills
              at Schools
            </p>
            <p className="flex leading-6">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Sessions on Issues of National and International importance at
              Schools and colleges.
            </p>
            <p className="flex leading-6">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Sessions on Arts like Singing, Dancing, Drawing at Schools and
              Orphanages
            </p>
            <p className="flex leading-6">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Conducting Essay Writing, Elocution, Debate, Quiz and Drawing at
              Schools and colleges and awarding the winners for encouragement.
            </p>
          </div>
        </div>

        <div
          className="lg:card-side bg-base-100 drop-shadow-2xl 
           flex justify-center my-12 gap-4 md:p-4 xl:w-[950px] lg:w-[800px] md:w-[700px] mx-auto stewacd_card"
        >
          <div className="flex items-center justify-center">
            <img
              className="xl:w-[300px] lg:w-[220px] md:w-[210px] w-[250px] 
              xl:h-[180px] 
              lg:h-[140px] md:h-[100px] lg:px-0 rounded"
              src={img1}
              alt="Album"
            />
          </div>
          <div className="px-2">
            <h2
              className="card-title"
            >
              UNSDG GOAL: 05: GENDER EQUALITY
            </h2>
            <p className="flex leading-6 mt-4">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Good Touch-Bad Touch sessions at schools and colleges
            </p>
            <p className="flex leading-6">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Women Empowerment sessions at DWAKRA centres
            </p>
            <p className="flex leading-6">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Sessions on the Gender Identity and Sexual Orientation, Awareness
              on LGBTQ.
            </p>
            <p className="flex leading-6">
              <span className="text-[18px] mt-1 mr-2">
                <FaHandPointRight />
              </span>
              Sessions, Panel Discussions and webinars on Gender Equality,
              Gender Sensitising and allowing Women from under privileged to
              learn out of it.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Stewacd;