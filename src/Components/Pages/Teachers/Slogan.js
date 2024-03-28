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
        <p className={styles.quoteText}>"To teach is to learn twice"</p>
        <div className={styles.authorContainer}>
          <cite className={styles.quoteAuthor}>– Joseph Joubert</cite>
          <p className={styles.authorDescription}>French Moralist & ESSAYist</p>
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
