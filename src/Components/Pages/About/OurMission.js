import React from "react";
import styles from "./OurMission.module.css";

function OurMissionCard({ title, description, imageSrc }) {
  return (
    <div className={styles.missionCard}>
      <div className={styles.missionImageWrapper}>
        <img src={imageSrc} alt="" className={styles.missionImage} />
      </div>
      <h3 className={styles.missionTitle}>{title}</h3>
      <p className={styles.missionDescription}>{description}</p>
    </div>
  );
}

function OurVisionCard({ title, imageSrc, description }) {
  return (
    <div className={styles.missionCard}>
      <div className={styles.missionImageWrapper}>
        <img src={imageSrc} alt="" className={styles.missionImage} />
      </div>
      <h3 className={styles.missionTitle}>{title}</h3>
      <p className={styles.missionDescription}>{description}</p>
    </div>
  );
}

const OurMission = () => {
  const missionData = [
    {
      title: "Our Mission",
      description:
        "To simplify students' lives by providing comprehensive educational resources and training, enabling them to excel in competitive exams and school board exams within their school environment. We aim to bridge the educational disparity and explore the true potential of students from all background.",
      imageSrc: "Images/Asserts/mission-image.svg",
    },
  ];

  const visionData = [
    {
      title: "Our Vision",
      description:
        "To create an ecosystem where students from all backgrounds and locations have access to the best teachers and educational content, empowering them to achieve academic success without the need to relocate to coaching hubs. We aspire to nurture students for great results without creating unnecessary pressure.",
      imageSrc: "Images/Asserts/vision-image.svg",
    },
  ];

  return (
    <>
      <div className={styles.outerContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/358be343cdedaabdb1f22139cfcc61f9886fc7dbce8b7ea5ffcd8b7c29d25af2?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
          alt="Background"
          className={styles.backgroundImage}
          loading="lazy"
        />
        <div className={styles.content}>
          <h2 className={styles.heading}>Shaping a Brighter Tomorrow</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              {missionData.map((mission, index) => (
                <OurMissionCard key={index} {...mission} />
              ))}
              {visionData.map((vision, index) => (
                <OurVisionCard key={index} {...vision} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
