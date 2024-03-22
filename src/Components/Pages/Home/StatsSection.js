import * as React from "react";
import { Button } from "react-bootstrap";
import "./StatsSection.css";

const schoolsData = [
  {
    number: "40+",
    description: "Number of Affiliated Schools",
  },
  {
    number: "500+",
    description: "Number of Teachers Trained/Placed",
  },
  {
    number: "10,000+",
    description: "Number of Students",
  },
];

const StatItem = ({ number, description }) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-description">{description}</div>
  </div>
);

const FeatureCard = ({ title, description, ctaText, imageSrc, altText }) => (
  <div className="feature-card">
    <div className="feature-content">
      <div className="feature-text">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        <Button className="feature-cta">{ctaText}</Button>
      </div>
      <div className="feature-image">
        <img src={imageSrc} alt={altText} className="feature-img" />
      </div>
    </div>
  </div>
);
const StatsSection = () => {
  return (
    <>
      <section className="hero">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27c6e7cb2e68f06deea5fe79c029c4ce1929835335e4db5fa84305387e45d54f?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
          alt="Hero background"
          className="hero-background"
        />
        <div className="hero-content">
          <div className="hero-subtitle">START TO SUCCESS</div>
          <h1 className="hero-title">Achieve Your Goals With Innovartan</h1>
          <div className="stats">
            {schoolsData.map((item, index) => (
              <StatItem key={index} {...item} />
            ))}
          </div>
          <div className="features">
            <div className="feature-row">
              <FeatureCard
                title="Begin Your Teaching Career"
                description="Completed B.Ed. but still struggling to get job opportunities? Update your CV with a course built to shape you into a top-notch educator!"
                ctaText="Sign Up Today"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5a5ab840a02f43f395062c136a3646c4976ff7dd0d0d978392e9e415a53d8544?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
                altText="Begin teaching career"
              />
              <FeatureCard
                title="One-Stop Education Solution"
                description="Level up your teaching techniques so that students need not rely on coaching centres. Become an all-round dependable educator!"
                ctaText="Register Now"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/623c618f22af0cce949c75c05ae3edbea53ad6b94e2c712b23d65a7346d1ae49?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
                altText="One-stop education solution"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
