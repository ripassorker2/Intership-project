import React from "react";
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
    <div className="bg-orange-500 py-12">
      <div className="md:max-w-[1100px] mx-auto w-[90%] ">
        <h3 className="text-center md:text-[40px] text-2xl font-bold text-white mb-6">
          Connect with Us
        </h3>
        <div className="grid md:grid-cols-2">
          <form className="md:w-[90%]">
            <div className="border-b pt-1 ">
              <input
                type="text"
                name="name"
                className="input w-full  p-0 bg-orange-500 text-white  font-semibold text-lg focus:outline-none placeholder:text-white  "
                placeholder="Name"
                required
              />
            </div>
            <div className="border-b pt-1">
              <input
                type="email"
                name="name"
                className="input w-full  p-0 bg-orange-500 text-white font-semibold text-lg focus:outline-none placeholder:text-white"
                placeholder="Email"
                required
              />
            </div>
            <div className="border-b pt-1">
              <input
                type="text"
                name="phone"
                className="input w-full  p-0 bg-orange-500 text-white font-semibold text-lg focus:outline-none placeholder:text-white"
                placeholder="Phone"
                required
              />
            </div>
            <div className="border-b pt-1">
              <select className="input  w-full p-0 bg-orange-500 text-white  font-semibold text-lg focus:outline-none">
                <option disabled defaultValue={"Query releted to"}></option>
                <option>Death Note</option>
                <option>Attack on Titan</option>
                <option>Bleach</option>
                <option>Fullmetal Alchemist</option>
                <option>Jojo's Bizarre Adventure</option>
              </select>
            </div>
            <div className="border-b pt-1">
              <input
                type="text"
                name="message"
                className="input w-full p-0 bg-orange-500 text-white font-semibold text-lg focus:outline-none placeholder:text-white"
                placeholder="Message"
                required
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-slate-800 text-white  py-2"
              >
                Send Query
              </button>
            </div>
          </form>
          <div className="md:ml-8">
            <div className="flex pt-6 ">
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaFacebook className="text-lg text-orange-500 hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaTwitter className="text-lg text-orange-500 hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaLinkedin className="text-lg text-orange-500 hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaYoutube className="text-lg text-orange-500 hover:text-blue-700 duration-300" />
              </p>
              <p className="bg-white inline-block p-[10px] rounded-full mr-3">
                <FaInstagram className="text-lg text-orange-500 hover:text-blue-700 duration-300" />
              </p>
            </div>
            <h3 className="text-3xl py-2 font-semibold">
              Corporate and Registered Office
            </h3>
            <p className="text-white text-xl">
              Module No. 411, 4th Floor, NSIC-MDBP Building <br /> Okhla
              Industrial Estate, New Delhi – 110020 (INDIA)
            </p>
            <button className="bg-yellow-500 px-3 py-2 mt-2 font-bold  text-lg ">
              <FaPhoneSquareAlt className="inline-block mr-2 text-xl" />
              <span className="hover:text-white duration-300">
                11 - 69200000
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
