import React from 'react';
import sitePhoto from '../../../assets/banner/banner-half-motiff.svg'


const BannerItem = ({banner}) => {
   const { img } = banner;
   return (
     <>
       <div className="banner_slide w-[100%]">
         <div className="slide_details absolute">
           <img
             className="banner_right xl:w-[480px] lg:w-[340px] 
             md:w-[250px] hidden sm:block"
             data-aos="fade-down-left"
             src={sitePhoto}
             alt=""
           />
         </div>
         <div className="slide-img">
           <img
             className="slider_img relative w-full h-full"
             src={img}
             alt="img"
           />
         </div>
       </div>
     </>
   );
};

export default BannerItem;