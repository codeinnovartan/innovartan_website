import React from "react";
import styles from "./BenefitsJoinning.module.css";

const benefitsData = [
  {
    id: 1,
    title: "⁠Competitive Margins",
    description:
      "Earn attractive margins on sales of Innovartan products and services.",
    imageSrc: "./Images/ppmargine.png",
  },
  {
    id: 2,
    title: "Marketing Assistance",
    description:
      "Joint marketing initiatives, lead generation, and co-branded marketing materials.",
    imageSrc: "./Images/ppMarketing.png", // Replace with actual image src
  },
  {
    id: 3,
    title: "Technical Enablement",
    description: "Access to Innovartan's technical expertise and resources.",
    imageSrc: "./Images/pptechnical.jpg", // Replace with actual image src
  },
  {
    id: 4,
    title: "Recognition and Rewards",
    description:
      "Recognition and rewards for outstanding performance and contributions.",
    imageSrc: "./Images/pprewards.png", // Replace with actual image src
  },
  {
    id: 5,
    title: "Growth Opportunities",
    description:
      "Opportunities for growth and expansion through new markets, products, and services.",
    imageSrc: "./Images/ppgrowth.png", // Replace with actual image src
  },
  {
    id: 6,
    title: "Dedicated Support",
    description: "Dedicated support from Innovartan's channel partner team.",
    imageSrc: "./Images/ppsupport.png", // Replace with actual image src
  },
];

const BenefitsJoinning = () => {
  return (
    <div className={styles.benefitsSection}>
      <h2 className={styles.sectionTitle}>Benefits of Joining</h2>
      <div className={styles.benefitsContainer}>
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className={styles.benefitCard}>
            <img
              src={benefit.imageSrc}
              alt={benefit.title}
              className={styles.benefitIcon}
            />
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsJoinning;
