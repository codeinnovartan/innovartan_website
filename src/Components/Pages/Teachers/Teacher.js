import React from "react";
import styles from "./Teacher.module.css";
import IntroductionSwiper from "./Swipers/Introduction/IntroductionSwiper";
import IntroductionCard from "./IntroductionCard";
import WhyInnovartan from "./WhyInnovartan";
import TeachInnovartan from "./TeachInnovartan";
import Benefits from "./Benefits";
import StatsSection from "../Home/StatsSection";
import Footer from "../../Footer/Footer";

const Teacher = () => {
  return (
    <>
      <div className={styles.introduction}>
        <IntroductionSwiper />
      </div>
      <div className={styles.threeCards}>
        <IntroductionCard
          heading={"SKILL ENHANCEMENT"}
          image={"Images/Asserts/introduction1.png"}
          para={"Read More"}
        />
        <IntroductionCard
          heading={"SPECIALISED TRAINING"}
          image={"Images/Asserts/introduction2.png"}
          para={"Read More"}
        />
        <IntroductionCard
          heading={"STAY UPDATED"}
          image={"Images/Asserts/introduction3.png"}
          para={"Read More"}
        />
      </div>
      <div className={styles.whyInnovartan}>
        <WhyInnovartan />
      </div>
      <div className={styles.techInnovartan}>
        <TeachInnovartan />
      </div>
      <div className={styles.benefits}>
        <Benefits />
      </div>
      <div className={styles.stats}>
        <StatsSection />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Teacher;
