import React from "react";
import core_img from "../../../assets/icons/cirle-motiff.svg";
import commitment from "../../../assets/icons/commitment-icon.svg";
import "./Principal.css";

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
        <div className="absolute md:text-white text-[#004e7e]  w-[100%] my-10 xl:mt-[-400px] lg:mt-[-320px] md:mt-[-270px] flex justify-center text-center">
          <h1 className="text-3xl font-bold">
            Our <br /> Core Values
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
              <div className=" ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-gray-400 mx-auto"
                >
                  <img
                    src={commitment}
                    alt="icon"
                    className="xl:w-20 xl:h-20 lg:w-16 lg:h-16 hover:text-[#fff]"
                  />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Respect</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36  flex justify-center">
              <div className=" ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-gray-400 mx-auto"
                >
                  <img
                    src={commitment}
                    alt="icon"
                    className="xl:w-20 xl:h-20 lg:w-16 lg:h-16"
                  />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Integrity</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36  flex justify-center">
              <div className=" ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-gray-400 mx-auto"
                >
                  <img
                    src={commitment}
                    alt="icon"
                    className="xl:w-20 xl:h-20 lg:w-16 lg:h-16"
                  />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Commitment</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36  flex justify-center">
              <div className=" ">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-gray-400 mx-auto"
                >
                  <img
                    src={commitment}
                    alt="icon"
                    className="xl:w-20 xl:h-20 lg:w-16 lg:h-16"
                  />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Excellence</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </div>
            </li>

            <li className="card xl:w-40 lg:w-32 md:w-28 w-36  flex justify-center ">
              <div className=" hidden sm:block">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-gray-400 mx-auto"
                >
                  <img
                    src={commitment}
                    alt="icon"
                    className="xl:w-20 xl:h-20 lg:w-16 lg:h-16"
                  />
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl font-bold">Respect</h2>
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
