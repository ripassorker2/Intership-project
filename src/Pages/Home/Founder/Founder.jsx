import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";

const Founder = () => {
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
        <SwiperSlide>
          <section
            class={`relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]  bg-cover bg-center bg-no-repeat w-full`}
          >
            <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/50"></div>

            <div class="relative px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-28">
              <div class="max-w-xl text-center sm:text-left text-gray-300 ">
                <h1 class="text-3xl  font-extrabold sm:text-5xl">
                  Let us find
                </h1>

                <p class="mt-4  max-w-lg sm:text-xl sm:leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            class={`relative bg-[url(https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVwdHxlbnwwfHwwfHw%3D&w=1000&q=80)]  bg-cover bg-center bg-no-repeat w-full`}
          >
            <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/50"></div>

            <div class="relative px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-28">
              <div class="max-w-xl text-center sm:text-left text-gray-300 ">
                <h1 class="text-3xl  font-extrabold md:text-5xl">
                  Let us find
                </h1>

                <p class="mt-4  max-w-lg sm:text-xl text-sm sm:leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            class={`relative bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlyZibPNLePg2I6WJlhegUHo15i1cjqdwWn7rwCGvz9HzZSDu-yEByTChhCiWbQ8KCUM&usqp=CAU)]  bg-cover bg-center bg-no-repeat w-full`}
          >
            <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/50"></div>

            <div class="relative px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-28">
              <div class="max-w-xl text-center sm:text-left text-gray-300 ">
                <h1 class="text-3xl  font-extrabold sm:text-5xl">
                  Let us find
                </h1>

                <p class="mt-4  max-w-lg sm:text-xl sm:leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Founder;
