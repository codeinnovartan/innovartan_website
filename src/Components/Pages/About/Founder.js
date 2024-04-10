import React from "react";
import styles from "./Founder.module.css";

function FounderImage() {
  return (
    <div className={styles.founderImageContainer}>
      <img
        loading="lazy"
        src="Images/Asserts/prashant-sir.png"
        alt="Prashant Sharma"
        className={styles.founderImage}
      />
      <h3 className={styles.founderName}>Prashant Sharma</h3>
      <p className={styles.founderTitle}>
        Founder <br />
        <span className={styles.companyName}>
          I<span style={{color: '#F56520'}}>nn</span>ovartan
        </span>
      </p>
    </div>
  );
}

function FounderBio() {
  return (
    <div className={styles.founderBioContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48212a2dcb73d9509e945441dfebc08dccac64667bc066a38cb8320316d37289?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
        alt=""
        className={styles.decorativeQuoteIcon}
      />
      <div className={styles.founderBio}>
        <span className={styles.founderName}>Prashant Sharma</span>, the founder
        of <span style={{fontWeight: 700}}>INNOVARTAN</span> has been a
        dedicated teacher for over fifteen years, guiding thousands of students
        for competitive exams like IIT JEE and NEET. The idea of Innovartan was
        born from a dream where he realized that he was limiting his impact by
        only teaching a select few top batches. This realization led him to
        establish the brand with the mission to bridge the educational gap and
        explore the potential of students nationwide.
        <br />
        <br />
        At Innovartan, the focus is on simplifying students' lives by providing
        comprehensive resources for excelling in competitive exams and school
        board exams, all within the school environment. They offer training and
        upskilling for teachers, ready trained teachers as per school
        requirements, and a robust AI-based testing platform for regular student
        assessment.
        <br />
        <br />
        Driven by the passion to make education accessible to all students,
        regardless of their location or background, he aims to create an
        ecosystem where students can access the best teachers and content from
        their home or school without the need to relocate to coaching hubs. He
        believes that with the right support in schools, students can achieve
        great results without unnecessary pressure.
        <br />
        <br />
        With a focus on creating a brighter future for children, Prashant is
        committed to providing the best education and practices to students
        across the nation.
        <br />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f673ef01c1ae1cea92bf37749f10f7e0c0be134306ec99a550c9a3c51a9b4d7?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
        alt=""
        className="decorative-quote-icon align-self-end"
      />
    </div>
  );
}

const Founder = () => {
  return (
    <>
      <section className={styles.aboutFounderSection}>
        <div className={styles.aboutFounderContainer}>
          <h2 className={styles.aboutFounderTitle}>About the Founder</h2>
          <div className={styles.aboutFounderContent}>
            <div className={styles.founderImageWrapper}>
              <FounderImage />
            </div>
            <div className={styles.founderBioWrapper}>
              <FounderBio />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;
