import React from "react";
import styles from "./SwiperCard.module.css";
import { Image } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const SwiperCard = ({image, name, lesson, facultyname, rating, review, cost}) => {
  return (
    <div className={styles.outerContainer}>
      <div className="" style={{position: 'relative'}} >
        <Image
          src={image}
          className={styles.schoolLogo}
          height={30}
        />
        {/* <div className={styles.amountContainer}>
          <h3>{cost}</h3>
        </div> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div className={styles.badge}>
          <h5>For Instituions</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Rating initialValue={rating} size={15} fillColor="#F16126" allowFraction={true} />
          <h6
            style={{
              fontSize: "14px",
              marginTop: "10px",
              color: "#555555",
              marginLeft: "10px",
            }}
          >
            {review} reviews
          </h6>
        </div>
      </div>
      <h3
        style={{
          alignSelf: "flex-start",
          margin: "30px",
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        {name}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "30%",
          }}
        >
          <i
            className="fa-solid fa-film"
            style={{ fontSize: "16px", marginTop: "5px", color: "#F16126" }}
          ></i>
          <p style={{ fontSize: "16px" }}>{lesson} x Lesson</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "30%",
          }}
        >
          <i
            className="fa-solid fa-signal"
            style={{ fontSize: "16px", marginTop: "5px", color: "#F16126" }}
          ></i>
          <p style={{ fontSize: "16px" }}>Online Class</p>
        </div>
      </div>
      <div
        style={{
          width: "90%",
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
            width: "35%",
            justifyContent: "space-around",
          }}
        >
          <Image
            src="Images/Asserts/teacher.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              borderColor: "#000",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          />
          <p style={{ fontSize: "18px", fontWeight: 500 }}>{facultyname}</p>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "30%",
            justifyContent: "space-around",
            cursor: "pointer",
          }}
        >
          <p>Read More</p>
          <i
            className="fa-solid fa-arrow-up-right-from-square"
            style={{ marginTop: "5px", color: "#F16126" }}
          ></i>
        </div> */}
      </div>
    </div>
  );
};

export default SwiperCard;
