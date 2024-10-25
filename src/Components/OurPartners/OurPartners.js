import React from "react";
import styles from "./OurPartners.module.css";

const OurPartners = () => {
  return (
    <div>
      <p className={styles.partnerHeading}>Our Collaborators in Growth</p>
      <div className={styles.imagesContainer} >
        <img className={styles.partnerImage} src="Images/ourPartnerLogo1.png" alt="" />
        <img className={styles.partnerImage} src="Images/ourPartnerLogo2.svg" alt="" />
      </div>
    </div>
  );
};

export default OurPartners;
