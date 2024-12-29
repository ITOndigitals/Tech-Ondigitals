import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./CarouselClients.module.scss";
import Image from "next/image";
export default function CarouselClients({ data }) {
  if (!data) return null;
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard, Autoplay]}
        className="carousel-clients"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {data?.nodes &&
          data?.nodes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={classes["image"]}>
                <Image
                  src={item?.sourceUrl}
                  alt="/"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
