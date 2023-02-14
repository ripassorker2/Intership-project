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
        <div className="text-center mt-8">
          <h1 className="our-team-title">Our Team</h1>
        </div>
        <div className=" flex  overflow-hidden relative mb-8">
          <div className="w-full  rounded text-gray-800 relative ">
            <div className=" grid lg:grid-cols-2 gap-6 ">
              <div className="mt-6 ">
                <div className=" bg-[#77cf1a]   block rounded-lg  overflow-hidden">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <figure>
                      <img
                        src={img1}
                        alt=""
                        className="w-full  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                      />
                    </figure>

                    <svg
                      className="absolute left-0 -bottom-[1px] "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#77cf1a"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-5 text-center text-gray-800 ">
                    <h5 className="md:text-xl text-base font-semibold ">
                      Shaik.Salamullah
                    </h5>
                    <p className="md:text-lg text-base mb-2">Founder</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <div className="">
                  <div className="text-[14px] text-gray-800 leading-2">
                    <p className="font-semibold">Greetings,</p>
                    <p className="py-2">
                      It’s my privilege and honour for me to interact with you
                      and introduce you to The Change.
                    </p>
                    <p className="pb-2">
                      With such aims and objectives, The Change was established
                      having strong message for the various purposes, to do
                      something for the growth of our country in various and to
                      help India’s commitment in achieving the UNSDG goals. The
                      Change, today stands proud and tall, having come a long
                      way since its inception. It has built for itself an
                      enviable reputation few can match. All this could be
                      achieved through vision, sheer dint of effort and ground
                      level execution.
                    </p>
                    <p className="pb-2">
                      {" "}
                      At The Change, we mainly focus on the United Nations
                      Sustainable Development Goals which helps the India and
                      this globe to be sustainable and inclusive. Our focus
                      sheds on our initiatives like STEWACD, which is the
                      acronym of Support towards Empowerment of Women and Child
                      Development, where we focus on the UNSDG Goals 4,5 -
                      Quality Education and Gender Equality. Further, we have
                      initiatives for UNSDG Goals 2,3,13 – Zero Hunger, Good
                      Health and Well-being, Climate Action, respectively. We
                      conduct these programmes for educating the future
                      generations from the very young stage in collaboration
                      with schools and colleges.{" "}
                    </p>{" "}
                    <p className="pb-2">
                      As the Founder of The Change, I strongly believe that it’s
                      our duty and responsibility to give back to the society in
                      which we live, in return of the many things we avail from
                      it in our day-to day lives. The Change as an organization
                      stems from this root belief. My team and I quest to work
                      with full dedication, sincerity and honesty. We dream to
                      see a brighter India with this little initiative of ours
                      and know that our dreams will bear fruit soon as we are
                      not alone.
                    </p>{" "}
                    <p className="pb-2">
                      {" "}
                      The backbone of The Change is its Team, Sponsors,
                      Volunteers and all supporters and well-wishers who are
                      helping us in many different ways. We are very grateful
                      for the support that we get from many individual people
                      that make our work possible. We always welcome support
                      offered in any way, if you are youths, please feel free to
                      visit us and join our activities at any time. We welcome
                      you all to join us for making this Earth more Sustainable
                      and Inclusive.
                    </p>
                    <p className="pb-2"> Regards</p>
                    <p className="pb-2">Shaik.Salamullah</p>
                    <p className="font-semibold">Founder-The Change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div className="mb-6 lg:mb-0">
            <div className=" bg-[#77cf1a]   block rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <figure>
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-[280px]  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                  />
                </figure>

                <svg
                  className="absolute left-0 -bottom-[1px]  h-14 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#77cf1a"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-5 text-center text-gray-800 ">
                <h5 className="md:text-lg text-base font-semibold ">
                  Raasi kutcharlapati
                </h5>
                <p className=" text-base mb-2">Director - Human Resource</p>
              </div>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div className=" bg-[#77cf1a]   block rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <figure>
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-[280px]  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                  />
                </figure>

                <svg
                  className="absolute left-0 -bottom-[1px]  h-14 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#77cf1a"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-5 text-center text-gray-800 ">
                <h5 className="md:text-lg text-base font-semibold ">
                  Nagaraj Golla
                </h5>
                <p className=" text-base mb-2">Associate Coordinator</p>
              </div>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div className=" bg-[#77cf1a]   block rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <figure>
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-[280px]  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                  />
                </figure>

                <svg
                  className="absolute left-0 -bottom-[1px]  h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#77cf1a"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-5 text-center text-gray-800 ">
                <h5 className="md:text-lg text-base font-semibold ">
                  Mohammed Faiz K
                </h5>
                <p className=" text-base mb-2">Director - Designs</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="md:text-4xl text-center text-3xl py-3 pt-12 pl-2 font-semibold text-gray-800 uppercase ">
          Our Advisory Board
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div className="mb-6 lg:mb-0">
            <div className=" bg-[#77cf1a]   block rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <figure>
                  <img
                    src={img5}
                    alt=""
                    className="w-full h-[280px]  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                  />
                </figure>

                <svg
                  className="absolute left-0 -bottom-[1px] h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#77cf1a"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-5 text-center text-gray-800 ">
                <h5 className="md:text-lg text-base font-semibold ">
                  Dr. S Veerabhadra Rao
                </h5>
                <p className=" text-base mb-2">Member</p>
              </div>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div className=" bg-[#77cf1a]   block rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <figure>
                  <img
                    src={img7}
                    alt=""
                    className="w-full h-[280px]  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                  />
                </figure>

                <svg
                  className="absolute left-0 -bottom-[1px]  h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#77cf1a"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-5 text-center text-gray-800 ">
                <h5 className="md:text-lg text-base font-semibold ">
                  Smt V R Thulasi
                </h5>
                <p className=" text-base mb-2">Member</p>
              </div>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div className=" bg-[#77cf1a]   block rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <figure>
                  <img
                    src={img6}
                    alt=""
                    className="w-full h-[280px]  rounded-t-lg  hover:scale-110 hover:skew-x-1 duration-300 "
                  />
                </figure>

                <svg
                  className="absolute left-0 -bottom-[1px]  h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#77cf1a"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-5 text-center text-gray-800 ">
                <h5 className="md:text-lg text-base font-semibold ">
                  Dr. BalaRangaiah Golla
                </h5>
                <p className=" text-base mb-2">Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
