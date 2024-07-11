import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CourseSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import SwiperCard from "./SwiperCard";
const CourseSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
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
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "300px" }}>
          <SwiperCard
            cost={"₹ 12,999"}
            facultyname={"Rahul Jain"}
            image={
              "Images/Asserts/Physics.jpg"
            }
            lesson={"49"}
            name={"Physics | IIT-JEE"}
            rating={"4.1"}
            review={"51"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>
          <SwiperCard
            cost={"₹ 12,999"}
            facultyname={"Vikram Sing"}
            image={
              "Images/Asserts/Chemistry.jpg"
            }
            lesson={"55"}
            name={"Chemistry | IIT-JEE"}
            rating={"4.4"}
            review={"32"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>
          <SwiperCard
            cost={"₹ 12,999"}
            facultyname={"Arka Sen"}
            image={
              "Images/Asserts/Maths.jpg"
            }
            lesson={"67"}
            name={"Mathematics | IIT-JEE"}
            rating={"3.9"}
            review={"65"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>
          <SwiperCard
          cost={"₹ 12,999"}
            facultyname={"Anand Pandey"}
            image={
              "Images/Asserts/Biology.jpg"
            }
            lesson={"49"}
            name={"Biology | NEET"}
            rating={"4.8"}
            review={"13"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CourseSwiper;
