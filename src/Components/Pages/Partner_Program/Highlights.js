import React from "react";
import styles from "./Highlights.module.css";

const highlightsData = [
  {
    id: 1,
    amount: "Upto ₹ 1,00,000",
    description: "Average earnings in a month",
    backgroundColor: "#18a388",
  },
  {
    id: 2,
    amount: "121+",
    description: "Innovartan Partners have already joined us",
    backgroundColor: "#f2a33a",
  },
  {
    id: 3,
    amount: "₹ 10,000",
    description: "You can earn for every successful referrals",
    backgroundColor: "#8c68db",
  },
];

const Highlights = () => {
  return (
    <div className={styles.highlightsSection}>
      <h2 className={styles.sectionTitle}>
        Highlights of Innovartan{" "}
        <strong className={styles.Become}>Channel</strong>
        <strong className={styles.A}>Partner</strong> Program
      </h2>
      <div className={styles.highlightsContainer}>
        {highlightsData.map((highlight) => (
          <div
            key={highlight.id}
            className={styles.highlightCard}
            style={{ backgroundColor: highlight.backgroundColor }}
          >
            <h3 className={styles.highlightAmount}>{highlight.amount}</h3>
            <p className={styles.highlightDescription}>
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
