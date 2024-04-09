import React from "react";
import styles from "./TransformSchool.module.css";
import { Button } from "react-bootstrap";

const CustomizedSupportCard = ({ imageSrc, title, subtitle, description }) => (
  <div className={styles.card}>
    <img src={imageSrc} alt={title} className={styles.cardImage} />
    <div className={styles.cardTitle}>{title}</div>
    <div className={styles.cardSubtitle}>{subtitle}</div>
    <div className={styles.cardDescription}>{description}</div>
    <Button variant="outline-warning" className={styles.cardButton}>Read More</Button>
  </div>
);

const cardData = [
  {
    imageSrc: "Images/Asserts/school4.jpg",
    title: "CUSTOMISED SUPPORT",
    subtitle: "Covering Unique Challenges of Each School",
    description:
      "Tailoring solutions for each school's individual challenges, ensuring comprehensive support and effective problem-solving.",
  },
  {
    imageSrc: "Images/Asserts/school2.jpg",
    title: "HOLISTIC CURRICULUM",
    subtitle: "Comprehensive Coverage of All Subjects",
    description:
      "Providing an expansive curriculum to ensure that students receive a well-rounded education that prepares them for success.",
  },
  {
    imageSrc: "Images/Asserts/school5.jpg",
    title: "PROFESSIONAL GROWTH",
    subtitle: "Training & Upskilling Teachers",
    description:
      "Offering teachers training aimed at enhancing the pedagogical skills, content knowledge, and classroom management strategies.",
  },
  {
    imageSrc: "Images/Asserts/school7.jpg",
    title: "SOCIAL COLLABORATION",
    subtitle: "For Knowledge-sharing & Support",
    description:
      "Inclusive platform for educators, students, and stakeholders, fostering a culture of knowledge-sharing and mutual support.",
  },
  {
    imageSrc: "Images/Asserts/school6.jpg",
    title: "EDUCATION COLLABS",
    subtitle: "With Experts & Institutions for Resources",
    description:
      "Establishing strategic educational collaborations with industry experts and esteemed institutions to leverage their expertise and resources.",
  },
  {
    imageSrc: "Images/Asserts/school3.jpg",
    title: "FUTURE PREPARATION",
    subtitle: "Equipping Students For Success",
    description:
      "Providing students with comprehensive skills, knowledge, and experiences that foster resilience, adaptability, critical thinking, and creativity.",
  },
];

const TransformSchool = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subtitle}>Don't Miss the Day</div>
        <div className={styles.title}>
          Transform Your School: Join the Innovartan Revolution
        </div>
        <div className={styles.cardGrid}>
          <div className={styles.cardRow}>
            {cardData.slice(0, 3).map((card, index) => (
              <div
                className={styles.cardColumn}
                key={card.title}
              >
                <CustomizedSupportCard {...card} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cardGrid}>
          <div className={styles.cardRow}>
            {cardData.slice(3).map((card, index) => (
              <div className={styles.cardColumn} key={card.title}>
                <CustomizedSupportCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransformSchool;
