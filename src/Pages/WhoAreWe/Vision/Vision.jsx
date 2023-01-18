import React from 'react';
import logo from "../../../assets/vison/vison.png";
import { TbCircleCheck } from "react-icons/tb";

const Vision = () => {
    return (

        <div className="max-w-screen-xl mx-auto my-32">
          <div className="flex gap-10 justify-center">
            <div className="w-[40%]">
              <h1 className="text-5xl font-bold">Vision</h1>
              <article className="mt-10">
                The Change’s vision is to serve individuals, families and
                communities in the poorest by pulling strength from our global
                diversity, resources and experience. We promote innovative
                solutions and are advocates for global sustainability and
                Inclusiveness. We promote change through:
              </article>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-10"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Increasing strength for self-help individuals
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Facilitating Inclusive opportunities and communities
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Providing relief in emergencies
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Influencing policy decisions at various levels
              </h2>
              <h2
                className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-2"
              >
                <TbCircleCheck className="text-xl mt-1 mr-2" /> Addressing discrimination in all its forms
              </h2>
            </div>
            <div className="w-[40%] flex justify-center">
              <img className="h-96" src={logo} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Vision;