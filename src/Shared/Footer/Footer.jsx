import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#494948] text-gray-100 pt-7 pb-4">
      <div className="">
        <div className="md:max-w-screen-xl w-[90%] mx-auto grid md:grid-cols-4 gap-x-8">
          <div className=" w-full font-semibold">
            <h3 className="text-[54px] pt-0 font-bold">Care</h3>
            <button className="bg-yellow-600 px-5 lg:px-2 lg:w-[90%] w-full py-2 mt-1 font-bold  lg:text-2xl text-xl  ">
              <span className=" text-gray-900 hover:text-blue-800 duration-300 mr-2">
                DONATE
              </span>
              <FaHeart className="inline-block lg:text-3xl text-2xl" />
            </button>
            <p className="pt-2 text-gray-300">
              Donations to CARE India are tax exempted under section 80G.
            </p>
            <p className="text-xs mt-2 text-gray-300">Data from FY 2021-22</p>
          </div>
          <div>
            <h3 className="text-3xl border-b-2 border-b-orange-400 pb-2">
              Resources
            </h3>
            <div className="pt-3">
              <p className="pb-1 flex ">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  CARE Vision 2030
                </span>
              </p>
              <p className="pb-1 flex ">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Moments to Milestones
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Innovation Briefs
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Impact Report
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Newsletter
                </span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl border-b-2 border-b-orange-400 pb-2">
              Media
            </h3>
            <div className="pt-3">
              <p className="pb-1 flex ">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  News
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Events
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Gallery
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Videos
                </span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl border-b-2 border-b-orange-400 pb-2">
              Accountability
            </h3>
            <div className="pt-3">
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Financial Statement
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Annual Report
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  FCRA Compliance
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Compliance
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Sources of Fund
                </span>
              </p>
              <p className="pb-1 flex">
                <AiOutlineRight className="inline-block mr-1" />
                <span className="font-semibold hover:text-orange-600 duration-300">
                  Safeguarding Policy
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] w-[93%] mx-auto mt-10">
          <div className="flex sm:flex-row flex-col sm:justify-center justify-start sm:items-center gap-4">
            <p className="sm:border-r sm:border-b-0 border-b sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300">
              Careers
            </p>
            <p className="sm:border-r sm:border-b-0 border-b sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300">
              Privacy Policy
            </p>
            <p className="sm:border-r sm:border-b-0 border-b sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300">
              Terms and Conditions
            </p>
            <p className="sm:border-r sm:border-b-0 border-b sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300 ">
              FAQs
            </p>
            <p className="sm:border-r sm:border-b-0 border-b sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300">
              Tenders
            </p>
            <p className="sm:border-r sm:border-b-0 border-b sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300">
              Refund Policy
            </p>
            <p className=" sm:pr-4 px-4 sm:px-0 py-1 border-white font-semibold hover:text-orange-600 duration-300">
              Contact Us
            </p>
          </div>
          <div className="text-center font-semibold pt-5">
            <p>Copyright © 2023 CARE India. All Rights Reserved</p>
            <p>Current IP Address: 27.109.18.26</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
