import React from "react";
import styles from "./BecomeClassplus.module.css";

const BecomeClassplus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.BCheading}>Become a Innovartan Partner Now</h1>
      <p className={styles.BCdesc}>
      As an Innovartan Ambassador, I empower schools by educating educators on the advantages of hybrid learning, fostering a culture of innovation and growth that benefits both teachers and students.
      </p>
      <button
        className={styles.signupButton}
        onClick={() => {
          window.location.href =
            "https://app.innovartan.com/affiliation/signup";
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default BecomeClassplus;
