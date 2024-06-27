import React from "react";
// import { Form } from "react-bootstrap";
import styles from "./SearchComponent.module.css";

function StatCard({ icon, text }) {
  return (
    <div className={styles.statCard}>
      <img src={icon} alt="" className="stat-icon" />
      <div className="stat-text">{text}</div>
    </div>
  );
}

const stats = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a49f601e0e3ce0892a8454c699cd3fbb6281dd41ba1539c31226dd2bf3037f0?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    text: "11471+ Students",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de109f90fbbb598fa39e12b407617e864388a54d3acf78ce9055c1074607a551?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    text: "43+ Affiliate Schools",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/422042b252d8edf8c9d91ad7801a8d6a0a6391a3805cd410d46e24857f9a1602?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    text: "527+ Trained Teachers",
  },
];

const SearchComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className="title">Innovartan School Network</h1>
        <p className="subtitle">Where Education Meets Innovation</p>
        {/* <Form.Control
          className={styles.searchText}
          type="text"
          aria-describedby="passwordHelpBlock"
          placeholder="Search for schools near you"
        /> */}
        {/* <p className={styles.description}>
          Find Innovartan-Affiliate Schools Near You
        </p> */}
        <br />
        <br />
        <br />
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} text={stat.text} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
