import React from "react";
import logo from "../../../assets/logo/logo.png";
import "./Contact.css";
import { TbCircleCheck } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white pt-7 pb-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto w-[90%] ">
        <div className="grid md:grid-cols-3">
          <div className="md:w-[90%]">
            <div className="">
              <img className="md:w-72 w-60" src={logo} alt="" />
            </div>
            <div className=" pl-4 pt-1">
              <Link
                to={"/volunteer"}
                className="flex font-semibold text-gray-800  
              cursor-pointer pt-2"
              >
                <TbCircleCheck className="text-base mt-1 mr-2" />{" "}
                <span className="hover:text-[#d26e21] u">
                  Volunteer with us
                </span>
              </Link>
              <Link
                to={"/donate"}
                className="flex font-semibold text-gray-800 
              cursor-pointer pt-2"
              >
                <TbCircleCheck className="text-base mt-1 mr-2" />{" "}
                <span className="hover:text-[#d26e21]">Donate us</span>
              </Link>
            </div>
          </div>
          <div className="ml-4 md:inline-block hidden">
            <h3 className=" md:text-xl text-lg font-bold text-[#d26e21]  mt-3 mb-1">
              Connect with Us
            </h3>
            <div className="flex pt-3 ">
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaFacebook className="text-base text-white duration-300" />
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <AiOutlineMail className="text-base text-white duration-300" />
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaLinkedin className="text-base text-white duration-300" />
              </p>
              {/* <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaYoutube className="text-base text-white duration-300" />
              </p> */}
              {/* <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaInstagram className="text-base text-white duration-300" />
              </p> */}
            </div>
            <div className=" pt-1">
              {/* <button className="bg-gray-800 hover:bg-[#F48E40] px-2 py-1 mt-2 font-bold  text-l ">
                <FaPhoneSquareAlt className="text-white inline-block mr-2 text-base" />
                <span className=" text-white hover:text-white duration-300">
                  00 - 0000000
                </span>
              </button> */}
            </div>
          </div>

          <div className="ml-4">
            <h3 className="md:text-xl text-lg font-bold text-[#d26e21]   mt-3 ">
              Location and Address
            </h3>
            <p className="">
              <iframe
                className="w-full"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30695922.013225425!2d64.44757036482669!3d20.08974543066478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sbd!4v1677062124511!5m2!1sen!2sbd"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
            {/* <h5 className=" text-base  py-1 font-semibold text-gray-800">
              Corporate and Registered Office
            </h5> */}
            {/* <p className="text-gray-800 text-base font-medium">
              Module No. 411, 4th Floor, NSIC-MDBP Building <br /> Okhla
              Industrial Estate, New Delhi – 110020 (INDIA)
            </p> */}
          </div>
          <div className="ml-4 md:hidden inline-block">
            <h3 className=" md:text-xl text-lg font-bold text-[#d26e21]  mt-3 mb-1">
              Connect with Us
            </h3>
            <div className="flex pt-3 ">
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaFacebook className="text-base text-white duration-300" />
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaTwitter className="text-base text-white duration-300" />
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaLinkedin className="text-base text-white duration-300" />
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaYoutube className="text-base text-white duration-300" />
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full lg:mr-3 md:mr-2 mr-2">
                <FaInstagram className="text-base text-white duration-300" />
              </p>
            </div>
            <div className=" pt-1">
              <button className="bg-gray-800 hover:bg-[#F48E40] px-2 py-1 mt-2 font-bold  text-l ">
                <FaPhoneSquareAlt className="text-white inline-block mr-2 text-base" />
                <span className=" text-white hover:text-white duration-300">
                  00 - 0000000
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold pt-9 text-gray-800 px-4">
        <hr className="pb-2 border-[#F48E40] border-t " />
        <p>Copyright © 2023 THE CHANGE. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Contact;
