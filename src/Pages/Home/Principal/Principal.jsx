import React from "react";
import core_img from '../../../assets/icons/cirle-motiff.svg'
import CommitmentIcon from "../../../assets/icons/CommitmentIcon";
import RespectIcon from "../../../assets/icons/RespectIcon";
import IntegrityIcon from "../../../assets/icons/IntegrityIcon";
import ExcellenceIcon from "../../../assets/icons/ExcellenceIcon";
import InclusiveIcon from "../../../assets/icons/InclusiveIcon";
import './Principal.css';

const Principal = () => {
  return (
    <>
      <div className=" lg:h-[700px] md:h-[510px] h-[680px] pb-10">
        <div className="flex justify-center align-middle items-center">
          <img
            className="xl:w-96 lg:w-72 md:w-60 mt-[-100px] hidden md:block rotate-90 relative"
            src={core_img}
            alt="img"
          />
        </div>
        <div className="absolute md:text-[yellow] text-[#004e7e]  w-[100%] my-10 xl:mt-[-400px] lg:mt-[-320px] md:mt-[-270px] flex justify-center text-center">
          <h1 className="text-3xl font-bold">
            CORE <br /> PRINCIPLES
          </h1>
        </div>
        <div
          className="absolute xl:mt-[-228px] lg:mt-[-180px] 
        md:mt-[-146px] mt-44 flex justify-center w-[100%]"
        >
          <ul
            className="item xl:gap-6 lg:gap-1 md:gap-1 gap-1 
          justify-center lg:flex md:flex grid grid-cols-2"
          >
            <li
              className="card xl:w-40 lg:w-32 md:w-28 w-36 flex 
            justify-center"
            >
              <div className="principal-item ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <CommitmentIcon />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold"> Commitment</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>
            <li
              className="card xl:w-40 lg:w-32 md:w-28 w-36  flex 
            justify-center "
            >
              <div className="principal-item hidden sm:block">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <InclusiveIcon />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold"> Inclusive </h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36  flex 
            justify-center">
              <div className="principal-item ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <ExcellenceIcon />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold"> Learning</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36  flex justify-center">
              <div className="principal-item ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <RespectIcon />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Integrity </h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li
              className="card xl:w-40 lg:w-32 md:w-28 w-36 flex 
            justify-center"
            >
              <div className="principal-item ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-[#e3e2e1] mx-auto"
                >
                  <IntegrityIcon />
                </figure>
                <div className="mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Equality </h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Principal;
