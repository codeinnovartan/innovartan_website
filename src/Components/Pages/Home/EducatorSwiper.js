import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CourseSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import EducatorSwiperCard from "./EducatorSwiperCard";

const EducatorSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EducatorSwiper;
