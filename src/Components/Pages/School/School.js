import React from "react";
import HelpSchool from "./HelpSchool";
import TransformSchool from "./TransformSchool";

const School = () => {
  return (
    <div>
      <div className={"helpsSchool"}>
        <HelpSchool />
      </div>
      <div className={"transformSchool"}>
        <TransformSchool />
      </div>
    </div>
  );
};

export default School;
