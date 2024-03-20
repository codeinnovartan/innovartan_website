import React from "react";
import classes from "./StackHoldeCard.module.css";

const StackHolderCard = ({ img, imgAlt }) => {
  return (
    <div className={classes.outContainer}>
      <img src={img} alt={imgAlt} />
      <h5
        style={{
          alignSelf: "center",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {imgAlt}
      </h5>
    </div>
  );
};

export default StackHolderCard;
