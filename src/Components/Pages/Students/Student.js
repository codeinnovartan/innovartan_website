import React from "react";
import EducationSolution from "./EducationSolution";
import WhyInnovartan from "./WhyInnovartan";
import Reviews from "./Reviews";
import StatsSection from "../Home/StatsSection";
import Footer from "../../Footer/Footer";

const Student = () => {
  return (
    <>
      <div className="educationSolutions">
        <EducationSolution />
      </div>
      <div className="whyInnovartan">
        <WhyInnovartan />
      </div>
      <div className="Reviews">
        <Reviews />
      </div>
      <div className="Stats">
        <StatsSection />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default Student;
