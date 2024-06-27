import React from "react";
import styles from "./WhyUs.module.css";
import { Image } from "react-bootstrap";

const instructorData = [
  {
    imge: "Images/Asserts/educator5.png",
    name: "Purushottam Singh",
    title: "Lead Instructor",
    email: "info@innovartan.com",
    youtube: "youtube/Edvanz.Innovartan",
    youtubeLink: "https://www.youtube.com/@Edvanz.Innovartan",
  },
  {
    imge: "Images/Asserts/educator1.png",
    name: "Arka Sen",
    title: "Lead Instructor",
    email: "info@innovartan.com",
    youtube: "youtube/Edvanz.Innovartan",
    youtubeLink: "https://www.youtube.com/@Edvanz.Innovartan",
  },
];

const instructor = [
  {
    name: "Harish kharbanda",
    title: "Lead Instructor",
    image: "Images/Asserts/educator2.png",
  },
  // {
  //   name: "Henri",
  //   title: "Lead Instructor",
  //   image: "Images/Asserts/educator10.png",
  // },
  {
    name: "Abhishek Tripathi",
    title: "Lead Instructor",
    image: "Images/Asserts/educator7.png",
  },
  {
    name: "Sachin Kapoor",
    title: "Lead Instructor",
    image: "Images/Asserts/educator4.png",
  },
  {
    name: "Anand Pandey",
    title: "Lead Instructor",
    image: "Images/Asserts/educator8.png",
  },
  {
    name: "Rahul Jain",
    title: "Lead Instructor",
    image: "Images/Asserts/educator9.JPG",
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
            <a href={data.youtubeLink}>{data.youtube}</a>
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
