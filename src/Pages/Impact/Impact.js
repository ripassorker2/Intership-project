import React from 'react';
import Education from '../../assets/icons/Education';
import Groups from '../../assets/icons/Groups';
import Students from '../../assets/icons/Students';

const Impact = () => {
    return (
      <div className="max-w-screen-xl mx-auto my-20">
        <h1 className="text-5xl font-bold text-center">IMPACT</h1>
        <div className="flex justify-center w-[100%] mt-10">
          <ul
            className="item xl:gap-6 lg:gap-1 md:gap-1 gap-1 
          justify-center lg:flex md:flex grid grid-cols-2 h-40"
          >
            <li
              className="card shadow-lg xl:w-96 lg:w-32 md:w-28 w-36 flex 
            justify-center"
            >
              <div className="principal-item flex  align-middle items-center">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                   bg-[#e3e2e1] mx-auto"
                >
                 <Students/>
                </figure>
                <div className="mx-auto  text-center text">
                  <h2 className=" text-xl-5 font-bold">
                    Students -  12000
                  </h2>
                </div>
              </div>
            </li>

            <li className="card shadow-lg xl:w-96 lg:w-32 md:w-28 w-36 flex 
            justify-center">
              <div className="principal-item flex  align-middle items-center">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <Education/>
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl-5 font-bold">
                    Educational Institutions - 18
                  </h2>
                  <p></p>
                </div>
              </div>
            </li>

            <li className="card shadow-lg xl:w-96 lg:w-32 md:w-28 w-36 flex 
            justify-center">
              <div className="principal-item flex  align-middle items-center">
                <figure
                  className="item-img rounded-full xl:w-28 xl:h-28 lg:w-24 
                  lg:h-24 md:w-24 md:h-24 w-28 h-28
                  bg-[#e3e2e1] mx-auto"
                >
                  <Groups/>
                </figure>
                <div className=" mx-auto text-center text">
                  <h2 className="py-2 text-xl-5 font-bold">
                    {" "}
                    Women and Other <br /> Vulnerable Groups – 1800
                  </h2>
                  <p></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Impact;