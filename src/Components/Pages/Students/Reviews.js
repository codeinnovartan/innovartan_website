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
        "Thank you for a great course. This program was really helpful to me. It helped me understand the concepts well. Their experienced teachers and doubt-clearing classes enhanced my learning ability. I loved the interactive sessions. I would recommend this program to all my friends.",
      name: "Ipshita Gupta",
      title: "Class 10",
      image: "Images/Asserts/studentReview2.jpeg",
    },
    {
      review:
        "The Gantavya program has been an immaculate initiative taken up by the DPSG Society. What I think is the best thing about the program is that there is one-on-one communication and doubt solving, which really helps us students to advance and maximize our capabilities.",
      name: "Parin Gupta",
      title: "Class 10",
      image: "Images/Asserts/studentReview1.jpeg",
    },
    {
      review:
        "I am Yashvi Kaushik of class 9th D, part of the Gantavya program. This program has been very beneficial, providing specialized courses, individual assistance, and a lot of new knowledge. The classes were personalized, highly interactive, and emphasized practice.",
      name: "Yashvi Kaushik",
      title: "Class 9",
      image: "Images/Asserts/studentReview3.jpeg",
    },
  ];

  return (
    <>
      <section className={styles.reviewsSection}>
        <img
          src="Images/Asserts/student2.jpg"
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
