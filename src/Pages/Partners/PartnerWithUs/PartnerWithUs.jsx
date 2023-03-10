import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import img from "../../../assets/partners/for-partner-top@5x-1536x692-1.png";

const PartnerWithUs = () => {
   return (
      <section className="max-w-screen-xl w-[90%] mx-auto my-16">
         <h4 className="md:text-4xl text-2xl text-center font-serif font-semibold mb-3">
            Partner with us
         </h4>
         <div className="grid md:grid-cols-2 gap-10 place-content-center">
            <div className="md:w-[90%] mx-auto grid place-content-center mt-5">
               <img
                  src={
                     "https://img.freepik.com/premium-vector/handshake-business-partners-united-puzzle-details-concept-successful-vector-illustration_143808-859.jpg?w=900"
                  }
                  alt=""
                  className="rounded-lg w-full bg-cover"
               />
            </div>
            <div className="grid place-content-center md:w-[90%] leading-3 ">
               <h4 className="md:text-2xl font-serif font-semibold mb-3">
                  Partner
               </h4>
               <p className=" text-lg font-serif w-[90%]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam explicabo commodi accusantium reiciendis pariatur
                  aspernatur ipsa voluptatibus quo aperiam, non est quasi libero
                  dolor, deserunt eos sit amet enim tempore error. Alias modi
                  quam perspiciatis fugiat.
               </p>
               <div className="mt-4">
                  <h4 className="inline-flex text-lg">
                     <HiOutlineMail size={30} className="mr-2" />
                     thechange2k19@gmail.com
                  </h4>{" "}
                  <br />
                  <h4 className="inline-flex text-lg">
                     <TbWorld size={30} className="mr-2" />
                     https://www.the-change.com
                  </h4>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PartnerWithUs;
