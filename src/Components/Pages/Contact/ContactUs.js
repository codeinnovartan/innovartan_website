import React from "react";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import Stats from "../Home/StatsSection";
import Footer from "../../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div className={"GetInTouch"}>
        <GetInTouch />
      </div>
      <div className={"ContactForm"}>
        <ContactForm />
      </div>
      <div className={"Stats"}>
        <Stats />
      </div>
      <div className={"Footer"}>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
