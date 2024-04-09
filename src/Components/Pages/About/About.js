import React from "react";
import styles from "./About.module.css";
import { Button, Image } from "react-bootstrap";
import AboutCard from "../Home/AboutCard";
import OurMission from "./OurMission";
import Founder from "./Founder";
import OurImpact from "./OurImpact";
import StatsSection from "../Home/StatsSection";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.aboutdiv1}>
          <Image
            src="Images/Asserts/about-image.png"
            className={styles.aboutdiv1image1}
          />
        </div>
        <div className={styles.aboutdiv2}>
          <p
            style={{
              fontSize: 18,
            }}
          >
            INTRODUCTION
          </p>
          <h1>About Innovartan</h1>
          <p className={styles.aboutdiv2text}>
            Innovartan Learning Solutions Pvt. Ltd. was founded in 2023 by a
            passionate team of IIT and IIM alumni with a transformative vision:
            To empower the heart of the education system –Schools and Teachers.
          </p>
          <p className={styles.aboutdiv2text}>
            With the belief that highly trained and empowered teachers are
            essential to help students understand their potential, Innovartan is
            committed to revolutionizing the education sector.  They created a
            unique program, Edvanz Teacher Training Program, a comprehensive and
            affordable training initiative designed to equip educators with the
            skills and knowledge they need to grow and upskill in today's
            educational landscape.
          </p>
          <p className={styles.aboutdiv2text}>
            The program is meticulously crafted to bridge the gap between
            traditional school education and the skills required for students to
            excel in competitive exams like JEE, NEET, Olympiads, and board
            examinations.
          </p>
          <p className={styles.aboutdiv2text}>
            Innovartan is bridging the gap between school education and
            competitive exams, creating an ecosystem where students and teachers
            evolve together while staying competitive with the changing
            educational landscape.
          </p>
          <Button variant="outline-secondary" className={styles.aboutButton}>Read More</Button>
        </div>
      </div>
      <div className={styles.aboutOurInnovartan}>
        <div className={styles.aboutOurInnovartandiv1}>
          <Image
            src="Images/Asserts/about-image1.svg"
            className={styles.aboutOurInnovartandiv1image1}
          />
          <Image
            src="Images/Asserts/about-image2.svg"
            className={styles.aboutOurInnovartandiv1image2}
          />
        </div>
        <div className={styles.aboutOurInnovartandiv2}>
          <p
            style={{
              fontSize: 18,
              letterSpacing: 5,
              color: "#F16126",
            }}
          >
            ABOUT OUR INNOVARTAN
          </p>
          <h1>Transforming Education with Modern Teaching Strategies</h1>
          <AboutCard
            url={"Images/Asserts/about-image3.svg"}
            heading={"Deep Subject Understanding"}
            text={
              "We equip teachers with a thorough grasp of the subjects they teach."
            }
          />
          <AboutCard
            url={"Images/Asserts/about-image4.svg"}
            heading={"Reflective Practice"}
            text={
              "We encourage a culture of continuous learning and improvement for educators."
            }
          />
          <AboutCard
            url={"Images/Asserts/about-image5.svg"}
            heading={"Modern Educational Strategies"}
            text={
              "We introduce teachers to the latest and most effective teaching methods."
            }
          />
        </div>
      </div>
      <div className={styles.OurMission}>
        <OurMission />
      </div>
      <div className={styles.founderContainer}>
        <Founder />
      </div>
      <div className={styles.ourImpact}>
        <OurImpact />
      </div>
      <div className={styles.statsSection}>
        <StatsSection />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
