import React from "react";
import styles from "./EducatorSwiperCard.module.css";
import { Image } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const EducatorSwiperCard = ({
  image,
  rating,
  name,
  subtitile,
  courses,
  students,
}) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.educatorImage}>
        <Image src={image} className={styles.educatorImage1} />
      </div>

      <p className={styles.name}>{name}</p>
      <p className={styles.designation}>{subtitile}</p>
      <div style={{ marginTop: "-15px", marginBottom: "10px" }}>
        <Rating initialValue={rating} size={25} fillColor="#F16126" allowHover={false} allowFraction={true}/>
      </div>
      <div
        style={{
          width: "95%",
          height: "1px",
          backgroundColor: "#ECF0F3",
          margin: "20px 10px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "40%",
            justifyContent: "space-around",
          }}
        >
          <i class="fa-solid fa-book" style={{ color: "#555555" }}></i>
          <p style={{ fontSize: "14px", fontWeight: 500, color: "#555555" }}>
            {courses} Courses
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "40%",
            justifyContent: "space-around",
            cursor: "pointer",
          }}
        >
          <i class="fa-solid fa-user-group" style={{ color: "#555555" }}></i>
          <p style={{ fontSize: "14px", fontWeight: 500, color: "#555555" }}>
            {students} students
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducatorSwiperCard;
