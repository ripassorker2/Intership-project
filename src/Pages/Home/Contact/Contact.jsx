import React from "react";
import logo from "../../../assets/logo/logo.png";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
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
                     <div className="w-[120px] mt-6">
                        <Link to='/volunteer'>
                        <button className="bg-[#71e432] font-semibold px-4 py-1.5 rounded  text-[20px]">
                           Volunteer 
                        </button>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="ml-4 md:inline-block hidden">
                  <h3 className=" md:text-xl text-lg font-bold text-[#d26e21]  mt-3 mb-1">
                     Connect with Us
                  </h3>
                  <div className="flex pt-3 ">
                     <p
                        className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2"
                     >
                        <a href="https://www.facebook.com/thechange.00">
                           <FaFacebook className="text-base text-white duration-300" />
                        </a>
                     </p>
                     <p
                        className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2"
                     >
                        <a href="mailto: thechange2k19@gmail.com">
                           <AiOutlineMail className="text-base text-white duration-300" />
                        </a>
                     </p>
                     <p
                        className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2"
                     >
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489382.5000109297!2d79.743268!3d16.611667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a356a808c383f11%3A0xf7b70ba074f3bbc9!2sDachepalli%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sbd!4v1678375216890!5m2!1sen!2sbd"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                     ></iframe>
                  </p>
               </div>
               <div className="ml-4 md:hidden inline-block">
                  <h3 className=" md:text-xl text-lg font-bold text-[#d26e21]  mt-3 mb-1">
                     Connect with Us
                  </h3>
                  <div className="flex pt-3 ">
                     <p
                        className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2"
                     >
                        <a href="https://www.facebook.com/thechange.00">
                           <FaFacebook className="text-base text-white duration-300" />
                        </a>
                     </p>
                     <p
                        className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2"
                     >
                        <a href="mailto: thechange2k19@gmail.com">
                           <AiOutlineMail className="text-base text-white duration-300" />
                        </a>
                     </p>
                     <p
                        className="bg-gray-800 hover:bg-[#F48E40] inline-block p-[7px] rounded-full
               lg:mr-3 md:mr-2 mr-2"
                     >
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
