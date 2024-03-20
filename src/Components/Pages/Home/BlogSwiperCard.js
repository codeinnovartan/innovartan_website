import React from "react";
import styles from "./BlogSwiperCard.module.css";
import { Image } from "react-bootstrap";

const BlogSwiperCard = () => {
  return (
    <div>
      <Image src="Images/Asserts/blog1.jpg" className={styles.blogImage} />
      <div style={{ margin: "5px 15px" }}>
        <h3 className={styles.heading}>
          Innovative Teaching Methods for Engaging Students in the Digital Age
        </h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <i
            class="fa-solid fa-user"
            style={{ color: "#F16126", marginTop: "5px", marginRight: "10px" }}
          ></i>
          <p style={{ color: " #555555" }}>Begrass Tyson</p>
          <i
            class="fa-solid fa-calendar-days"
            style={{
              color: "#F16126",
              marginTop: "5px",
              marginRight: "10px",
              marginLeft: "25px",
            }}
          ></i>
          <p style={{ color: " #555555" }}>April 23, 2024</p>
        </div>
        <p style={{ textAlign: "left", color: " #555555" }}>
          Pluoresnts customize prancing apcentered customer service anding ands
          asing straelg Interacvely cordinate performe
        </p>
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
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "40%",
              justifyContent: "space-around",
              cursor: "pointer",
            }}
          >
            <p>Read More</p>
            <i
              class="fa-solid fa-arrow-up-right-from-square"
              style={{ marginTop: "5px", color: "#F16126" }}
            ></i>
          </div>
          <i
            class="fa-solid fa-user-group"
            style={{ color: "#555555", marginRight: "10px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default BlogSwiperCard;
