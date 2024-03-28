import React from "react";
import styles from "./Reviews.module.css";

function ReviewCard({ review, name, title, image }) {
  return (
    <div className={styles.reviewCard}>
      <img
        alt={"profile image of " + name}
        src={image}
        className={styles.profileImage}
      />
      <p className={styles.reviewText}>{review}</p>
      <h3 className={styles.reviewerName}>{name}</h3>
      <p className={styles.reviewerTitle}>{title}</p>
    </div>
  );
}

const Reviews = () => {
  const reviews = [
    {
      review:
        "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",
      name: "Rajib Raj",
      title: "Assistant principal",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/10890c0954b0853a4519a09eb8e69784c59214b9051f2a7a4f999c384c2dffb2?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    },
    {
      review:
        "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",
      name: "Ritika Bhat",
      title: "Assistant principal",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8532a3d9e42b7d2a967a338ce050098615a5d3c76e5aa9a92f583882de4a11c2?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    },
    {
      review:
        "Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",
      name: "Umme Nishat",
      title: "Assistant principal",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/458cce40eaf7fbcda79484c374134e561eb1f0458175e65973e85485e7dba188?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    },
  ];

  return (
    <>
      <section className={styles.reviewsSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80a4449cb4645d16648a5fa58d507d7f582df14d74778349604cd63f1b208f19?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
          alt=""
          className={styles.backgroundImage}
        />
        <div className={styles.reviewsContent}>
          <h2 className={styles.sectionSubtitle}>Reviews</h2>
          <h1 className={styles.sectionTitle}>What Students Say About Us</h1>
          <div className={styles.reviewsContainer}>
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
