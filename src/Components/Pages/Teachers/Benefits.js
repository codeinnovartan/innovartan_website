import React from "react";
import styles from "./Benefits.module.css";
import { Button } from "react-bootstrap";

const Benefits = () => {
  const benefits = [
    "Upskilling opportunities for new teachers transitioning from B.Ed. programs.",
    "Specialised training for experienced teachers seeking PGT promotions.",
    "Access to the latest methodologies and teaching concepts.",
    "Clarification of concepts to enhance teaching effectiveness.",
    "Continuous learning through curated resources, webinars, and interactive sessions.",
    "Empowerment to navigate teaching challenges with confidence and competence.",
    "Professional growth and advancement opportunities tailored to individual career goals.",
    "Supportive mentorship and guidance throughout the teaching journey.",
    "Networking opportunities with fellow educators and education experts.",
    "Enhanced classroom management techniques and subject knowledge for impactful teaching.",
  ];

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
              <h2 className={styles.benefitsTitle}>Benefits for Teachers:</h2>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button variant="outline-light" className={styles.applyButton}>Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
