import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";
import amulya from "../../../assets/homebanner/amulya.jpg";
import jop from "../../../assets/homebanner/jop.jpg";
import ramarao from "../../../assets/homebanner/ramarao.jpg";
import Richel from "../../../assets/homebanner/Richel Rani.jpg";
import surekha from "../../../assets/homebanner/surekha.jpg";

const FeedBack = () => {
  const imgData = [
    { id: 1, img: surekha },
    { id: 2, img: jop },
    { id: 3, img: Richel },
    { id: 4, img: ramarao },
    { id: 5, img: amulya },
  ];
  return (
    <div className="max-w-screen-xl mx-auto w-[90%] my-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgData?.map((data, i) => (
          <SwiperSlide key={i}>
            <section className={`relative  w-full`}>
              <img
                className="w-full max-h-[500px] bg-cover"
                src={data?.img}
                alt=""
              />

              <div className="absolute inset-0 border-2 border-[#076797]"></div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBack;
