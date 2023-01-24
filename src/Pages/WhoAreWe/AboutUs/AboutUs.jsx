import React from 'react';
import logo from "../../../assets/banner-logo/logo.png";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-20">
        <div className='text-center'>
          <h1 className='about-title'>About Us</h1>
        </div>
        <div className="flex gap-10 justify-center align-middle items-center">
          <div className="xl:w-[35%] lg:w-[40%] md:w-[50%]">
            <img className="h-full w-full " src={logo} alt="" />
          </div>
          <div className="xl:w-[65%] lg:w-[50%] md:w-[90%] ">
            <article className="mt-10">
              We started this organisation because we felt that there are
              people in this world who dream to live a life that we are living
              right now. While we dream of luxuries, they just hope to get a
              life with basic needs. Education, Awareness and Hygiene are
              those basic needs. We can give something to the society, by
              helping the needy. For that, we felt education was the right
              tool, to eradicate slavery and disguised unemployment. So, the
              main reason to join hands was to push someone to get a better
              life. In a larger picture, the United Nations Sustainable
              Development Goals (UNSDGs) are incorporated for the same, so we
              started to work on the UNSDG Goals Implementation We firmly
              believe that " The change we start now in this society may not
              bring a huge impact. But we are sure it will change the mindsets
              of the upcoming generations and make this world a better place
              to live
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;