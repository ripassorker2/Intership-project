import React from "react";
import logo from "../../../assets/vison/vison.png";
import { TbCircleCheck } from "react-icons/tb";
import './Vision.css';


const Vision = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto w-[90%]lg:my-16 md:my-10 my-5">
        <div className="text-center md:mb-6 mb-2">
          <h1 className="vision-title">Vision</h1>
        </div>
        <div className="lg:flex xl:flex px-5 md:grid md:grid-cols-1 gap-4">
          <div className="lg:w-1/2 xl:w-1/2 md:w-[100%] flex justify-center">
            <img className="h-[220px] lg:h-96" src={logo} alt="" />
          </div>
          <div className="lg:w-1/2 xl:w-1/2 md:w-[100%]">
            <div className="">
              <article className="md:mt-5 mt-2 text-[20px]">
                The Change’s vision is to serve individuals, families and
                communities in the poorest by pulling strength from our global
                diversity, resources and experience. We promote innovative
                solutions and are advocates for global sustainability and
                Inclusiveness. We promote change through:
              </article>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
               cursor-pointer lg:mt-10 md:mt-8 mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Increasing
                strength for self-help individuals
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
               cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Facilitating
                Inclusive opportunities and communities
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
               cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Providing relief
                in emergencies
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
               cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Influencing
                policy decisions at various levels
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
               cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Addressing
                discrimination in all its forms
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
