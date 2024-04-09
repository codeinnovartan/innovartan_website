import React from "react";
import styles from "./EducationGap.module.css";
import { Button } from "react-bootstrap";

const EducationGap = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsContent}>
          <div className={styles.imageColumn}>
            <img
              src="Images/Asserts/manShadow.png"
              alt="Benefits for Teachers"
              className={styles.benefitsImage}
            />
          </div>
          <div className={styles.textColumn}>
            <div className={styles.benefitsText}>
              <h2 className={styles.benefitsTitle}>
                Bridging The Education Gap
              </h2>
              <p className={styles.description}>
                Innovartan bridges the gap between foundational education and
                the rigorous practice required for competitive exams,
                revolutionising the traditional approach to exam preparation. By
                integrating specialised resources directly into the school
                system, Innovartan empowers students to develop the
                comprehensive skills and knowledge needed to excel in
                competitive exams. Through targeted exam preparation modules and
                personalised guidance, students can enhance their academic
                performance and confidence, all within the familiar environment
                of their school. This innovative approach not only saves
                students valuable time and effort but also alleviates financial
                burdens on parents– breaking the reliance on coaching
                institutes– ensuring that every student has equitable access to
                high-quality exam preparation resources.
                <br />
                <br />
                With Innovartan, schools can now offer what coaching institutes
                provide without the inconvenience of travel and the financial
                strain on families. By implementing tailored exam preparation
                strategies and leveraging innovative resources, schools can
                enrich their educational offerings and better prepare students
                for success. Through this collaborative partnership between
                schools and Innovartan, students can receive the comprehensive
                support they need to reach their full potential, all while
                benefiting from the supportive and nurturing environment of
                their school community.
              </p>
              <Button variant="outline-light" className={styles.applyButton}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationGap;
