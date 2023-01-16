import React from 'react';
import img from '../../../assets/banner/banner-half-motiff.svg'


const BannerItem = ({banner}) => {
   const { picture, title} = banner;
   return (
     <>
       <div className="banner_slide w-[100%]">
         <div
           className="slide_details absolute flex justify-center 
         xl:mt-[320px] lg:mt-72 md:mt-72 mt-56"
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
             <h1
               className="md:text-3xl lg:text:2xl xl:text-5xl text-xl 
             font-bold"
               data-aos="fade-left"
             >
               {title}
             </h1>
             <button
               data-aos="fade-right"
               className="bg-[#84D957] hover:bg-[#34910b]
                hover:text-white rounded md:mt-12 lg:mt-12 mt-6 
                md:w-44 md:h-14 w-28 h-10 text-black md:text-xl text-xs font-bold "
             >
               View Collection
             </button>
           </div>
         </div>
         <div className="slide-img mt-[85px] xl:mt-0 lg:mt-0 md:mt-0">
           <img
             className="slider_img relative w-[100%]  xl:h-[100%] 
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