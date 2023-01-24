import React from "react";
import logo from "../../../assets/vison/vison.png";
import { TbCircleCheck } from "react-icons/tb";
import talent from '../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.58 PM.jpeg';
import './Vision.css';

const Vision = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className='text-center my-24'>
        <h1 className='vision-title'>Vision</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        <div className="">
          <img src={talent} alt="" />
          <article className="mt-10">
            The Change’s vision is to serve individuals, families and
            communities in the poorest by pulling strength from our global
            diversity, resources and experience. We promote innovative solutions
            and are advocates for global sustainability and Inclusiveness. We
            promote change through:
          </article>
          <h2
            className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-10"
          >
            <TbCircleCheck className="text-xl mt-1 mr-2" /> Increasing strength
            for self-help individuals
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
            <TbCircleCheck className="text-xl mt-1 mr-2" /> Providing relief in
            emergencies
          </h2>
          <h2
            className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-2"
          >
            <TbCircleCheck className="text-xl mt-1 mr-2" /> Influencing policy
            decisions at various levels
          </h2>
          <h2
            className="flex font-semibold hover:text-[#34910b] 
              cursor-pointer mt-2"
          >
            <TbCircleCheck className="text-xl mt-1 mr-2" /> Addressing
            discrimination in all its forms
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <img className="h-96" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
