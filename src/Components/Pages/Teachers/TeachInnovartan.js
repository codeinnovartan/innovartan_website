import React from "react";
import styles from "./TeachInnovartan.module.css";
// import { Button } from "react-bootstrap";

const insightsData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/904ec9074e8bb6495a92f28dd134ab02f6524b5fb2e6eb0f59c8918029309cc2?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Stay Informed: Latest Educational Insights",
    description:
      "Stay informed with the latest educational insights. Access research articles, case studies, and thought-provoking content curated to inspire and inform your teaching practices.",
  },
];

const developmentData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5582c22c3eba23d0bd57005eeb32fef12a24cc87e16cdd6d6010beff892b0a77?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4c0b6d508afdd1efefdd7901b55452706d4e262b443e7d65434442acb620368?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Personalized Professional Development",
    description:
      "Discover personalised professional development opportunities tailored to your unique interests and career goals. Choose from a variety of learning paths designed to support your growth as an educator and leader in your field.",
  },
];

const InsightsCard = ({ imageSrc, title, description }) => (
  <div className={styles.insightsCard}>
    <img src={imageSrc} alt="" className={styles.insightsImage} />
    <h3 className={styles.insightsTitle}>{title}</h3>
    <p className={styles.insightsDescription}>{description}</p>
  </div>
);

const DevelopmentCard = ({ imageSrc, avatarSrc, title, description }) => (
  <div className={styles.developmentCard}>
    <div className={styles.developmentImageWrapper}>
      <img src={imageSrc} alt="" className={styles.developmentBackground} />
      <img src={avatarSrc} alt="" className={styles.developmentAvatar} />
    </div>
    <h3 className={styles.developmentTitle}>{title}</h3>
    <p className={styles.developmentDescription}>{description}</p>
  </div>
);

const TeachInnovartan = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Teach with Innovartan</h2>
          <h1 className={styles.title}>
            Discover Your Potential. <br /> Make A Global Impact.
          </h1>
          <div className={styles.cardGrid}>
            <div className={styles.column}>
              {insightsData.map((data, index) => (
                <InsightsCard key={index} {...data} />
              ))}
            </div>
            <div className={styles.column}>
              {developmentData.map((data, index) => (
                <DevelopmentCard key={index} {...data} />
              ))}
            </div>
          </div>
          {/* <Button variant="outline-warning" className={styles.ctaButton}>
            Know More
          </Button> */}
        </div>
      </section>
    </>
  );
};

export default TeachInnovartan;
