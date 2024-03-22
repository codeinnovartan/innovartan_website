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
          320: {
            slidesPerView: 1,
          },
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
          <EducatorSwiperCard
            courses={"08"}
            image={"Images/Asserts/educator1.png"}
            name={"Arka Sen"}
            rating={"4.5"}
            students={"146"}
            subtitile={"15+ years of academic"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard
            courses={"11"}
            image={"Images/Asserts/educator2.png"}
            name={"Hairsh Kharbanda"}
            rating={"4.4"}
            students={"132"}
            subtitile={"23+ years of academic"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard
            courses={"13"}
            image={"Images/Asserts/educator3.png"}
            name={"Sweety Nahata"}
            rating={"4.8"}
            students={"161"}
            subtitile={"13+ years of academic"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard
            courses={"09"}
            image={"Images/Asserts/educator4.png"}
            name={"Dr. Sachin Kapur"}
            rating={"4.4"}
            students={"143"}
            subtitile={"20+ years of academic"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard
            courses={"07"}
            image={"Images/Asserts/educator5.png"}
            name={"Purushottam"}
            rating={"4"}
            students={"113"}
            subtitile={"25+ years of academic"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <EducatorSwiperCard
            courses={"07"}
            image={"Images/Asserts/educator6.png"}
            name={"Manu Upadhyay"}
            rating={"4.4"}
            students={"113"}
            subtitile={"15+ years of academic"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EducatorSwiper;
