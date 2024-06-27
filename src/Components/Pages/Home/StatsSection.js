import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./StatsSection.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const schoolsData = [
  {
    number: "43",
    description: "Number of Affiliated Schools",
  },
  {
    number: "527",
    description: "Number of Teachers Trained/Placed",
  },
  {
    number: "11471",
    description: "Number of Students",
  },
];

const FeatureCard = ({ title, description, ctaText, imageSrc, altText }) => (
  <div className="feature-card">
    <div className="feature-content">
      <div className="feature-text">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        <Button
          variant="outline-primary"
          className="feature-cta"
          onClick={() =>
            window.open("https://app.innovartan.com/signups", "_blank")
          }
        >
          {ctaText}
        </Button>
      </div>
      <div className="feature-image">
        <img src={imageSrc} alt={altText} className="feature-img" />
      </div>
    </div>
  </div>
);
const StatsSection = () => {
  const [counterState, setCounterState] = useState(false);

  useEffect(() => {
    setCounterState(false); // Reset the state on mount
  }, []);

  const StatItem = ({ number, description }) => (
    <div className="stat-item">
      <div className="stat-number">
        <ScrollTrigger
          onEnter={() => {
            setCounterState(true);
          }}
          onExit={() => {
            setCounterState(false);
          }}
          resetOnUnmount={true}
        >
          {counterState && <CountUp end={number} duration={5} />}+
        </ScrollTrigger>
      </div>

      <div className="stat-description">{description}</div>
    </div>
  );
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
                imageSrc="Images/Asserts/stats2.png"
                altText="Begin teaching career"
              />
              <FeatureCard
                title="One-Stop Education Solution"
                description="Level up your teaching techniques so that students need not rely on coaching centres. Become an all-round dependable educator!"
                ctaText="Register Now"
                imageSrc="Images/Asserts/stats1.png"
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
