import React from "react";
import classes from "./ServicesCard.module.css";

const ServicesCard = ({ logoUrl, text, logoALT }) => {
  return (
    <div className={classes.serviceCardContainer}>
      <img src={logoUrl} alt={logoALT} className={classes.serviceCardImage} />
      <p className={classes.cardText} >{text}</p>
    </div>
  );
};

export default ServicesCard;
