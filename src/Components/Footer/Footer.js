import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Image } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import FooterHeading from "./FooterComponents/FooterHeading";
import FooterLink from "./FooterComponents/FooterLink";
import FooterText from "./FooterComponents/FooterText";
import classes from "./Footer.module.css";
import { subscribeNewsletter } from "../Store/ApiCall";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const validateEmail = () => {
    // Email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!regex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateEmail();
    if (isValid) {
      console.log(email);
      const data = await subscribeNewsletter(email);
      console.log(data);
      if (data.statuscode === "200") {
        setEmail("");
        setEmailError("Subscribed Successfully");
      }
      // You can perform further actions like submitting the email to a server here
    }
  };
  return (
    <div className={styles.outerComponent}>
      <Image src="Images/Asserts/footer1.png" className={styles.leftMountain} />
      <Image
        src="Images/Asserts/footer2.png"
        className={styles.rightMountain}
      />
      <div className={styles.innerContainer}>
        <div className={styles.emailContainer}>
          <h1>
            Want to know more about innovartan offers & upcoming events ?
            <br />
            <h3 className={styles.dropEmailText}>DROP YOUR EMAIL</h3>
          </h1>

          <div className={styles.emailInputContainer}>
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
                value={email}
              />
              <Button
                variant="success"
                id="button-addon2"
                onClick={handleSubmit}
              >
                Subscribe Now
              </Button>
            </InputGroup>
            {emailError && (
              <div className={styles.errorMessage}>{emailError}</div>
            )}
          </div>
          <div className={styles.horizontalLine}></div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.row1}>
            <div className={classes.col1}>
              <FooterHeading heading={"Quick Links"} />
              <FooterLink hrefLink={"/contact"} text={"Contact us"} />
              <FooterLink hrefLink={"/term-of-use"} text={"Terms & Use"} />
              <FooterLink
                hrefLink={"/privacy-policy"}
                text={"Privacy Policy"}
              />
            </div>
            <div className={classes.col2}>
              <FooterHeading heading={"Get In Touch"} />
              <FooterText
                imgURL={"fa-solid fa-phone fa-lg"}
                text={"+91 9319888781"}
              />
              <FooterText
                imgURL={"fa-solid fa-phone fa-lg"}
                text={"+91 8130907972"}
              />
              <FooterText
                imgURL={"fa-regular fa-envelope fa-xl"}
                text={"info@innovartan.com"}
              />
              <FooterText
                imgURL={"fa-solid fa-location-dot fa-xl"}
                text={`H-151, Basement, GIPL Tower, Sector 63, Noida, Uttar Pradesh, 201301.`}
              />
            </div>
          </div>
          <div className={classes.row2}>
            <div className={classes.col1}>
              <FooterHeading heading={"Download App"} />
              <FooterLink
                hrefLink={
                  "/store"
                }
                imgURL={"fa-brands fa-google-play fa-lg"}
                text={"Inno Store"}
                type={"external"}
              />
              <FooterLink
                hrefLink={
                  "https://apps.apple.com/in/app/eduvartan/id6504485252"
                }
                text={"App Store"}
                type={"external"}
                imgURL={"fa-brands fa-app-store fa-lg"}
              />
            </div>
            <div className={classes.col2}>
              <FooterHeading heading={"Social Links"} />
              <FooterLink
                hrefLink={"https://www.facebook.com/innovartan/"}
                text={"Facebook"}
                type={"external"}
                imgURL={"fa-brands fa-facebook fa-lg"}
              />
              <FooterLink
                hrefLink={"https://in.linkedin.com/company/innovartan"}
                type={"external"}
                text={"LinkedIn"}
                imgURL={"fa-brands fa-linkedin fa-lg"}
              />
              <FooterLink
                hrefLink={"https://www.instagram.com/innovartan/"}
                type={"external"}
                text={"Instagram"}
                imgURL={"fa-brands fa-instagram fa-lg"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
