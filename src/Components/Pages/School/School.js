import React from "react";
import HelpSchool from "./HelpSchool";
import TransformSchool from "./TransformSchool";
import WhyUs from "./WhyUs";

const School = () => {
  return (
    <div>
      <div className={"helpsSchool"}>
        <HelpSchool />
      </div>
      <div className={"transformSchool"}>
        <TransformSchool />
      </div>
      <div className={"whyUs"}>
        <WhyUs />
      </div>
    </div>
  );
};

export default School;
