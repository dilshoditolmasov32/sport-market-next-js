"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { card1, card2, card3, card4, card5, card6 } from "@images";
import Link from "next/link";

export default function Index() {
  const katalog = [
    { id: 1, title: "Тренажеры", image: card1, bgColor: "#D3E5F2" },
    { id: 2, title: "Мячи", image: card2, bgColor: "#E2C6BE" },
    { id: 3, title: "Спротивные обуви", image: card3, bgColor: "#DADBE0" },
    { id: 4, title: "Спортивные одежды", image: card4, bgColor: "#E2EEC0" },
    { id: 5, title: "Водный спорт", image: card5, bgColor: "#C2BCE8" },
    { id: 6, title: "Горный спорт", image: card6, bgColor: "#ABA520" },
  ];

  return (
    <div className="bg-[#FFF] py-5">
      <div className="container mx-auto">
        <h1 className="text-[#1F1D14] font-Fira Sans font-bold text-[32px] ">
          Катаолог
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className=" w-full"
        >
          {katalog?.map((element, index) => (
            <SwiperSlide key={index} className="mb-[46px] mt-[30px]">
                <div className="xl:grid xl:grid-cols-6 gap-6 max-sm:grid max-sm:grid-cols-2  
                max-md:justify-items-center sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 md:justify-items-center lg:grid lg:grid-cols-5">
                {katalog?.map((item) => (
                  <div
                    key={item.id}
                    className=" pt-5 pb-9 px-5 rounded-[8px] w-[187px] max-xs:w-[160px]"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Link href={"#"}>
                      <h4 className="font-Fira Sans text-[20px] text-[#000] mb-9">
                        {item.title}
                      </h4>
                      <Image src={item.image} alt="card-image" />
                    </Link>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
