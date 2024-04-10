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

const School = () => {
  const [viewState, setViewState] = React.useState(false);
  return (
    <div>
      {viewState && <CommonNavbar />}
      <div className={"helpsSchool"}>
        <HelpSchool />
      </div>
      <div className={"transformSchool"}>
        <TransformSchool />
      </div>
      <ScrollTrigger
        onEnter={() => setViewState(true)}
        onExit={() => setViewState(false)}
      >
      <div className={"whyUs"}>
        <WhyUs />
      </div>
      <div className={"getEverything"}>
        <GetEverything />
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
      </ScrollTrigger>
    </div>
  );
};

export default School;
