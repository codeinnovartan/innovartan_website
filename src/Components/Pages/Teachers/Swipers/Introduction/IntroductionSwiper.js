import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./IntroductionSwiper.css";

// import "";

// import required modules
import { Pagination } from "swiper/modules";
import IntroductionSwiperCard from "./IntroductionSwiperCard";

const IntroductionSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide style={{ width: "200px" }}>
        <IntroductionSwiperCard
          heading={"Preparing New Teachers For Success"}
          image={"Images/Asserts/teacher-about2.png"}
          para1={
            "At Innovartan, we understand the pivotal role teachers play in shaping the future. That’s why we offer comprehensive support and upskilling opportunities tailored to meet the diverse needs of educators at every stage of their career journey. "
          }
          para2={
            "For new teachers fresh out of B.Ed. programs, we provide specialised training and development initiatives designed to enhance their pedagogical skills, classroom management techniques, and subject knowledge. Through targeted programs and mentorship, we empower them to navigate their early teaching experiences with confidence. Our goal is to create a supportive environment where new teachers can thrive, grow, and make a meaningful impact in the lives of their students from the very start of their careers."
          }
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "200px" }}>
        <IntroductionSwiperCard
          heading={"Advancing Educators: Excelling in Modern Teaching"}
          image={"Images/Asserts/teacher-about1.png"}
          para1={
            "The more you learn, the better you teach. For this purpose, we have designed upskilling courses especially for experienced educators aiming for professional growth and advancement– such as PGT promotions. These programs are specifically curated to address the evolving demands in education, equipping teachers with the latest methodologies, pedagogy, and technological tools to excel in their roles."
          }
          para2={
            "Our comprehensive curriculum is developed in collaboration with industry experts and seasoned educators, ensuring that each course is relevant and practical. Whether it is to master differentiated instruction techniques, hone assessment practices, or embrace innovative pedagogies, our courses provide teachers with the knowledge and skills they need to thrive in the modern classroom environment."
          }
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default IntroductionSwiper;
