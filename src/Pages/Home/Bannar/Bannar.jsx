import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from "./BannerItem";
import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/4.jpg'
import img5 from '../../../assets/banner/5.jpg'
import img6 from '../../../assets/banner/6.jpg'

const Banner = () => {
   const banner = [
     {
       id: 1,
       img: img1,
     },
     {
       id: 2,
       img: img2,
     },
     {
       id: 3,
       img: img3,
     },
     {
       id: 4,
       img: img4,
     },
     {
       id: 5,
       img: img5,
     },
     {
       id: 6,
       img: img6,
     },
   ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper xl:mt-[122px] lg:mt-[112px] md:mt-[92px] mt-[82px] lg:h-[500px]"
      >
        {
        banner.map((banner, i) => (
          <SwiperSlide key={i}>
            <BannerItem banner={banner}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
