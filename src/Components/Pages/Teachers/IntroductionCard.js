import React from "react";
import { Image } from "react-bootstrap";

const IntroductionCard = ({ image, heading, para }) => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        padding: "20px",
        width: "320px",
        height: "150px",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "50px",
      }}
    >
      <Image
        src={image}
        style={{ width: "70px", height: "70px", marginRight: "20px" }}
      />
      <div>
        <h1 style={{ fontSize: "16px", fontWeight: 600 }}>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default IntroductionCard;
