import React from "react";
import styles from "./WhyInnovartan.module.css";

function FeatureItem({ imageSrc, title, description }) {
  return (
    <>
      <div className={styles.featureItem}>
        <img
          loading="lazy"
          src={imageSrc}
          className={styles.featureIcon}
          alt={title}
        />
        <div className={styles.featureText}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </>
  );
}

const WhyInnovartan = () => {
  const features = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3f56e6e9e1ccc9eac6cdde37edcbb44d9143dd78d98bbcf1db4e045a6a914561?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
      title: "A Hub for Continuous Learning",
      description:
        "Our platform serves as a dynamic hub for continuous learning and professional development, ensuring that teachers stay abreast of emerging trends, best practices, and educational innovations.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/33a40e0b8ceaa6484a852a7fc1c97a32e2b4744ef62257fe5d3204408c89e9c6?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
      title: "Curated Resources & Interactive Sessions",
      description:
        "With access to curated resources and interactive sessions, educators can expand their knowledge base, clarify concepts, and refine their teaching approaches to create enriching learning experiences for their students.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2f499b63c147895a86c998f0cb30d16b7f62a9b952417b09bfd9e3226bed6907?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
      title: "Connect & Collaborate: Educator Networking",
      description:
        "Join our vibrant network of educators and connect with like-minded professionals to share ideas and collaborate on projects. Build a supportive community of peers who understand the challenges and joys of the teaching profession.",
    },
  ];

  return (
    <>
      <section className={styles.whyJoinInnovartan}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img
              loading="lazy"
              src="Images/Asserts/Teacher1.png"
              className={styles.featuredImage}
              alt="Why Join Innovartan"
            />
          </div>
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <div className={styles.headingWrapper}>
                <h2 className={styles.sectionTitle}>Why Join Innovartan?</h2>
                <div className={styles.titleUnderline}>
                  <div className={styles.underlineLong} />
                  <div className={styles.underlineShort} />
                </div>
                {/* <p className={styles.sectionDescription}>
                  Discourse assurance estimable applauded to so. Him everything
                  melancholy uncommonly but solicitude inhabiting
                  <br /> projection off. Connection stimulated estimating
                  excellence an to impression.
                </p> */}
              </div>
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyInnovartan;
