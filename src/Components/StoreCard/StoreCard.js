import * as React from "react";
import styles from "./StoreCard.module.css";

function StoreCard({ schoolName, schoolImage, schoolCode, appLink }) {
  return (
    <a href={appLink} className={styles.cardLink}>
      <div className={styles.card}>
        <img
          loading="lazy"
          src={schoolImage}
          alt={schoolName}
          className={styles.cardImage}
        />
        <h2 className={styles.cardTitle}>{schoolName}</h2>
        <p className={styles.cardDescription}>{schoolCode}</p>
        <button className={styles.cardButton}>{"Download"}</button>
      </div>
    </a>
  );
}

export default StoreCard;
