import React from "react";
import logo from "../../../assets/logo/logo.png";
import "./Contact.css";
import { TbCircleCheck } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebook,
  FaLinkedin,
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
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2">
                <a href="https://www.facebook.com/thechange.00">
                  <FaFacebook className="text-base text-white duration-300" />
                </a>
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2">
                <a href="mailto: thechange2k19@gmail.com">
                  <AiOutlineMail className="text-base text-white duration-300" />
                </a>
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2">
                <a href="https://www.linkedin.com/company/thechangestewacd/">
                  <FaLinkedin className="text-base text-white duration-300" />
                </a>
              </p>
            </div>
            <div className=" pt-1"></div>
          </div>

          <div className="ml-4">
            <h3 className="md:text-xl text-lg font-bold text-[#d26e21]   mt-3 ">
              Location and Address
            </h3>
            <p className="">
              <iframe
                className="w-full"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122345.62477976696!2d79.74326844999999!3d16.61166735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a356a808c383f11%3A0xf7b70ba074f3bbc9!2z4Kah4Ka-4Kaa4KeH4Kaq4Kay4KeN4Kay4Ka_LCDgpoXgpqjgp43gpqfgp43gprAg4Kaq4KeN4Kaw4Kam4KeH4Ka2LCDgpq3gpr7gprDgpqQ!5e0!3m2!1sbn!2sbd!4v1677236981516!5m2!1sbn!2sbd"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
          <div className="ml-4 md:hidden inline-block">
            <h3 className=" md:text-xl text-lg font-bold text-[#d26e21]  mt-3 mb-1">
              Connect with Us
            </h3>
            <div className="flex pt-3 ">
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2">
                <a href="https://www.facebook.com/thechange.00">
                <FaFacebook className="text-base text-white duration-300" />
                </a>
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2">
                <a href="mailto: thechange2k19@gmail.com">
                <AiOutlineMail className="text-base text-white duration-300" />
                </a>
              </p>
              <p className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2">
                <a href="https://www.linkedin.com/company/thechangestewacd/">
                <FaLinkedin className="text-base text-white duration-300" />
                </a>
              </p>
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
