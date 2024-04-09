import React from "react";
import styles from "./CategoryIcon.module.css";

const CategoryIcon = ({ image, text, link }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <div className={styles.customButton}>
        <img src={image} alt="category" />
      </div>
      <p
        style={{
          fontSize: 14,
          marginTop: 20,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default CategoryIcon;
