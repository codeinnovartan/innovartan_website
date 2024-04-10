import React from "react";
import { Image } from "react-bootstrap";
import styles from "./IntroductionCard.module.css";

const IntroductionCard = ({ image, heading, para }) => {
  return (
    <div className={styles.box}>
      <Image
        src={image}
        style={{ objectFit: "contain", width: "50%", height: "70%" }}
      />
      <div>
        <h1 style={{ fontSize: "16px", fontWeight: 600 }}>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default IntroductionCard;
