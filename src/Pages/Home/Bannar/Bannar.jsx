import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from "./BannerItem";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <>
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
        className="mySwiper xl:mt-[122px] lg:mt-[112px] md:mt-[92px] mt-[82px]"
      >
        {banner.map((banner, i) => (
          <SwiperSlide key={i}>
            <BannerItem banner={banner}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
