import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CourseSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import BlogSwiperCard from "./BlogSwiperCard";
const BlogSwiper = () => {
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
        <SwiperSlide style={{ width: "200px" }}>
          <BlogSwiperCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <BlogSwiperCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <BlogSwiperCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: "200px" }}>
          <BlogSwiperCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BlogSwiper;