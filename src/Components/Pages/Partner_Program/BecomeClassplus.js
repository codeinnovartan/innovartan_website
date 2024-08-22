import React from "react";
import styles from "./BecomeClassplus.module.css";

const BecomeClassplus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.BCheading}>Become a Classplus Partner Now</h1>
      <p className={styles.BCdesc}>
        Be the Classplus Ambassador, help tutors understand the benefits of
        digital education, and earn money.
      </p>
      <button className={styles.signupButton}>Sign Up</button>
    </div>
  );
};

export default BecomeClassplus;
