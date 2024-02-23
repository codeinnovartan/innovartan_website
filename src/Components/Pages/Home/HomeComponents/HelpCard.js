import React from "react";
import classes from "./HelpCard.module.css";

const HelpCard = ({ img, imgAlt, text }) => {
  return (
    <div className={classes.outerContainer}>
      <img src={img} alt={imgAlt} />
      <h5>{text}</h5>
    </div>
  );
};

export default HelpCard;
