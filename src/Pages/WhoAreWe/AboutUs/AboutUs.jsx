import React from "react";
import logo from "../../../assets/banner-logo/logo.png";
import "./AboutUs.css";

const AboutUs = () => {
   return (
      <>
         <div className="max-w-screen-xl mx-auto w-[90%] lg:my-28 my-14">
            <div className="text-center">
               <h1 className="about-title mb-6">About Us</h1>
            </div>
            <div className="md:flex px-5 sm:grid sm:grid-cols-1">
               <div className="md:w-1/2 sm:w-[100%] flex justify-center">
                  <img className="h-72 " src={logo} alt="" />
               </div>
               <div className="md:w-1/2 sm:w-[100%] mb-6">
                  <article className=" text-[16px]">
                     We started this organisation because we felt that there are
                     people in this world who dream to live a life that we are
                     living right now. While we dream of luxuries, they just
                     hope to get a life with basic needs. Education, Awareness
                     and Hygiene are those basic needs. We can give something to
                     the society, by helping the needy. For that, we felt
                     education was the right tool, to eradicate slavery and
                     disguised unemployment. So, the main reason to join hands
                     was to push someone to get a better life. In a larger
                     picture, the United Nations Sustainable Development Goals
                     (UNSDGs) are incorporated for the same, so we started to
                     work on the UNSDG Goals Implementation We firmly believe
                     that " The change we start now in this society may not
                     bring a huge impact. But we are sure it will change the
                     mindsets of the upcoming generations and make this world a
                     better place to live.
                  </article>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutUs;
