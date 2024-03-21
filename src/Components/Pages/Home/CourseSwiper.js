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
              "https://innovartan.s3.amazonaws.com/634ab7ad8d367dbb7e494a6e4f56fefc242136768/9fa982ca92eea61cc452d503326bcb1e.jpg"
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
              "https://innovartan.s3.amazonaws.com/f213e45ccc8477db0d69985892e1e0fe2005867399/91a0d31385c0103b08325e93999835c8.jpg"
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
              "https://innovartan.s3.amazonaws.com/10fac7eccfc259a19d719962dc466a1b1631458035/b0f90f3c7e74aaf6774e1fe535e3f32b.jpg"
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
              "https://innovartan.s3.amazonaws.com/675f2748e7511bdf1068c8d069dfbc9c668414497/5d0329dc52f16de6276eb9331dfa65eb.jpg"
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
