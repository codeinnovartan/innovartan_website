import React from "react";
import styles from "./BenefitsJoinning.module.css";

const benefitsData = [
  {
    id: 1,
    title: "Grow your Portfolio",
    description:
      "Combine your Digital services with Innovartan and acquire new customers every day! Offer Innovartan as a complimentary service along with your business offerings and increase your credibility in the industry.",
    imageSrc: "./Images/ppBag.png",
  },
  {
    id: 2,
    title: "Earn More Per Client",
    description:
      "Make more money per customer by offering more digital services in partnership with Innovartan. Seize this amazing opportunity, build good professional relationships for a lifetime.",
    imageSrc: "./Images/ppCash.png", // Replace with actual image src
  },
];
const benefitsData2 = [
  {
    id: 3,
    title: "Higher Brand Value",
    description:
      "Associate with Innovartan, the coaching industry's most preferred platform to go digital, and increase your brand’s reach in the education sector. Grow your brand's value through the teacher’s recommendations.",
    imageSrc: "./Images/ppMic.png", // Replace with actual image src
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
      <div className={styles.benefitsContainer}>
        {benefitsData2.map((benefit) => (
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
