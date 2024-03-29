import React from "react";

const CustomizedSupportCard = ({ imageSrc, title, subtitle, description }) => (
  <div className="card">
    <img src={imageSrc} alt={title} className="card-image" />
    <div className="card-title">{title}</div>
    <div className="card-subtitle">{subtitle}</div>
    <div className="card-description">{description}</div>
    <div className="card-button">Read More</div>
  </div>
);

const cardData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7fb6919665a176e6e46c1c161d85a22f9e0e9bbd90da3fab60d3624defbbca?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "CUSTOMISED SUPPORT",
    subtitle: "Covering Unique Challenges of Each School",
    description:
      "Tailoring solutions for each school's individual challenges, ensuring comprehensive support and effective problem-solving.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bf46b2679bdb6a08a2b071c78ec73577fd45765a5f6cc117a7a864c66a504fa?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "HOLISTIC CURRICULUM",
    subtitle: "Comprehensive Coverage of All Subjects",
    description:
      "Providing an expansive curriculum to ensure that students receive a well-rounded education that prepares them for success.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83b8d08e16d2c2f906c39a4600d8d6440936b52dad5489d6be39f2646226e884?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "PROFESSIONAL GROWTH",
    subtitle: "Training & Upskilling Teachers",
    description:
      "Offering teachers training aimed at enhancing the pedagogical skills, content knowledge, and classroom management strategies.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7fb6919665a176e6e46c1c161d85a22f9e0e9bbd90da3fab60d3624defbbca?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "SOCIAL COLLABORATION",
    subtitle: "For Knowledge-sharing & Support",
    description:
      "Inclusive platform for educators, students, and stakeholders, fostering a culture of knowledge-sharing and mutual support.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bf46b2679bdb6a08a2b071c78ec73577fd45765a5f6cc117a7a864c66a504fa?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "EDUCATION COLLABS",
    subtitle: "With Experts & Institutions for Resources",
    description:
      "Establishing strategic educational collaborations with industry experts and esteemed institutions to leverage their expertise and resources.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83b8d08e16d2c2f906c39a4600d8d6440936b52dad5489d6be39f2646226e884?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "FUTURE PREPARATION",
    subtitle: "Equipping Students For Success",
    description:
      "Providing students with comprehensive skills, knowledge, and experiences that foster resilience, adaptability, critical thinking, and creativity.",
  },
];

const TransformSchool = () => {
  return (
    <>
      <div className="container">
        <div className="subtitle">Don't Miss the Day</div>
        <div className="title">
          Transform Your School: Join the Innovartan Revolution
        </div>
        <div className="card-grid">
          <div className="card-row">
            {cardData.slice(0, 3).map((card, index) => (
              <div
                className={`card-column ${index === 1 ? "middle-card" : ""}`}
                key={card.title}
              >
                <CustomizedSupportCard {...card} />
              </div>
            ))}
          </div>
        </div>
        <div className="card-grid">
          <div className="card-row">
            {cardData.slice(3).map((card, index) => (
              <div
                className={`card-column ${index === 1 ? "middle-card" : ""}`}
                key={card.title}
              >
                <CustomizedSupportCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }
        .subtitle {
          color: #555;
          text-align: center;
          letter-spacing: 5px;
          text-transform: uppercase;
          align-self: center;
          font: 500 18px/150% Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .title {
          color: #101115;
          text-align: center;
          align-self: center;
          margin-top: 31px;
          font: 700 40px/130% Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .title {
            max-width: 100%;
          }
        }
        .card-grid {
          margin-top: 56px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .card-grid {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .card-row {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .card-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .card-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .card-column {
            width: 100%;
          }
        }
        .middle-card {
          margin-left: 20px;
        }
        .card {
          border-radius: 4px;
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 16px;
          color: #101115;
          font-weight: 700;
          line-height: 150%;
          width: 100%;
        }
        @media (max-width: 991px) {
          .card {
            margin-top: 24px;
          }
        }
        .card-image {
          aspect-ratio: 1.54;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .card-title {
          margin-top: 28px;
          font: 24px/130% Barlow, sans-serif;
        }
        .card-subtitle {
          color: #555;
          font-family: Barlow, sans-serif;
          margin-top: 11px;
        }
        .card-description {
          color: #555;
          margin: 29px 37px 0 0;
          font: 400 18px/24px Barlow, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .card-description {
            margin-right: 10px;
          }
        }
        .card-button {
          font-family: Barlow, sans-serif;
          justify-content: center;
          border-radius: 4px;
          border: 2px solid rgba(255, 223, 64, 1);
          align-self: start;
          margin-top: 67px;
          padding: 19px 32px;
        }
        @media (max-width: 991px) {
          .card-button {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
};

export default TransformSchool;
