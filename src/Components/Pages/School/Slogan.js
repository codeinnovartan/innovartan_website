import React from "react";
import styles from "./Slogan.module.css";

function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <h2 className={styles.sectionTitle}>
        Join The Innovartan Network Today!
      </h2>
      <div className={styles.titleUnderline}>
        <div className={styles.underlineBar} />
        <div className={styles.underlineBar} />
      </div>
      <blockquote className={styles.quoteContainer}>
        <p className={styles.quoteText}>
          “Education is not preparation for life <br></br> <br></br>education is
          life itself.”
        </p>
        <div className={styles.authorContainer}>
          <cite className={styles.quoteAuthor}>– John Dewey</cite>
          <p className={styles.authorDescription}>American Philosopher, Psychologist & Educational Reformer</p>
        </div>
      </blockquote>
    </section>
  );
}

const Slogan = () => {
  return (
    <>
      <QuoteSection />
    </>
  );
};

export default Slogan;
