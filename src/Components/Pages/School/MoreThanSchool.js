import React from "react";
import styles from "./MoreThanSchool.module.css";

const MoreThanSchool = () => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          More Than <span className={styles.highlight}>1,000</span> Schools
        </h2>
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
