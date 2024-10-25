import React from "react";
import styles from "./OurFinancialPartner.module.css";

const AdvisorCard = ({ color, imageUrl, advisorNames }) => {
  return (
    <div className={styles.cardOuter}>
      <div
        className={styles.rectangle}
        style={{ backgroundColor: color }}
      ></div>
      <img src={imageUrl} alt="Advisor" className={styles.image} />
      <p className={styles.cardHeading}>{advisorNames}</p>
      <p className={styles.cardSubHeading}>Advisor</p>
    </div>
  );
};

const OurFinancialPartner = () => {
  return (
    <div className={styles.outerContainer}>
      <p className={styles.financialHeading}> Our Advisors</p>
      <div style={{ display: "flex", gap: "200px" }}>
        <AdvisorCard
          color="#F36421"
          imageUrl="Images/financerImage2.svg"
          advisorNames={"Gokul Rajaram"}
        />
        <AdvisorCard
          color="#114AA0"
          imageUrl="Images/financerImage1.svg"
          advisorNames={"Amit Singhal"}
        />
      </div>
    </div>
  );
};

export default OurFinancialPartner;
