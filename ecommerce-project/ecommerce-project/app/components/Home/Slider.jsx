"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1.5}          // 1 ảnh chính + 1/2 ảnh kế bên
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide-inner">
          <img
            src="img/sofa-361-1-1.jpg"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-inner">
          <img
            src="img/sofa-da-bo-y-1177-1-1.jpg"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-inner">
          <img
            src="img/sofa-da-bo-y-1177-1-1.jpg"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
