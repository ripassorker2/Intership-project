import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from "./BannerItem";
import img1 from '../../../assets/banner/1 (Custom).jpg'
import img2 from '../../../assets/banner/2 (Custom) (2).jpg'
import img3 from '../../../assets/banner/banner.jpg'
import img4 from '../../../assets/banner/4 (Custom)_auto_x2.jpg'
import img5 from '../../../assets/banner/6 (Custom)_auto_x2.jpg'
import img6 from '../../../assets/banner/7 (Custom)_auto_x2.jpg'

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
  // const [banner, setBanner] = useState([]);

  // useEffect(() => {
  //   fetch("banner.json")
  //     .then((res) => res.json())
  //     .then((data) => setBanner(data));
  // }, []);
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
        className="mySwiper xl:mt-[122px] lg:mt-[112px] md:mt-[92px] mt-[82px]"
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
