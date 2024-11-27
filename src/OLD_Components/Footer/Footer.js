import React from "react";
import classes from "./Footer.module.css";
import FooterHeading from "./FooterComponents/FooterHeading";
import FooterLink from "./FooterComponents/FooterLink";
import FooterText from "./FooterComponents/FooterText";

const Footer = () => {
  return (
    <div>
      <div className={classes.FooterContainer}>
        <div className={classes.row1}>
          <div className={classes.col1}>
            <FooterHeading heading={"Quick Links"} />
            <FooterLink
              // type={"external"}
              hrefLink={"/home"}
              text={"Home"}
            />
            <FooterLink hrefLink={"/about-us"} text={"About us"} />
            <FooterLink hrefLink={"/our-services"} text={"Our Services"} />
            <FooterLink hrefLink={"/contact"} text={"Contact us"} />
            <FooterLink
              type={"external"}
              hrefLink={"https://app.innovartan.com/login"}
              text={"Login"}
            />
            <FooterLink hrefLink={"/term-of-use"} text={"Terms & Use"} />
            <FooterLink hrefLink={"/privacy-policy"} text={"Privacy Policy"} />
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
          <div className={classes.col3}>
            <FooterHeading heading={"Download App"} />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Play Store Link"
              style={{ width: "220px", height: "60px", marginBottom: "30px" }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt="App Store Link"
              style={{ width: "220px", height: "60px" }}
            />
          </div>
          <div className={classes.col4}>
            <FooterHeading heading={"Social Links"} />
            <img
              onClick={() =>
                window.open(
                  "https://www.facebook.com/innovartan",
                  "_blank"
                )
              }
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt="Facebook Link"
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            />
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/innovartan/",
                  "_blank"
                )
              }
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt="Linked Link"
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            />
            <img
              onClick={() =>
                window.open("https://www.instagram.com/innovartan/", "_blank")
              }
              src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png"
              alt="Instagram Link"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
