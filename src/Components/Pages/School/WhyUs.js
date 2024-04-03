import React from "react";
import styles from "./WhyUs.module.css";
import { Image } from "react-bootstrap";

const instructorData = [
  {
    imge: "Images/Asserts/whyus1.jpg",
    name: "Emilee Logan",
    title: "Lead Instructor",
    email: "info@prof.mail.com",
    youtube: "www.youtube.com/prof.is",
  },
  {
    imge: "Images/Asserts/whyus2.jpg",
    name: "Angel Milli",
    title: "Lead Instructor",
    email: "info@prof.mail.com",
    youtube: "www.youtube.com/prof.is",
  },
];

const instructor = [
  {
    name: "Mim Jaqno",
    title: "Lead Instructor",
    image:
      "Images/Asserts/whyus4.jpg",
  },
  {
    name: "Henri",
    title: "Lead Instructor",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4121ed04766fee1ffb74795779d5ba370685f93199580d9337d5f16865b93ec5?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
  },
  {
    name: "Bin Tonso",
    title: "Lead Instructor",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/10c335bc9dfebf497e9d130d759f444da74286202e79c0c6b26313906ebc9af5?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
  },
  {
    name: "Selina Gomez",
    title: "Lead Instructor",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/21e82627d196ca7e33e1e451455a87c8f0866190eecd5c880166f7c8fffd6f13?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
  },
  {
    name: "Baluni Chobo",
    title: "Lead Instructor",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4c19686b5587020d6e7ba2734743a501d7d4bc860cf8cc20696e922074bdeba?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
  },
  {
    name: "Angel Mili",
    title: "Lead Instructor",
    image:
      "Images/Asserts/whyus3.jpg",
  },
];

function InstructorCard({ name, title, image, backgroundImage, badgeImage }) {
  return (
    <article className={styles.instructorCard}>
      <div className={styles.instructorImageWrapper}>
        <img src={image} alt={name} className={styles.instructorImage} />
        {badgeImage && (
          <img src={badgeImage} alt="" className={styles.badgeImage} />
        )}
      </div>
      <h3 className={styles.instructorName}>{name}</h3>
      <p className={styles.instructorTitle}>{title}</p>
    </article>
  );
}

const instructorDataCard = ({ index, data }) => {
  return (
    <div key={index} className={styles.instructorCardContainer}>
      <div className={styles.cardContent}>
        <Image src={data.imge} alt={data.name} className={styles.cardImage} />
        <div className={styles.cardInner}>
          <h3>{data.name}</h3>
          <p>{data.title}</p>
          <div className={styles.linkContainer}>
            <i className="fa-solid fa-envelope"></i>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className={styles.linkContainer}>
            <i className="fa-brands fa-youtube"></i>
            <a href={data.youtube}>{data.youtube}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h5>Why Choose Us</h5>
        <h2>Get Everything for Learning</h2>
        <div className={styles.row}>
          {instructorData.map((data, index) => {
            return instructorDataCard({ index, data });
          })}
        </div>
        <div className={styles.instructorList}>
          {instructor.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
