import React from "react";
import CommitmentIcon from "../../../assets/icons/CommitmentIcon";
import RespectIcon from "../../../assets/icons/RespectIcon";
import IntegrityIcon from "../../../assets/icons/IntegrityIcon";
import ExcellenceIcon from "../../../assets/icons/ExcellenceIcon";
import InclusiveIcon from "../../../assets/icons/InclusiveIcon";
import './Principal.css';

const Principal = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-5 block md:hidden lg:hidden">
        Core Principles
      </h1>
      <div className="main-principal max-w-screen-xl mx-auto lg:h-[700px] md:h-[510px] h-[480px] my-10 flex justify-center items-center">
        <div className="first-principale lg:h-[100%] md:h-[310px] h-[480px] relative">
          <h1>Core Principles</h1>
          <div className="principale-content absolute"></div>
        </div>
        <div className="principale-ul">
          <ul
            className="item xl:gap-6 lg:gap-1 md:gap-8 gap-1 
          justify-center md:flex"
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
                </div>
              </div>
            </li>

            <li
              className="card xl:w-40 lg:w-32 md:w-28 w-36  flex 
            justify-center "
            >
              <div className="principal-item">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <InclusiveIcon />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 font-bold"> Inclusive </h2>
                </div>
              </div>
            </li>

            <li
              className="card xl:w-40 lg:w-32 md:w-28 w-36  flex 
            justify-center"
            >
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
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36 flex justify-center">
              <div className="principal-item ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <RespectIcon />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Integrity </h2>
                </div>
              </div>
            </li>

            <li
              className="card card2 xl:w-40 lg:w-32 md:w-28 w-36 flex 
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
