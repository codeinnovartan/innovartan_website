import React from "react";
import styles from "./TransformSchool.module.css";

const CustomizedSupportCard = ({ imageSrc, title, subtitle, description }) => (
  <div className={styles.card}>
    <img src={imageSrc} alt={title} className={styles.cardImage} />
    <div className={styles.cardTitle}>{title}</div>
    <div className={styles.cardSubtitle}>{subtitle}</div>
    <div className={styles.cardDescription}>{description}</div>
    <div className={styles.cardButton}>Read More</div>
  </div>
);

const cardData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7fb6919665a176e6e46c1c161d85a22f9e0e9bbd90da3fab60d3624defbbca?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "CUSTOMISED SUPPORT",
    subtitle: "Covering Unique Challenges of Each School",
    description:
      "Tailoring solutions for each school's individual challenges, ensuring comprehensive support and effective problem-solving.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bf46b2679bdb6a08a2b071c78ec73577fd45765a5f6cc117a7a864c66a504fa?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "HOLISTIC CURRICULUM",
    subtitle: "Comprehensive Coverage of All Subjects",
    description:
      "Providing an expansive curriculum to ensure that students receive a well-rounded education that prepares them for success.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83b8d08e16d2c2f906c39a4600d8d6440936b52dad5489d6be39f2646226e884?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "PROFESSIONAL GROWTH",
    subtitle: "Training & Upskilling Teachers",
    description:
      "Offering teachers training aimed at enhancing the pedagogical skills, content knowledge, and classroom management strategies.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7fb6919665a176e6e46c1c161d85a22f9e0e9bbd90da3fab60d3624defbbca?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "SOCIAL COLLABORATION",
    subtitle: "For Knowledge-sharing & Support",
    description:
      "Inclusive platform for educators, students, and stakeholders, fostering a culture of knowledge-sharing and mutual support.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bf46b2679bdb6a08a2b071c78ec73577fd45765a5f6cc117a7a864c66a504fa?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "EDUCATION COLLABS",
    subtitle: "With Experts & Institutions for Resources",
    description:
      "Establishing strategic educational collaborations with industry experts and esteemed institutions to leverage their expertise and resources.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83b8d08e16d2c2f906c39a4600d8d6440936b52dad5489d6be39f2646226e884?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
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
                // ${index === 1 ? "middle-card" : ""}
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
      <style jsx>{``}</style>
    </>
  );
};

export default TransformSchool;
