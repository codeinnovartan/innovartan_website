import React from "react";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import Stats from "../Home/StatsSection";
import Footer from "../../Footer/Footer";
import ScrollTrigger from "react-scroll-trigger";
import CommonNavbar from "../../CommonNavbar/CommonNavbar";

const ContactUs = () => {
  const [viewState, setViewState] = React.useState(false);
  return (
    <>
      {viewState && <CommonNavbar />}
      <div className={"GetInTouch"}>
        <GetInTouch />
      </div>
      <div className={"ContactForm"}>
        <ContactForm />
      </div>
      <ScrollTrigger
        onEnter={() => setViewState(true)}
        onExit={() => setViewState(false)}
      >
        <div className={"Stats"}>
          <Stats />
        </div>
        <div className={"Footer"}>
          <Footer />
        </div>
      </ScrollTrigger>
    </>
  );
};

export default ContactUs;
