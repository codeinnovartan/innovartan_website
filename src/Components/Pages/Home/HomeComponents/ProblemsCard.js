import React from "react";
import classes from "./ProblemsCard.module.css";

const ProblemsCard = ({ image, imageAlt, text }) => {
  return (
    <div className={classes.outerContainer}>
      <img src={image} alt={imageAlt} />
      <p>{text}</p>
    </div>
  );
};

export default ProblemsCard;
