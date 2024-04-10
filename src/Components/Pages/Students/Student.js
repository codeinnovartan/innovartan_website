import React from "react";
import EducationSolution from "./EducationSolution";
import WhyInnovartan from "./WhyInnovartan";
import Reviews from "./Reviews";
import StatsSection from "../Home/StatsSection";
import Footer from "../../Footer/Footer";
import CommonNavbar from "../../CommonNavbar/CommonNavbar";
import ScrollTrigger from "react-scroll-trigger";

const Student = () => {
  const [viewState, setViewState] = React.useState(false);
  return (
    <>
    { viewState && <CommonNavbar />}
      <div className="educationSolutions">
        <EducationSolution />
      </div>
      <div className="whyInnovartan">
        <WhyInnovartan />
      </div>
      <ScrollTrigger
        onEnter={() => setViewState(true)}
        onExit={() => setViewState(false)}
      >
      <div className="Reviews">
        <Reviews />
      </div>
      <div className="Stats">
        <StatsSection />
      </div>
      <div className="Footer">
        <Footer />
      </div>
      </ScrollTrigger>
    </>
  );
};

export default Student;
