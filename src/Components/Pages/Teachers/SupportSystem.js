import React from "react";
import styles from "./SupportSystem.module.css";
import { Button } from "react-bootstrap";

const guidanceData = [
  {
    title: "GUIDANCE & SUPPORT",
    description:
      "Receive personalised guidance and consistent support to improve your teaching effectiveness and classroom performance.",
  },
  {
    title: "CONCEPT CLARITY",
    description:
      "Gain better clarity on vital concepts to advance your classroom instruction, and foster student engagement and understanding.",
  },
  {
    title: "EDUCATOR NETWORK",
    description:
      "Join a platform designed to foster community and collaboration among educators to share learning and exchange resources.",
  },
];

const GuidanceCard = ({ title, description }) => (
  <div className={styles.guidanceCard}>
    <h3 className={styles.guidanceTitle}>{title}</h3>
    <p className={styles.guidanceDescription}>{description}</p>
  </div>
);

const SupportSystem = () => {
  return (
    <section className={styles.teacherSupportSection}>
      <div className={styles.teacherSupportContainer}>
        <h2 className={styles.sectionTitle}>
          Our Comprehensive Teacher Support System
        </h2>
        <div className={styles.guidanceCardsContainer}>
          {guidanceData.map((data, index) => (
            <GuidanceCard
              key={index}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
        <Button variant="outline-secondary" className={styles.applyButton}>Apply Now</Button>
      </div>
    </section>
  );
};

export default SupportSystem;
