import React from "react";
import logo from "../../../assets/banner-logo/logo.png";
import "./Contact.css";
import { TbCircleCheck } from "react-icons/tb";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white pt-8 pb-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto w-[90%] ">
        <div className="grid md:grid-cols-3">
          <div className="md:w-[90%]">
            <div className="flex">
              <div className="">
                <img className="md:w-24 w-16" src={logo} alt="" />
              </div>
              <div className="mt-5 ml-2">
                <h1 className="logo_title leading-none pb-0">THE CHANGE</h1>
                <h3 className="ml-4 md:text-xl font-bold pt-0 leading-none text-gray-900">
                  He for She, She for He
                </h3>
                <div className=" pt-1">
                  <div
                    className="flex font-semibold text-blue-500 
              cursor-pointer pt-2"
                  >
                    <TbCircleCheck className="text-xl mt-1 mr-2" />{" "}
                    <span className="hover:text-[#34910b]">
                      VOLUNTEER WITH US
                    </span>
                  </div>
                  <div
                    className="flex font-semibold text-blue-600
              cursor-pointer pt-2"
                  >
                    <TbCircleCheck className="text-xl mt-1 mr-2" />{" "}
                    <span className="hover:text-[#34910b]">DONATE US</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:ml-8">
            <h3 className=" md:text-3xl text-xl font-bold text-blue-500  mt-4 mb-1">
              Connect with Us
            </h3>
            <div className="flex pt-3 ">
              <p className="bg-[#71c445] hover:bg-blue-500 inline-block p-[8px] rounded-full mr-3">
                <FaFacebook className="text-lg text-white duration-300" />
              </p>
              <p className="bg-[#71c445] hover:bg-blue-500 inline-block p-[7px] rounded-full mr-3">
                <FaTwitter className="text-lg text-white duration-300" />
              </p>
              <p className="bg-[#71c445] hover:bg-blue-500 inline-block p-[8px] rounded-full mr-3">
                <FaLinkedin className="text-lg text-white duration-300" />
              </p>
              <p className="bg-[#71c445] hover:bg-blue-500 inline-block p-[8px] rounded-full mr-3">
                <FaYoutube className="text-lg text-white duration-300" />
              </p>
              <p className="bg-[#71c445] hover:bg-blue-500 inline-block p-[8px] rounded-full mr-3">
                <FaInstagram className="text-lg text-white duration-300" />
              </p>
            </div>
            <div className=" pt-1">
              <button className="bg-[#71c445] hover:bg-[#4b9c28] px-3 py-2 mt-2 font-bold  text-lg ">
                <FaPhoneSquareAlt className="inline-block mr-2 text-xl" />
                <span className="hover:text-white duration-300">
                  11 - 69200000
                </span>
              </button>
            </div>
          </div>
          <div>
            <h3 className=" md:text-3xl text-xl font-bold text-blue-500  mt-4 ">
              Location and Address
            </h3>
            <h5 className="md:text-2xl text-lg py-2 font-semibold text-[#34910b]">
              Corporate and Registered Office
            </h5>
            <p className="text-[#34910b] md:text-lg">
              Module No. 411, 4th Floor, NSIC-MDBP Building <br /> Okhla
              Industrial Estate, New Delhi – 110020 (INDIA)
            </p>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold pt-16 text-gray-800">
        <hr className="pb-2 border-red-600 border-t " />
        <p>Copyright © 2023 CARE India. All Rights Reserved</p>
        <p>Current IP Address: 27.109.18.26</p>
      </div>
    </div>
  );
};

export default Contact;
