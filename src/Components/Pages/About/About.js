import React from "react";
import styles from "./About.module.css";
import { Image } from "react-bootstrap";

const About = () => {
  return (
    <div className={styles.backToSchool}>
      <div className={styles.backToSchooldiv1}>
        <Image
          src="Images/Asserts/about-image.svg"
          className={styles.backToSchooldiv1image1}
        />
      </div>
      <div className={styles.backToSchooldiv2}>
        <p
          style={{
            fontSize: 20,
          }}
        >
          INTRODUCTION
        </p>
        <h1>Back To School</h1>
        <p className={styles.backToSchooldiv2text}>
          Innovartan is committed to revolutionizing education through
          innovative solutions. Our Reverse Theory –
          <span style={{ fontWeight: 700 }}>Back to School</span> approach aims
          to create supportive and nurturing environments where every student
          can thrive.
        </p>
        <p className={styles.backToSchooldiv2text}>
          By empowering schools to become centers of learning excellence, we
          elevate the role of educators through comprehensive professional
          development programs, eliminating the need for costly external
          coaching classes.
        </p>
        <p className={styles.backToSchooldiv2text}>
          Additionally, we equip educators with the skills needed to meet the
          demands of modern learners, fostering communities of practice and
          leveraging technology to enhance learning. With Innovartan, educators
          are prepared to deliver personalized, high-quality education that
          equips students for success in the rapidly evolving world..
        </p>
        <button className={styles.backToSchoolButton}>Know More</button>
      </div>
    </div>
  );
};

export default About;
