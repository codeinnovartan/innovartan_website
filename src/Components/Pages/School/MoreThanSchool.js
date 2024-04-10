import React, { useState } from "react";
import styles from "./MoreThanSchool.module.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const MoreThanSchool = () => {
  const [contentVisible, setContentVisible] = useState(false);
  return (
    <>
      <section className={styles.section}>
        <ScrollTrigger
          onEnter={() => {
            setContentVisible(true);
          }}
          onExit={() => {
            setContentVisible(false);
          }}
        >
          <h2 className={styles.heading}>
            More Than{" "}
            <span className={styles.highlight}>
              {contentVisible && <CountUp end={40} duration={3} />}
            </span>{" "}
            Schools
          </h2>
        </ScrollTrigger>
        <p className={styles.description}>
          Take courses on your any device with our app & learn all time what you{" "}
          <br /> want. Just download & install & start to learn
        </p>
        <img
          src="Images/Asserts/forSchoolMap.png"
          alt=""
          className={styles.backgroundImage}
        />
      </section>
    </>
  );
};

export default MoreThanSchool;
