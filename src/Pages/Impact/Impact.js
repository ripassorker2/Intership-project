import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Impact = () => {
  const [counterOn, seTCounterOn] = useState(false);

  return (
    <div className="  my-10">
      <h1 className="md:text-5xl text-3xl font-semibold text-center uppercase pb-7">
        IMPACT On Us
      </h1>
      <ScrollTrigger
        onEnter={() => seTCounterOn(true)}
        onExit={() => seTCounterOn(false)}
      >
        {counterOn && (
          <section class="relative h-[500px]  bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlyZibPNLePg2I6WJlhegUHo15i1cjqdwWn7rwCGvz9HzZSDu-yEByTChhCiWbQ8KCUM&usqp=CAU)]  bg-cover bg-center bg-no-repeat w-full flex justify-center flex-row items-center lg:gap-9 opacity-80 ">
            {/* <div class="absolute inset-0  md:bg-transparent md:bg-gradient-to-r md:from-[#86D955]/25 md:to-[#86D955]/25"></div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-20  md:gap-9 gap-6 max-w-screen-xl mx-auto">
              <div
                data-aos="fade-right"
                className="bg-gray-300  w-[300px]  p-6 rounded-xl text-center hover:shadow-lg hover:shadow-[#F48E40]"
              >
                <h5 className=" text-[#1E50EC] font-semibold pt-2 text-xl">
                  <h5 className=" text-[#1E50EC] font-bold text-2xl">
                    <CountUp start={0} delay={0} end={12000} duration={3} />+
                  </h5>
                  Students
                </h5>
              </div>
              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 w-[300px]  p-6 rounded-xl text-center hover:shadow- hover:shadow-[#F48E40]"
              >
                <h5 className="text-[#1E50EC] font-bold text-2xl">
                  <CountUp start={0} delay={0} end={3400} duration={2} />+
                </h5>
                <h5 className="text-[#1E50EC] font-semibold pt-2 text-xl">
                  Educational Institutions
                </h5>
              </div>
              <div
                data-aos="fade-left"
                className="bg-gray-300 w-[300px]  p-6 rounded-xl text-center hover:shadow-lg hover:shadow-[#F48E40]"
              >
                <h5 className="text-[#1E50EC] font-bold text-2xl lg:text-3xl">
                  <CountUp start={0} delay={0} end={1800} duration={3} />+
                </h5>
                <h5 className="text-[#1E50EC] font-semibold pt-2 text-xl ">
                  Vulnerable Groups
                </h5>
              </div>
            </div>
          </section>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default Impact;
