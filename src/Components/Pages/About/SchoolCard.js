import React from "react";
import classes from "./SchoolCard.module.css";
import { Button } from "react-bootstrap";

const SchoolCard = ({ data }) => {
  return (
    <div className={classes.SCcontainer}>
      <img
        src={data.school_image}
        alt="schoolImage"
        className={classes.schoolImage}
      />
      <div className={classes.infoContainer}>
        <h3>{data.school_name}</h3>
        <p>{data.description}</p>
        <Button
          className={classes.readButton}
          onClick={() => {
            window.open(`${data.web_link}`, "_self");
          }}
        >
          Read More{" "}
          <i
            className="fa-regular fa-circle-right fa-lg"
            style={{ marginLeft: "6%" }}
          ></i>
        </Button>
      </div>
    </div>
  );
};

export default SchoolCard;
