import React from "react";
import styles from "./HelpSchool.module.css";
import { Button } from "react-bootstrap";

const HelpSchool = ({handleModal}) => {
  return (
    <>
      <section className={styles.howInnovartanHelpsSchools}>
        <h2 className={styles.sectionSubtitle}>Choose Any One Course</h2>
        <h1 className={styles.sectionTitle}>How Innovartan Helps Schools</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.row}>
            <div className={styles.imageColumn}>
              <img
                src="Images/Asserts/school1.jpg"
                alt="School"
                className={styles.featuredImage}
              />
            </div>
            <div className={styles.textColumn}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  At Innovartan, we are committed to bolstering schools as more
                  than just places of learning– we aid in their growth as hubs
                  of community engagement and holistic development. Our approach
                  revolves around offering solutions and services tailored to
                  the unique needs of each educational institution. By
                  partnering with us, schools gain access to a wealth of
                  resources and expertise aimed at enhancing their
                  effectiveness, efficiency, and overall impact on students and
                  communities. We understand that the key to educational
                  excellence lies in empowering educators with the necessary
                  tools and resources to thrive in their profession. Through our
                  innovative teaching methodologies and interactive learning
                  experiences, we strive to equip teachers with the skills and
                  knowledge needed to engage students effectively and foster a
                  love for learning. By staying abreast of the latest
                  educational trends and best practices, we ensure that
                  educators are well-prepared to inspire the next generation of
                  learners and cultivate a culture of academic excellence within
                  their schools.
                  <br />
                  <br />
                  Innovartan is dedicated to supporting schools in their mission
                  to provide quality education and cultivate future leaders.
                  Through our comprehensive solutions and support services, we
                  aim to empower schools to create vibrant learning communities
                  where every student can succeed and make a positive impact on
                  the world.
                  <br />
                </p>
                <Button variant="outline-warning" className={styles.ctaButton} onClick={handleModal}>
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSchool;
