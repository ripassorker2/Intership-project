import React from "react";
import "./ourteam.css";
import img1 from "../../../assets/team/img1.jpg";
import img2 from "../../../assets/team/img2.jpg";
import img3 from "../../../assets/team/img3.jpg";
import img4 from "../../../assets/team/img4.jpg";
import img5 from "../../../assets/team/t-5.png";
import img6 from "../../../assets/team/t-6.png";
import img7 from "../../../assets/team/t-7.png";

const OurTeam = () => {
  return (
    <div className=" my-9">
      <div className="max-w-screen-xl mx-auto w-[90%]">
        <div className="text-center my-24">
          <h1 className="our-team-title">Our Team</h1>
        </div>
        <div>
          <div class=" flex items-center  overflow-hidden relative">
            <div class="w-full  rounded  shadow-xl mx-auto text-gray-800
             relative md:text-left">
              <div class=" grid lg:grid-cols-2 gap-6 m-3 items-center">
                <div class="w-full  relative">
                  <div class=" p-4 text-center bg-[#F48E40] w-full text-gray-800 absolute bottom-0 z-50 text-xl">
                    <span class=" font-semibold uppercase tracking-wide ">
                      Shaik.Salamullah
                    </span>

                    <p class=" text-lg leading-5 mt-1 ">Founder</p>
                  </div>
                  <div class="relative">
                    <img src={img1} class="w-full h-full " alt="" />
                  </div>
                </div>
                <div class="w-full mt-5">
                  <div class="">
                    <div class="text-[16px] text-gray-800 leading-2">
                      <span className="font-bold"> Greetings,</span>
                      <p className="py-2">
                        It’s my privilege and honour for me to interact with you
                        and introduce you to The Change.
                      </p>
                      <p className="pb-2">
                        With such aims and objectives, The Change was
                        established having strong message for the various
                        purposes, to do something for the growth of our country
                        in various and to help India’s commitment in achieving
                        the UNSDG goals. The Change, today stands proud and
                        tall, having come a long way since its inception. It has
                        built for itself an enviable reputation few can match.
                        All this could be achieved through vision, sheer dint of
                        effort and ground level execution.
                      </p>
                      <p className="pb-2">
                        {" "}
                        At The Change, we mainly focus on the United Nations
                        Sustainable Development Goals which helps the India and
                        this globe to be sustainable and inclusive. Our focus
                        sheds on our initiatives like STEWACD, which is the
                        acronym of Support towards Empowerment of Women and
                        Child Development, where we focus on the UNSDG Goals 4,5
                        - Quality Education and Gender Equality. Further, we
                        have initiatives for UNSDG Goals 2,3,13 – Zero Hunger,
                        Good Health and Well-being, Climate Action,
                        respectively. We conduct these programmes for educating
                        the future generations from the very young stage in
                        collaboration with schools and colleges.{" "}
                      </p>{" "}
                      <p className="pb-2">
                        As the Founder of The Change, I strongly believe that
                        it’s our duty and responsibility to give back to the
                        society in which we live, in return of the many things
                        we avail from it in our day-to day lives. The Change as
                        an organization stems from this root belief. My team and
                        I quest to work with full dedication, sincerity and
                        honesty. We dream to see a brighter India with this
                        little initiative of ours and know that our dreams will
                        bear fruit soon as we are not alone.
                      </p>{" "}
                      <p className="pb-2">
                        {" "}
                        The backbone of The Change is its Team, Sponsors,
                        Volunteers and all supporters and well-wishers who are
                        helping us in many different ways. We are very grateful
                        for the support that we get from many individual people
                        that make our work possible. We always welcome support
                        offered in any way, if you are youths, please feel free
                        to visit us and join our activities at any time. We
                        welcome you all to join us for making this Earth more
                        Sustainable and Inclusive.
                      </p>
                      <p className="pb-2"> Regards</p>
                      <p className="pb-2">Shaik.Salamullah</p>
                      Founder-The Change
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div class="card bg-[#F48E40] duration-300   h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px] object-cover rounded-t hover:scale-110  hover:skew-x-1 duration-300"
                  src={img2}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-800">
              <p>
                <span class=" font-semibold uppercase tracking-wide ">
                  Raasi kutcharlapati
                </span>
              </p>
              <p class="text-gray-800 text-base leading-5 mt-1 ">
                Director - Human Resource
              </p>
            </div>
          </div>
          <div class="card bg-[#F48E40]  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px]  rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img3}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-800">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Nagaraj Golla
                </span>
              </p>
              <p class="text-gray-800 text-base leading-5 mt-1 ">
                Associate Coordinator
              </p>
            </div>
          </div>
          <div class="card bg-[#F48E40]  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px] object-cover rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img4}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-800">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Mohammed Faiz K
                </span>
              </p>
              <p class="text-gray-800 text-base leading-5 mt-1 ">
                Director - Designs
              </p>
            </div>
          </div>
        </div>

        <h2 className="md:text-4xl text-center text-3xl py-3 pt-9 pl-2 font-semibold text-gray-800 uppercase">
          Our Advisor Board
        </h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div class="card bg-[#F48E40]  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px] object-cover rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img5}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-800">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Dr. S Veerabhadra Rao
                </span>
              </p>
              <p class="text-gray-800 text-base leading-5 mt-1 ">Member</p>
            </div>
          </div>

          <div
            class="card bg-[#F48E40]  duration-300 h-80 
          shadow-md rounded m-3 hover:shadow-xl "
          >
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px] object-cover rounded-t hover:scale-110 
                  hover:skew-x-1 duration-300"
                  src={img7}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-800">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Smt V R Thulasi
                </span>
              </p>
              <p class=" text-base leading-5 mt-1 ">Member</p>
            </div>
          </div>
          <div class="card bg-[#F48E40]  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px] object-cover rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img6}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-800">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Dr. BalaRangaiah Golla
                </span>
              </p>
              <p class="text-gray-800 text-base leading-5 mt-1 ">Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
