import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./impact.css";
import Chart from "react-apexcharts";

import students from "../../assets/impats/students.png";
import insitute from "../../assets/impats/institutes-removebg-preview (1).png";
import vulnerable from "../../assets/impats/img3.png";

const Impact = () => {
   const [counterOn, seTCounterOn] = useState(false);

   return (
      <div className="lg:my-24 my-14">
         <div className="text-center mb-10">
            <h1 className="impact-title mx-10">IMPACT</h1>
         </div>
         <ScrollTrigger
            onEnter={() => seTCounterOn(true)}
            onExit={() => seTCounterOn(false)}
         >
            {counterOn && (
               <section
                  className={`relative  py-10  bg-center bg-no-repeat
            w-full opacity-80  `}
                  id="bg-impact"
               >
                  <div
                     className=" hidden md:block absolute border border-green-500 
            h-[84%] left-[50%]"
                  ></div>
                  <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-2 ">
                     <div
                        className="w-full h-full m-auto lg:px-10 p-4  flex 
              md:justify-start   justify-center items-center "
                     >
                        <div className="text-[#000]">
                           <Chart
                              options={{
                                 labels: [
                                    "Vulnerable Groups",
                                    "Students",
                                    "Educational Institutions",
                                 ],
                                 legend: {
                                    fontSize: "16px",
                                    labels: {
                                       colors: "#f1f1f1",
                                       useSeriesColors: false,
                                    },
                                    horizontalAlign: "center",

                                    position: "left",
                                 },
                                 theme: {
                                    mode: "light",
                                    palette: "palette",
                                    monochrome: {
                                       enabled: false,
                                       color: "#255aee",
                                       shadeTo: "light",
                                       shadeIntensity: 0.65,
                                    },
                                 },
                                 responsive: [
                                    {
                                       breakpoint: 978,
                                       options: {
                                          chart: {
                                             width: 350,
                                          },
                                          legend: {
                                             position: "bottom",
                                          },
                                       },
                                    },
                                    {
                                       breakpoint: 480,
                                       options: {
                                          chart: {
                                             width: 270,
                                          },
                                          legend: {
                                             position: "bottom",
                                          },
                                       },
                                    },
                                 ],
                              }}
                              series={[40, 35, 25]}
                              type="pie"
                              width={490}
                              height={320}
                           />
                        </div>
                     </div>
                     <div className="flex justify-center items-center flex-col ">
                        <div
                           data-aos="zoom-in-up"
                           className="bg-gray-300 md:w-[250px] w-[260px]  md:p-4 p-2 mt-6 rounded-xl 
                  text-center hover:shadow-lg hover:shadow-[#F48E40]"
                        >
                           <div className="grid place-content-center">
                              <img
                                 src={students}
                                 className="h-16 w-16 text-center"
                                 alt=""
                              />
                           </div>
                           <h5 className="text-[#1E50EC] font-semibold pt-1 md:text-lg text-base ">
                              Students
                           </h5>
                           <h5 className="text-[#1E50EC] font-bold text-xl md:text-2xl">
                              <CountUp
                                 start={0}
                                 delay={0}
                                 end={12000}
                                 duration={3}
                              />
                              +
                           </h5>
                        </div>
                        <div
                           data-aos="zoom-in-up"
                           className="bg-gray-300 md:w-[250px] w-[260px]  md:p-4 p-2 mt-6 rounded-xl 
                  text-center hover:shadow-lg hover:shadow-[#F48E40]"
                        >
                           <div className="grid place-content-center">
                              <img
                                 src={insitute}
                                 className="h-16 w-16 text-center"
                                 alt=""
                              />
                           </div>
                           <h5 className="text-[#1E50EC] font-semibold pt-1 md:text-lg text-base ">
                              Educational Institutions
                           </h5>
                           <h5 className="text-[#1E50EC] font-bold text-xl md:text-2xl">
                              <CountUp
                                 start={0}
                                 delay={0}
                                 end={18}
                                 duration={2}
                              />
                              +
                           </h5>
                        </div>
                        <div
                           data-aos="zoom-in-up"
                           className="bg-gray-300 md:w-[250px] w-[260px]  md:p-4 p-2 mt-6 rounded-xl 
                  text-center hover:shadow-lg hover:shadow-[#F48E40]"
                        >
                           <div className="grid place-content-center">
                              <img
                                 src={vulnerable}
                                 className="h-16 w-16 text-center"
                                 alt=""
                              />
                           </div>
                           <h5 className="text-[#1E50EC] font-semibold pt-1 md:text-lg text-base ">
                              Vulnerable Groups
                           </h5>
                           <h5 className="text-[#1E50EC] font-bold text-xl md:text-2xl">
                              <CountUp
                                 start={0}
                                 delay={0}
                                 end={1800}
                                 duration={3}
                              />
                              +
                           </h5>
                        </div>
                     </div>
                  </div>
               </section>
            )}
         </ScrollTrigger>
      </div>
   );
};

export default Impact;
