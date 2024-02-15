import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SchoolCard from "./SchoolCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const SwiperComponent = ({ data, changeIndexFunction }) => {
  return (
    <div className="containerr">
      <Swiper
        style={{ height: "665px" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((school, index) => {
          return (
            <SwiperSlide key={index}>
              <SchoolCard data={school} />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div
            className="swiper-button-prev slider-arrow"
            onClick={() => {
              changeIndexFunction("prev");
            }}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div
            className="swiper-button-next slider-arrow"
            onClick={() => {
              changeIndexFunction("next");
            }}
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
