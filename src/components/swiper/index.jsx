"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import Image from "next/image";
import { swapper1, swapper2, swapper3, swapper4, swapper5 } from "@images";

export default function Swipper() {
  const images = [
    { id: 1, image: swapper1 },
    { id: 2, image: swapper2 },
    { id: 3, image: swapper3 },
    { id: 4, image: swapper4 },
    { id: 5, image: swapper5 },
  ];

  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="rounded-[20px] max-sm:h-[200px]">
            <Image
              src={item.image}
              alt="swapper-image"
              className="w-full  m-auto rounded-[20px] object-cover max-xs:h-[200px] max-sm:h-[270px] md:h-[330px] lg:h-[400px]"
              priority
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
