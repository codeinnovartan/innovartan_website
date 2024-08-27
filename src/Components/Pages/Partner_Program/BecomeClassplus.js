import React from "react";
import styles from "./BecomeClassplus.module.css";

const BecomeClassplus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.BCheading}>
        Become an Innovartan <strong className={styles.Become}>Channel</strong>
        <strong className={styles.A}>Partner</strong>
      </h1>
      <i
        className="fa-regular fa-hand-point-down fa-2xl"
        style={{
          marginBottom: "30px",
          marginTop: "30px",
          fontSize: "50px",
          color: "black",
        }}
      ></i>
      <p className={styles.BCdesc}>
        As an Innovartan Ambassador, I empower schools by educating educators on
        the advantages of hybrid learning, fostering a culture of innovation and
        growth that benefits both teachers and students.
      </p>
      <button
        className={styles.signupButton}
        onClick={() => {
          window.location.href =
            "https://app.innovartan.com/affiliation/signup";
        }}
      >
        Sign Up Now
      </button>
    </div>
  );
};

export default BecomeClassplus;
