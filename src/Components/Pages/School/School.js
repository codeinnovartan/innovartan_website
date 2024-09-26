import React from "react";
import HelpSchool from "./HelpSchool";
import TransformSchool from "./TransformSchool";
import WhyUs from "./WhyUs";
import GetEverything from "./GetEverything";
import MoreThanSchool from "./MoreThanSchool";
import EducationGap from "./EducationGap";
import Stats from "../Home/StatsSection";
import Footer from "../../Footer/Footer";
import Services from "./Services";
import Slogan from "./Slogan";
import CommonNavbar from "../../CommonNavbar/CommonNavbar";
import ScrollTrigger from "react-scroll-trigger";
import LeadModal from "../../LeadModal/LeadModal";
import EducationSolution from "../Students/EducationSolution";

const School = () => {
  const [viewState, setViewState] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleModal = () => {
    setModalShow(true);
  };
  return (
    <div>
      {viewState && <CommonNavbar />}
      <div className={"helpsSchool"}>
        <HelpSchool handleModal={handleModal} />
      </div>
      <div className="educationSolutions">
        <EducationSolution />
      </div>
      <ScrollTrigger
        onEnter={() => setViewState(true)}
        onExit={() => setViewState(false)}
      >
        <div className={"transformSchool"}>
          <TransformSchool />
        </div>
        {/* <div className={"whyUs"}>
          <WhyUs />
        </div> */}
        <div className={"getEverything"}>
          <GetEverything handleModal={handleModal} />
        </div>
        <div className={"MoreThanSchool"}>
          <MoreThanSchool />
        </div>
        <div className={"EducationGap"}>
          <EducationGap />
        </div>
        <div className={"Services"}>
          <Services />
        </div>
        <div className={"Slogan"}>
          <Slogan />
        </div>
        <div className={"Stats"}>
          <Stats />
        </div>
        <div className={"Footer"}>
          <Footer />
        </div>
        <div className={"LeadModal"}>
          <LeadModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default School;
