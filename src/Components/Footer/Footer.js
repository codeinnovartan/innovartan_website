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

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const hanldeSubmite = () => {
    console.log(email);
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
          <h1>Want Us To Email You About Special Offers And Updates?</h1>
          <div className={styles.emailInputContainer}>
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
              <Button
                variant="success"
                id="button-addon2"
                onClick={hanldeSubmite}
              >
                Subscribe Now
              </Button>
            </InputGroup>
          </div>
          <div className={styles.horizontalLine}></div>
        </div>
        <div className={classes.FooterContainer}>
          <div className={classes.row1}>
            <div className={classes.col1}>
              <FooterHeading heading={"Quick Links"} />
              <FooterLink hrefLink={"/contact"} text={"Contact us"} />
              <FooterLink hrefLink={"/"} text={"Terms & Use"} />
              <FooterLink hrefLink={"/"} text={"Privacy Policy"} />
            </div>
            <div className={classes.col2}>
              <FooterHeading heading={"Get In Touch"} />
              <FooterText
                imgURL={"fa-solid fa-phone fa-lg"}
                text={"+91 9319888781"}
              />
              <FooterText
                imgURL={"fa-solid fa-phone fa-lg"}
                text={"+91 9319888782"}
              />
              <FooterText
                imgURL={"fa-regular fa-envelope fa-xl"}
                text={"info@innovartan.com"}
              />
              <FooterText
                imgURL={"fa-solid fa-location-dot fa-xl"}
                text={`8th Floor, Riana Perito <br>
               Sector 136, Noida, 201304, UP`}
              />
            </div>
          </div>
          <div className={classes.row2}>
            <div className={classes.col1}>
              <FooterHeading heading={"Download App"} />
              <FooterLink hrefLink={"/"} text={"Play Store"} />
              <FooterLink hrefLink={"/"} text={"App Store"} />
            </div>
            <div className={classes.col2}>
              <FooterHeading heading={"Social Links"} />
              <FooterLink
                hrefLink={"https://www.facebook.com/innovartanlearning/"}
                text={"Facebook"}
                type={"external"}
              />
              <FooterLink
                hrefLink={"https://in.linkedin.com/company/innovartan"}
                type={"external"}
                text={"LinkedIn"}
              />
              <FooterLink
                hrefLink={"https://www.instagram.com/innovartan/"}
                type={"external"}
                text={"Instagram"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
