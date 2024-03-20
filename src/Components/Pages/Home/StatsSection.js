import * as React from "react";
import { Button } from "react-bootstrap";

const schoolsData = [
  {
    number: "40+",
    description: "Number of Affiliated Schools",
  },
  {
    number: "250+",
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
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          min-height: 761px;
          padding: 80px 60px;
        }

        @media (max-width: 991px) {
          .hero {
            padding: 0 20px;
          }
        }

        .hero-background {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-content {
          position: relative;
          display: flex;
          margin-top: 30px;
          width: 1296px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
        }

        .hero-subtitle {
          color: #f16126;
          text-align: center;
          letter-spacing: 5px;
          text-transform: uppercase;
          font: 500 18px/150% Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .hero-title {
          color: #101115;
          text-align: center;
          margin-top: 19px;
          font: 700 40px/130% Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .hero-title {
            max-width: 100%;
          }
        }

        .stats {
          display: flex;
          margin-top: 89px;
          width: 847px;
          max-width: 100%;
          align-items: start;
          gap: 20px;
          text-align: center;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .stats {
            flex-wrap: wrap;
            margin-top: 40px;
            justify-content: center;
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          color: #101115;
          align-self: center;
          font: 700 40px/130% Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .stat-description {
          color: #555;
          margin-top: 36px;
          font: 400 18px/133% Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .features {
          align-self: stretch;
          margin-top: 62px;
        }

        @media (max-width: 991px) {
          .features {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .feature-row {
          gap: 20px;
          display: flex;
        }

        @media (max-width: 500px) {
          .feature-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }

        .feature-card {
          box-shadow: 0px 5px 10px 0px rgba(16, 17, 21, 0.1);
          background-color: #fff;
          flex-grow: 1;
          width: 100%;
          padding: 20px 20px;
          border-radius: 20px;
        }

        @media (max-width: 991px) {
          .feature-card {
            max-width: 100%;
            margin-top: 24px;
            padding: 20px 20px;
          }
        }

        .feature-content {
          gap: 20px;
          display: flex;
          align-items: center;
        }

        @media (max-width: 991px) {
          .feature-content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0px;
          }
        }

        .feature-text {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 66%;
          margin-left: 0px;
        }

        @media (max-width: 991px) {
          .feature-text {
            width: 100%;
          }
        }

        .feature-title {
          color: #101115;
          font: 24px/130% Barlow, sans-serif;
        }

        .feature-description {
          color: #555;
          margin-top: 15px;
          font: 400 18px/24px Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .feature-cta {
          justify-content: center;
          border-radius: 4px;
          background-color: #f9e8b0;
          border-color: #f9e8b0;
          color: #101115;
          margin-top: 26px;
          padding: 15px 30px;
          font: 16px/150% Barlow, sans-serif;
          width: fit-content;
        }

        @media (max-width: 991px) {
          .feature-cta {
            align-self: center;
          }
        }

        .feature-image {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 34%;
          //   margin-left: 20px;
        }

        @media (max-width: 991px) {
          .feature-image {
            width: 100%;
            align-items: center;
          }
        }

        .feature-img {
          aspect-ratio: 0.75;
          object-fit: auto;
          object-position: center;
          width: 179px;
          max-width: 100%;
          flex-grow: 1;
        }

        @media (max-width: 991px) {
          .feature-img {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default StatsSection;
