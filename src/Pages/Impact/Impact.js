import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./impact.css";
import Chart from "react-apexcharts";

const Impact = () => {
  const [counterOn, seTCounterOn] = useState(false);

  return (
    <div className="  my-10">
      <h1 className="md:text-5xl text-3xl font-semibold text-center uppercase pb-7">
        IMPACT
      </h1>
      <ScrollTrigger
        onEnter={() => seTCounterOn(true)}
        onExit={() => seTCounterOn(false)}
      >
        {counterOn && (
          <section
            class={`relative h-[520p]  py-10 bg-cover bg-center bg-no-repeat w-full opacity-80  `}
            id="bg-overlay"
          >
            <div className=" hidden md:block absolute border border-green-500 h-[80%] left-[50%]"></div>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-2 ">
              <div className="w-full h-full m-auto lg:px-10 p-4  flex md:justify-start   justify-center items-center ">
                <div className="text-white">
                  <Chart
                    options={{
                      labels: [
                        "Students",
                        "Educational Institutions",
                        "Vulnerable Groups",
                      ],
                      legend: {
                        fontSize: "14px",
                        labels: {
                          colors: "#f1f1f1",
                          useSeriesColors: false,
                        },
                        horizontalAlign: "center",

                        position: "left",
                      },
                      theme: {
                        mode: "light",
                        palette: "palette2",
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
                    series={[12000, 18000, 1800]}
                    type="pie"
                    width={490}
                    height={320}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col ">
                <div
                  data-aos="zoom-in-up"
                  className="bg-gray-300  md:w-[280px] w-[260px]  md:p-6 p-4 rounded-xl text-center hover:shadow-lg hover:shadow-[#F48E40]"
                >
                  <h5 className="text-[#1E50EC] font-bold text-2xl lg:text-3xl">
                    <CountUp start={0} delay={0} end={12000} duration={3} />+
                  </h5>
                  <h5 className="text-[#1E50EC] font-semibold pt-2 text-xl ">
                    Students
                  </h5>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className="bg-gray-300 md:w-[280px] w-[260px]  md:p-6 p-4 mt-6 rounded-xl text-center hover:shadow-lg hover:shadow-[#F48E40]"
                >
                  <h5 className="text-[#1E50EC] font-bold text-2xl">
                    <CountUp start={0} delay={0} end={18} duration={2} />
                  </h5>
                  <h5 className="text-[#1E50EC] font-semibold pt-2 text-xl">
                    Educational Institutions
                  </h5>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className="bg-gray-300 md:w-[280px] w-[260px]  md:p-6 p-4 mt-6 rounded-xl text-center hover:shadow-lg hover:shadow-[#F48E40]"
                >
                  <h5 className="text-[#1E50EC] font-bold text-2xl lg:text-3xl">
                    <CountUp start={0} delay={0} end={1800} duration={3} />+
                  </h5>
                  <h5 className="text-[#1E50EC] font-semibold pt-2 text-xl ">
                    Vulnerable Groups
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
