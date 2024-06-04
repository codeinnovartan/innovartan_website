import React from "react";
import styles from "./EducationSolution.module.css";
// import { Button } from "react-bootstrap";

const EducationSolution = () => {
  const academicIntegrationData = {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d4b8b2c42add90529f5c037666792c03d9e3954d7dde64df5449b4351eca464d?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Academic Integration",
    viewMoreText: "View More",
  };
  const enhancedFocusData = {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cdb5069d66e1bc09f0a86c2ec0a16e2a38635b35bedbba605e7216cedcc71c59?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Enhanced Focus",
    viewMoreText: "View More",
  };
  const seamlessEducationalSupportData = {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd89fb31df3782acdb618cd4bcb82de2a77d6c16e23a5a090ea0273655903069?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Seamless Educational Support",
    viewMoreText: "View More",
  };
  const mentalWellBeingData = {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/977d202b4a125c82bf43b9e5418dc350158ecb20e981c78b87d45512f3b5b5f3?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Mental Well-being",
    viewMoreText: "View More",
  };
  const financialEfficiencyData = {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52183534f3744a6695d9459cad99be54bdcbfad0094befdd3abaf6fcafa599b1?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Financial Efficiency",
    viewMoreText: "View More",
  };
  const communityConnectionData = {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4e0dad61eff74014c9455c81358cd35132554d34cf4b5c97e6f09431c818237?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Community Connection",
    viewMoreText: "View More",
  };
  return (
    <>
      <section className={styles.heroSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/86b9b62fc8e57a9dab730c84f380b9de9b44bfb4538f9433f13a87cd55ebc509?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
          alt=""
          className={styles.heroBackground}
          loading="lazy"
        />
        <div className={styles.heroContent}>
          <h2 className={styles.sectionSubtitle}>
            One-Stop Education Solution
          </h2>
          <h1 className={styles.sectionTitle}>
            Welcome to an Innovartan-Empowered Environment
          </h1>
          <div className={styles.featuresRow}>
            <div className={styles.featuresGrid}>
              <FeatureCard {...academicIntegrationData} />
              <FeatureCard {...enhancedFocusData} />
              <FeatureCard {...seamlessEducationalSupportData} />
            </div>
          </div>
          <div className={styles.featuresRow}>
            <div className={styles.featuresGrid}>
              <FeatureCard {...mentalWellBeingData} />
              <FeatureCard {...financialEfficiencyData} />
              <FeatureCard {...communityConnectionData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
function FeatureCard({ imageSrc, title, viewMoreText }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureHeader}>
        <img
          src={imageSrc}
          alt=""
          className={styles.featureIcon}
          loading="lazy"
        />
        <div className={styles.featureTitle}>{title}</div>
      </div>
      {/* <Button variant="outline-secondary" className={styles.viewMoreLink}>
        {viewMoreText}
      </Button> */}
    </div>
  );
}

export default EducationSolution;
