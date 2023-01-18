import React from "react";
import "./ourteam.css";
import img1 from "../../../assets/team/img1.jpg";
import img2 from "../../../assets/team/img2.jpg";
import img3 from "../../../assets/team/img3.jpg";
import img4 from "../../../assets/team/img4.jpg";
import img5 from "../../../assets/team/img5.JPG";
import img6 from "../../../assets/team/img6.jpg";
import img7 from "../../../assets/team/img7.jpg";

const OurTeam = () => {
  return (
    <div className=" my-9">
      <div className="max-w-screen-xl mx-auto w-[90%] ">
        {/* <div class="grid  md:grid-cols-2  gap-6 justify-center">
          <div class="card bg-blue-500  duration-300  h-[400px] shadow-md rounded m-4 hover:shadow-xl">
            <div class="h-3/4 w-full ">
              <figure>
                <img
                  class="w-full  h-[300px] bg-cover rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img1}
                  alt="Founder"
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 mt-3 text-center text-gray-300 ">
              <p>
                <span class=" font-semibold uppercase tracking-wide ">
                  Salamullah Shaik
                </span>
              </p>
              <p class="text-gray-300 text-base leading-5 mt-1 ">Founder</p>
            </div>
          </div>
          <div className="flex justify-center items-center md:p-2 p-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident magni neque cum, voluptatum eos nulla esse nesciunt
              voluptate doloremque dolor vero suscipit unde non eveniet
              perferendis facilis illo autem sapiente error dignissimos? Unde
              recusandae, optio natus placeat illo labore? Tenetur aliquid
              ipsam, minus ullam ipsum, dicta tempore tempora reiciendis
              consequuntur dolor pariatur, iusto dignissimos rerum quam hic
              repudiandae quia! Iste distinctio fuga totam ex recusandae
              accusamus qui quibusdam inventore sapiente quis saepe, esse veniam
              mollitia nesciunt nostrum deleniti sunt earum in animi nihil sequi
              explicabo. Ipsam maiores rem nostrum at dolores itaque tempora ea
              quod cum, dolorem dignissimos excepturi, ducimus explicabo
              sapiente vel libero omnis laboriosam doloribus ex praesentium
              officiis. Exercitationem quasi minima aliquam, ab at libero
              eligendi sunt ratione!
            </p>
          </div>
        </div> */}

        <div>
          <div class=" flex items-center  overflow-hidden relative">
            <div class="w-full  rounded  shadow-xl mx-auto text-gray-800 relative md:text-left">
              <h2 className="md:text-4xl text-3xl py-3 pl-2 font-semibold uppercase">
                Our team
              </h2>
              <div class="grid md:grid-cols-2 gap-6 m-3 items-center">
                <div class="w-full relative">
                  <div class=" p-3 text-center bg-blue-500 w-full text-gray-200 absolute bottom-0 z-50">
                    <span class=" font-semibold uppercase tracking-wide ">
                      Salamullah Shaik
                    </span>

                    <p class="text-gray-200 text-base leading-5 mt-1 ">
                      Founder
                    </p>
                  </div>
                  <div class="relative">
                    <img
                      src={img1}
                      class="w-full lg:h-[600px] md:h-[500px]"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class="md:pl-5">
                    <p class="text-sm text-gray-900">
                      <span className="pb-2">Greetings,</span> <br />
                      It’s my privilege and honour for me to interact with you
                      and introduce you to The Change. <br />
                      With such aims and objectives, The Change was established
                      having strong message for the various purposes, to do
                      something for the growth of our country in various and to
                      help India’s commitment in achieving the UNSDG goals. The
                      Change, today stands proud and tall, having come a long
                      way since its inception. It has built for itself an
                      enviable reputation few can match. All this could be
                      achieved through vision, sheer dint of effort and ground
                      level execution. <br /> At The Change, we mainly focus on
                      the United Nations Sustainable Development Goals which
                      helps the India and this globe to be sustainable and
                      inclusive. Our focus sheds on our initiatives like
                      STEWACD, which is the acronym of Support towards
                      Empowerment of Women and Child Development, where we focus
                      on the UNSDG Goals 4,5 - Quality Education and Gender
                      Equality. Further, we have initiatives for UNSDG Goals
                      2,3,13 – Zero Hunger, Good Health and Well-being, Climate
                      Action, respectively. We conduct these programmes for
                      educating the future generations from the very young stage
                      in collaboration with schools and colleges. <br /> As the
                      Founder of The Change, I strongly believe that it’s our
                      duty and responsibility to give back to the society in
                      which we live, in return of the many things we avail from
                      it in our day-to day lives. The Change as an organization
                      stems from this root belief. My team and I quest to work
                      with full dedication, sincerity and honesty. We dream to
                      see a brighter India with this little initiative of ours
                      and know that our dreams will bear fruit soon as we are
                      not alone. <br /> The backbone of The Change is its Team,
                      Sponsors, Volunteers and all supporters and well-wishers
                      who are helping us in many different ways. We are very
                      grateful for the support that we get from many individual
                      people that make our work possible. We always welcome
                      support offered in any way, if you are youths, please feel
                      free to visit us and join our activities at any time. We
                      welcome you all to join us for making this Earth more
                      Sustainable and Inclusive. <br /> Regards, <br />{" "}
                      Shaik.Salamullah <br />
                      Founder-The Change
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div class="card bg-blue-500 duration-300   h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px]  rounded-t hover:scale-110  hover:skew-x-1 duration-300"
                  src={img2}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-200">
              <p>
                <span class=" font-semibold uppercase tracking-wide ">
                  Raasi kutcharlapati
                </span>
              </p>
              <p class="text-gray-200 text-base leading-5 mt-1 ">
                Director - Human Resource
              </p>
            </div>
          </div>
          <div class="card bg-blue-500  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px]  rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img4}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-300">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Mohammed Faiz K
                </span>
              </p>
              <p class="text-gray-300 text-base leading-5 mt-1 ">
                Director - Designs
              </p>
            </div>
          </div>
          <div class="card bg-blue-500  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px]  rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img3}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-300">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Nagaraj Golla
                </span>
              </p>
              <p class="text-gray-300 text-base leading-5 mt-1 ">
                Associate Coordinator
              </p>
            </div>
          </div>
        </div>

        <h2 className="md:text-4xl text-3xl py-3 pt-5 pl-2 font-bold uppercase">
          Our Advisor Board
        </h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div class="card bg-blue-500  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px]  rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img5}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-300">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Dr. S Veerabhadra Rao
                </span>
              </p>
              <p class="text-gray-300 text-base leading-5 mt-1 ">Member</p>
            </div>
          </div>
          <div class="card bg-blue-500  duration-300 h-80 shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px] bg-cover rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img7}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-300">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Smt V R Thulasi
                </span>
              </p>
              <p class=" text-base leading-5 mt-1 ">Member</p>
            </div>
          </div>
          <div class="card bg-blue-500  duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl ">
            <div class="h-3/4 w-full">
              <figure>
                <img
                  class="w-full h-[230px]  rounded-t hover:scale-110 hover:skew-x-1 duration-300"
                  src={img6}
                  alt=""
                />
              </figure>
            </div>
            <div class="w-full h-1/4 p-3 text-center text-gray-300">
              <p>
                <span class=" font-semibold uppercase tracking-wide  ">
                  Dr. BalaRangaiah Golla
                </span>
              </p>
              <p class="text-gray-300 text-base leading-5 mt-1 ">Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
