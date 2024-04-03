import React from "react";
import styles from "./Services.module.css";

const services = [
  "Teacher Training",
  "Academic Support",
  "Management Operations",
  "Study Resources",
  "Regular Assessments",
  "E-learning Provisions",
];

function ServiceItem({ service }) {
  return (
    <div className={styles.serviceCard}>
      <p>{service}</p>
    </div>
  );
}

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <h3 className={styles.sectionSubtitle}>
        Revolutionising Academic Environments
      </h3>
      <ul className={styles.servicesList}>
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </ul>
      <button className={styles.registerButton}>Register Now</button>
    </section>
  );
};

export default Services;
