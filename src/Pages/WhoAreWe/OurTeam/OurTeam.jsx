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
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto w-[90%] ">
        <h2 className="md:text-4xl text-3xl py-4 pl-2 font-semibold uppercase">
          Our team
        </h2>
        <div class="grid  md:grid-cols-2  gap-6 justify-center">
          <div class="card bg-gray-900 hover:bg-white duration-300  h-[400px] shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img
                class="w-full h-full bg-cover rounded-t "
                src={img1}
                alt="Founder"
              />
            </div>
            <div class="w-full h-1/4 p-3 mt-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Salamullah Shaik
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">Founder</p>
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
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div class="card bg-gray-900 hover:bg-white duration-300   h-80 shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img
                class="w-full h-full object-cover rounded-t "
                src={img2}
                alt="piña"
              />
            </div>
            <div class="w-full h-1/4 p-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Raasi kutcharlapati
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">
                Director - Human Resource
              </p>
            </div>
          </div>
          <div class="card bg-gray-900 hover:bg-white duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img
                class="w-full h-full object-cover rounded-t "
                src={img3}
                alt="piña"
              />
            </div>
            <div class="w-full h-1/4 p-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Nagaraj Golla
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">
                Associate Coordinator
              </p>
            </div>
          </div>
          <div class="card bg-gray-900 hover:bg-white duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img
                class="w-full h-full object-cover rounded-t "
                src={img4}
                alt="piña"
              />
            </div>
            <div class="w-full h-1/4 p-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Mohammed Faiz K
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">
                Director - Designs
              </p>
            </div>
          </div>
        </div>

        <h2 className="md:text-4xl text-3xl py-3 pt-5 pl-2 font-semibold uppercase">
          Our Advisor Board
        </h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 ">
          <div class="card bg-gray-900 hover:bg-white duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img
                class="w-full h-full object-cover rounded-t "
                src={img5}
                alt=""
              />
            </div>
            <div class="w-full h-1/4 p-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Dr. BalaRangaiah Golla
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">Member</p>
            </div>
          </div>
          <div class="card bg-gray-900 hover:bg-white duration-300  h-80 shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img
                class="w-full h-full object-cover rounded-t "
                src={img6}
                alt="img"
              />
            </div>
            <div class="w-full h-1/4 p-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Dr. BalaRangaiah Golla
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">Member</p>
            </div>
          </div>
          <div class="card bg-gray-900 hover:bg-white duration-300 h-80 
          shadow-md rounded m-3 hover:shadow-xl">
            <div class="h-3/4 w-full">
              <img class="w-full h-full rounded-t" src={img7} alt="img" />
            </div>
            <div class="w-full h-1/4 p-3 text-center">
              <a href="/" class=" text-gray-300">
                <span class=" font-semibold uppercase tracking-wide ">
                  Smt V R Thulasi
                </span>
              </a>
              <p class="text-gray-300 text-base leading-5 mt-1">Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
