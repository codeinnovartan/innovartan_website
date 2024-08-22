import React from "react";
import styles from "./Highlights.module.css";

const highlightsData = [
  {
    id: 1,
    amount: "₹ 30,000+",
    description: "Average earnings in a month",
    backgroundColor: "#18a388", // Replace with actual color if needed
  },
  {
    id: 2,
    amount: "2,000+",
    description: "Classplus Partners have already joined us",
    backgroundColor: "#f2a33a", // Replace with actual color if needed
  },
  {
    id: 3,
    amount: "₹ 10,000",
    description: "You can earn for every 3 successful referrals",
    backgroundColor: "#8c68db", // Replace with actual color if needed
  },
];

const Highlights = () => {
  return (
    <div className={styles.highlightsSection}>
      <h2 className={styles.sectionTitle}>
        Highlights of Classplus Partner Program
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
