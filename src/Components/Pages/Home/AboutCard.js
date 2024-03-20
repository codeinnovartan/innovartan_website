import React from "react";
import styles from "./About.module.css";
import { Image } from "react-bootstrap";

const AboutCard = ({ url, heading, text }) => {
  return (
    <div className={styles.outerContainer}>
      <Image src={url} className={styles.image} />
      <div className={styles.innerContainer}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
