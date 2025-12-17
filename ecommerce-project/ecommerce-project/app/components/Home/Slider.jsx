"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      // responsive theo kích thước màn hình
      breakpoints={{
        0: { slidesPerView: 1.05, spaceBetween: 12 },     // mobile
        640: { slidesPerView: 1.2, spaceBetween: 16 },    // sm
        768: { slidesPerView: 1.5, spaceBetween: 24 },    // md
        1024: { slidesPerView: 1.8, spaceBetween: 30 },   // lg
      }}
      centeredSlides
      loop
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mt-20 w-full"
    >
      {[
        "/img/share/1.jpg",
        "/img/share/2.webp",
        "/img/share/3.jpg",
      ].map((src, idx) => (
        <SwiperSlide key={idx}>
          {/* dùng aspect ratio để tự co giãn chiều cao */}
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] md:aspect-[16/9]">
            <Image src={src} alt={`slide-${idx}`} fill className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
