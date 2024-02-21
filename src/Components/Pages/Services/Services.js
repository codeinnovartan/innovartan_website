import React from "react";
import Footer from "../../Footer/Footer";
import classes from "./Services.module.css";
import ServicesCard from "./ServicesComponents/ServicesCard";

const Services = () => {
  return (
    <div>
      <div>
        <div className={classes.headingContainer}>
          <p className={classes.headingText}>Services</p>
        </div>
        <div className={classes.serviceCardContainer}>
          <ServicesCard
            logoALT={"Teaching Logo"}
            logoUrl={
              "https://innovartan.com/wp-content/uploads/2023/06/rsw_365h_365cg_true.png"
            }
            text={"Teaching training & monitoring"}
          />
          <ServicesCard
            logoALT={"Building Logo"}
            logoUrl={
              "https://innovartan.com/wp-content/uploads/2023/06/rsw_365h_365cg_true-1.png"
            }
            text={"Building in-house program for each school"}
          />
          <ServicesCard
            logoALT={"24x7 Logo"}
            logoUrl={
              "https://innovartan.com/wp-content/uploads/2023/06/rsw_365h_365cg_true-2.png"
            }
            text={"24×7 doubt support for Teachers & Students"}
          />
          <ServicesCard
            logoALT={"Testing Logo"}
            logoUrl={
              "	https://innovartan.com/wp-content/uploads/2023/06/rsw_365h_365cg_true-3.png"
            }
            text={
              "Testing & analysis of every student through AI enabled platform"
            }
          />
          <ServicesCard
            logoALT={"Seprate Content Logo"}
            logoUrl={
              "https://innovartan.com/wp-content/uploads/2023/06/rsw_365h_365cg_true-4.png"
            }
            text={"Separate content for Teachers & Students"}
          />
          <ServicesCard
            logoALT={"Trained Teacher Logo"}
            logoUrl={
              "https://innovartan.com/wp-content/uploads/2023/06/rsw_365h_365cg_true-5.png"
            }
            text={"Trained teacher placement in ill-equipped schools"}
          />
        </div>
        <div className={classes.helpContainer}>
          <h1 style={{ textAlign: "center" }}>
            <strong>
              <span style={{ color: "#ffffff" }}>How can we </span>
              <span style={{ color: "#ef6520" }}>help you?</span>
            </strong>
          </h1>
          <ul>
            <li className={classes.listItem}>
              Forced to go to school and then to coaching after school hours
            </li>
            <li className={classes.listItem}>No time for self study</li>
            <li className={classes.listItem}>
              Study two topics at the same time – one in school in another in
              coaching in the same subject
            </li>
            <li className={classes.listItem}>Extra cost borne by parents</li>
            <li className={classes.listItem}>
              Spent time and money travelling to coaching after school hours
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
