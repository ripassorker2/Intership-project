import React from "react";
import core_img from '../../../assets/icons/cirle-motiff.svg'
import commitment from '../../../assets/icons/commitment-icon.svg'
import './Principal.css';

const Principal = () => {
  return (
    <>
      <section className="principal-main">
        <div className="core-main">
            <div className="principal_core_img">
                <img className="core_img" src={core_img} alt="" />
            </div>
            <div className="our-title">
               <h1>Our <br /> Core Values</h1>
            </div>
            <div className="core_item flex justify-center w-100">
           <ul className="item lg:flex md:flex justify-center grid grid-cols-2">
              <li className="card w-60  flex justify-center">
               <div className=" ">
               <figure className="item-img rounded-full w-32 h-32 mx-auto">
                  <img src={commitment} alt="icon" className="w-32 h-32 " />
                </figure>
                <div className="w-44 mx-auto text-center text">
                  <h2 className="py-2">Respect</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
               </div>
              </li>
              {/* ===== */}
              <li className="card w-60 ">
                <figure className="item-img rounded-full w-32 h-32 mx-auto">
                  <img src={commitment} alt="icon" className="w-32 h-32 " />
                </figure>
                <div className="w-44 mx-auto text-center text">
                  <h2 className="py-2">Respect</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </li>
              <li className="card w-60">
                <figure className="item-img rounded-full w-32 h-32 mx-auto">
                  <img src={commitment} alt="icon" className="w-32 h-32 " />
                </figure>
                <div className="w-44 mx-auto text-center text">
                  <h2 className="py-2">Respect</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </li>
              <li className="card w-60">
                <figure className="item-img rounded-full w-32 h-32 mx-auto">
                  <img src={commitment} alt="icon" className="w-32 h-32 " />
                </figure>
                <div className="w-44 mx-auto text-center text">
                  <h2 className="py-2">Respect</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </li>
              <li className="card w-60 lg:block md:block  hidden">
                <figure className="item-img rounded-full w-32 h-32 mx-auto">
                  <img src={commitment} alt="icon" className="w-32 h-32 " />
                </figure>
                <div className="w-44 mx-auto text-center text">
                  <h2 >Respect</h2>
                  <p>Upholding the dignity of each individual</p>
                </div>
              </li>
           </ul>
            </div>
            </div>
            
      </section>
    </>
  );
};

export default Principal;
