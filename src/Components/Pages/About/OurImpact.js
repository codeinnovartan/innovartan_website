import React from "react";
import styles from "./OurImpact.module.css";

const ImpactCard = ({ imageSrc, title, description }) => (
  <div className={styles.impactCard}>
    <div className={styles.impactCardHeader}>
      <img src={imageSrc} alt="" className={styles.impactCardIcon} />
      <div className={styles.impactCardTitle}>{title}</div>
    </div>
    <div className={styles.impactCardDescription}>{description}</div>
  </div>
);

const impactData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/99d3611cd60d9b8bba0154ba1c2d1aecd47454f7dc84b630a2cb61e7a7193e1f?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "40+ Affiliated Schools",
    description:
      "We partner with schools across India to provide our transformative teacher training programs.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/986c2e71583a21487daf3a95ee51c812cdca59f1a82edd4d7d41af076815cd1a?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "250+ Teachers Trained/Placed",
    description:
      "We've trained and placed over 250 educators, empowering them to make a positive difference in the lives of their students.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f45861424b82671f76b9021f3da885c7659211355c00e8a235055a7387746c01?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "10,000+ Students Impacted:",
    description:
      "Through our training programs, we've indirectly impacted the learning experience of over 10,000 students.",
  },
];

const OurImpact = () => {
  return (
    <>
      <section className={styles.impactSection}>
        <div className={styles.impactContainer}>
          <div className={styles.impactColumn}>
            <div className={styles.impactHighlight}>
              <div className={styles.impactHighlightContent}>
                <h2 className={styles.impactHighlightTitle}>Our Impact</h2>
                <div className={styles.impactHighlightCta}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4361112cd05b05b8d76c1455274917b092c18e08cf1b49a090331334a14250c8?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
                    alt="Know More"
                    className={styles.impactHighlightImage}
                  />
                  <div className={styles.impactHighlightButton}>Know More</div>
                </div>
              </div>
            </div>
          </div>
          {impactData.map((data, index) => (
            <div key={index} className={styles.impactColumnInner}>
              <ImpactCard {...data} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurImpact;
