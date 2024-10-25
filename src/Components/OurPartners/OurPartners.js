import React from "react";
import styles from "./OurPartners.module.css";

const OurPartners = () => {
  return (
    <div>
      <p className={styles.partnerHeading}>Our Growth Allies</p>
      <div className={styles.imagesContainer} >
        <img className={styles.partnerImage} src="./Images/ourpartnerLogo.png" alt="" />
      </div>
    </div>
  );
};

export default OurPartners;
