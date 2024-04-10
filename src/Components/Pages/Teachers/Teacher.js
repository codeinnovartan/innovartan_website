import React from "react";
import styles from "./Teacher.module.css";
import IntroductionSwiper from "./Swipers/Introduction/IntroductionSwiper";
import IntroductionCard from "./IntroductionCard";
import WhyInnovartan from "./WhyInnovartan";
import TeachInnovartan from "./TeachInnovartan";
import Benefits from "./Benefits";
import StatsSection from "../Home/StatsSection";
import Footer from "../../Footer/Footer";
import Slogan from "./Slogan";
import SupportSystem from "./SupportSystem";
import CommonNavbar from "../../CommonNavbar/CommonNavbar";
import ScrollTrigger from "react-scroll-trigger";
import LeadModal from "../../LeadModal/LeadModal";

const Teacher = () => {
  const [viewState, setViewState] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleModal = () => {
    setModalShow(true);
  }

  return (
    <>
      {viewState && <CommonNavbar />}
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
      <ScrollTrigger
        onEnter={() => setViewState(true)}
        onExit={() => setViewState(false)}
      >
        <div className={styles.techInnovartan}>
          <TeachInnovartan />
        </div>
        <div className={styles.benefits}>
          <Benefits handleModal={handleModal} />
        </div>
        <div className={styles.Slogan}>
          <Slogan />
        </div>
        <div className={styles.SupportSystem}>
          <SupportSystem />
        </div>
        <div className={styles.stats}>
          <StatsSection />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
        <div className={styles.LeadModal}>
          <LeadModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Teacher;
