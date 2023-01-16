import React from "react";
import logo from '../../../assets/banner-logo/logo.png'
import './Contact.css'
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
    <div className="bg-[#8395a7] py-12">
      <div className="md:max-w-[1270px] mx-auto w-[90%] ">
        <div className="grid md:grid-cols-2">
          <div className="md:w-[90%]">
            <div className="flex">
              <div className="">
                <img className="w-28" src={logo} alt="" />
              </div>
              <div className="mt-2">
                <h1 className="logo_title">THE CHANGE</h1>
                <h3 className="logo_he">He for She, She for He</h3>
              </div>
            </div>

            <h2
              className="flex font-semibold text-white hover:text-[#34910b] 
              cursor-pointer mt-10 ml-28"
            >
              <TbCircleCheck className="text-xl mt-1 mr-2" /> VOLUNTEER WITH US
            </h2>
            <h2
              className="flex font-semibold text-white hover:text-[#34910b] 
              cursor-pointer mt-5 ml-28"
            >
              <TbCircleCheck className="text-xl mt-1 mr-2" />
              DONATE US
            </h2>
          </div>
          <div className="md:ml-8">
            <h3 className=" md:text-[40px] text-2xl font-bold text-white mt-6 mb-2">
              Connect with Us
            </h3>
            <div className="flex pt-6 ">
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaFacebook className="text-lg text-[#61c22d] hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaTwitter className="text-lg text-[#61c22d] hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaLinkedin className="text-lg text-[#61c22d] hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaYoutube className="text-lg text-[#61c22d] hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaInstagram className="text-lg text-[#61c22d] hover:text-blue-700 duration-300" />
              </p>
            </div>
            <h3 className="text-3xl py-2 font-semibold text-white">
              Corporate and Registered Office
            </h3>
            <p className="text-white text-xl">
              Module No. 411, 4th Floor, NSIC-MDBP Building <br /> Okhla
              Industrial Estate, New Delhi – 110020 (INDIA)
            </p>
            <button className="bg-[#84D957] hover:bg-[#34910b] px-3 py-2 mt-2 font-bold  text-lg ">
              <FaPhoneSquareAlt className="inline-block mr-2 text-xl" />
              <span className="hover:text-white duration-300">
                11 - 69200000
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold pt-16 text-white">
        <hr className="mb-6" />
        <p>Copyright © 2023 CARE India. All Rights Reserved</p>
        <p>Current IP Address: 27.109.18.26</p>
      </div>
    </div>
  );
};

export default Contact;
