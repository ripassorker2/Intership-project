import React from 'react';


const BannerItem = ({banner}) => {
   const { picture, title} = banner;
   return (
     <>
       <div className="banner_slide">
         <div className="slide_details absolute flex justify-center 
         xl:mt-[350px] lg:mt-52 md:mt-40 mt-24">
           <div className="xl:w-[60%] md:w-[80%] lg:w-[70%] w-[90%] 
           text-start fade">
               <h1 className="md:text-5xl text-xl font-bold"
                 data-aos="fade-left">{title}
               </h1>
             <button
               data-aos="fade-right"
               className="bg-[#f4b124] hover:bg-[#e4701d]
                hover:text-white rounded md:mt-4 mt-12 w-44
             h-14 text-black text-xl font-bold "
             >View Collection
             </button>
           </div>
         </div>
         <div className="slide-img">
           <img
             className="slider_img relative xl:w-[100%] w-[100%] xl:h-[100%] 
             h-[50vh]" src={picture} alt="img"/>
         </div>
       </div>
     </>
   );
};

export default BannerItem;