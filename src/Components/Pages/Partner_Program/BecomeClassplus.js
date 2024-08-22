import React from "react";
import styles from "./BecomeClassplus.module.css";

const BecomeClassplus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.BCheading}>Become a Innovartan Partner Now</h1>
      <p className={styles.BCdesc}>
        Be the Innovartan Ambassador, help tutors understand the benefits of
        digital education, and earn money.
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
