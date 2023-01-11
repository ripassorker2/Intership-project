import React from 'react';
import img from '../../../assets/banner/banner-half-motiff.svg'


const BannerItem = ({banner}) => {
   const { picture, title} = banner;
   return (
     <>
       <div className="banner_slide w-[100%]">
         <div
           className="slide_details absolute flex justify-center 
         xl:mt-[350px] lg:mt-52 md:mt-40 mt-44"
         >
           <img
             className="banner_right xl:w-[480px] lg:w-[340px] 
             md:w-[250px] hidden sm:block"
             data-aos="fade-down-left"
             src={img}
             alt=""
           />
           <div
             className="xl:w-[60%] md:w-[80%] lg:w-[70%] w-[90%] 
           text-start fade"
           >
             <h1 className="md:text-5xl text-2xl font-bold" 
             data-aos="fade-left">
               {title}
             </h1>
             <button
               data-aos="fade-right"
               className="bg-[#f4b124] hover:bg-[#e4701d]
                hover:text-white rounded md:mt-4 mt-6 w-44
             h-14 text-black text-xl font-bold "
             >
               View Collection
             </button>
           </div>
         </div>
         <div className="slide-img mt-[85px] xl:mt-0 lg:mt-0 md:mt-0">
           <img
             className="slider_img relative w-[100%] xl:h-[100%] 
             h-[50vh]"
             src={picture}
             alt="img"
           />
         </div>
       </div>
     </>
   );
};

export default BannerItem;