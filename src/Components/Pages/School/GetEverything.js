import React from "react";
import styles from "./GetEverything.module.css"

const ProgramCard = ({ title, description, features, buttonText }) => (
  <div className={styles.programCard}>
    <h3 className={styles.programTitle}>{title}</h3>
    <p className={styles.programDescription}>{description}</p>
    <ul className={styles.programFeatures}>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className={styles.programButton}>{buttonText}</button>
  </div>
);

const schoolPlusFeatures = [
  "Teacher training",
  "Monitoring & Support",
  "Advanced Study Materials & Assessment",
  "Regular Evaluation & Reports",
  "Video Lectures",
  "Assignment Support",
];

const schoolProFeatures = [
  "Staffing Solutions",
  "Marketing & Outreach",
  "Professional Development",
  "Curriculum & Instructional Design",
  "Scholarships & Academic Calendar",
  "Content & Student Support",
  "Extra-curriculars",
  "Funding & Governance",
];
const GetEverything = () => {
  return (
    <>
      <section className={styles.learningPrograms}>
        <h2 className={styles.sectionTitle}>Get Everything for Learning</h2>
        <div className={styles.programsContainer}>
          <ProgramCard
            title="School Plus Program"
            description="Cultivate a Culture of Academic Excellence!"
            features={schoolPlusFeatures}
            buttonText="Sign Up Today"
          />
          <ProgramCard
            title="School Pro Program"
            description="For Operational Excellence & Overall Growth of Your School."
            features={schoolProFeatures}
            buttonText="Register Now"
          />
        </div>
      </section>
    </>
  );
};

export default GetEverything;
