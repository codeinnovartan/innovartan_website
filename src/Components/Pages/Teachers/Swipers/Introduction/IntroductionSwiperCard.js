import React from "react";
import styles from "./IntroductionSwiperCard.module.css";
import { Button, Image } from "react-bootstrap";

const IntroductionSwiperCard = ({ image, heading, para1, para2 }) => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutdiv1}>
        <Image src={image} className={styles.aboutdiv1image1} />
      </div>
      <div className={styles.aboutdiv2}>
        <p
          style={{
            fontSize: 18,
          }}
        >
          INTRODUCTION
        </p>
        <h1>{heading}</h1>
        <p className={styles.aboutdiv2text}>{para1}</p>
        <p className={styles.aboutdiv2text}>{para2}</p>
        <Button variant="outline-secondary" className={styles.aboutButton}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default IntroductionSwiperCard;
