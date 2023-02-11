import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../Shared/Title/Title';
import img2 from "../../../assets/event/event-2.jpg";
import img3 from "../../../assets/event/event-3.jpg";
import demo from "../../../assets/event/awards.jpg";

const TelentHunt = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-24">
      <Title title={'Telent Hunt'}></Title>
      <div className="hero-content text-center text-neutral-content">
        <p className="text-black mb-5">
          This is an initiative where we conduct programmes at various
          schools and colleges on every Independence Day. <br /> As a part
          of this programme, we conduct Open Mic sessions, Essay Writing,
          Elocution and debate competitions <br /> and encourage the
          winners and participants with tokens of appreciation.
        </p>
      </div>
      <div className=" gap-10 justify-center mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="">
           <Link to="/august19">
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img className='h-[350px]' src={img2} alt="Shoes" /></figure>
              <div className="card-body bg-[#F48E40] hover:bg-[#fff] ">
                <h2 className="card-title">AUGUST 15-2019</h2>
              </div>
            </div>
           </Link>
          </div>
          <div className="">
            <Link to="/august20">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img className='h-[350px] w-96' src={img3} alt="Shoes" /></figure>
              <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
                <h2 className="card-title">AUGUST 15 - 2020</h2>
              </div>
            </div>
            </Link>
          </div>
          <Link to="/AwardsCeremony">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px] w-96" src={demo} alt="Shoes" />
            </figure>
            <div className="card-body  bg-[#F48E40] hover:bg-[#fff]">
              <h2 className="card-title">Awards Ceremony</h2>
            </div>
          </div>
        </Link>
      </div> 
    </div>
  );
};

export default TelentHunt;