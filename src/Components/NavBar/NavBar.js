import React, { useState, useEffect } from "react";
import "./Navbbar.css";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = ({ children, location, heading, subHeading }) => {
  const [clicked, setClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImage = [
    "url(Images/Asserts/navbar-student.png)",
    "url(Images/Asserts/navbar-teacher.png)",
    "url(Images/Asserts/navbar-institute.png)",
  ];
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === backgroundImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div>
        <div
          className="outer-container"
          style={{
            backgroundImage: `${
              window.innerWidth < 509
                ? "url(Images/Asserts/navbar-mobile.png)"
                : backgroundImage[imageIndex]
            }`,
          }}
        >
          {/* <div className="info">
            <div style={{ display: "flex", paddingTop: 10 }}>
              <div style={{ marginRight: 10 }}>
                <i
                  className="fa-solid fa-phone"
                  style={{ color: "#555555" }}
                ></i>
              </div>
              <p style={{ color: "#555555" }}>+91 9319888781</p>
            </div>
            <div className="infoInner">
              <div style={{ display: "flex", paddingTop: 10 }}>
                <div style={{ marginRight: 10 }}>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#555555" }}
                  ></i>
                </div>
                <p style={{ color: "#555555" }}>
                H-151, Basement, GIPL Tower, Sector 63, Noida, Uttar Pradesh, 201301.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "25%",
                  paddingTop: 10,
                }}
              >
                <p style={{ color: "#555555" }}>Find us on :</p>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <i
                      className="fa-brands fa-facebook-f"
                      style={{ color: "#F16126" }}
                    ></i>
                  </div>
                  <div style={{ marginRight: 10 }}>
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#F16126" }}
                    ></i>
                  </div>
                  <div>
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#F16126" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="outerNavbar">
            <a href="/">
              <img
                src="Images/Asserts/innovartan_Logo.png"
                alt="Innovart Logo"
                width="200"
                height="35"
                className="d-inline-block align-top mt-3"
              />
            </a>
            <div>
              <ul
                id="navbar"
                className={clicked ? "#navbar active" : "#navbar"}
              >
                <li onClick={handleClick}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={handleClick}>
                  <Link to="/about">About</Link>
                </li>
                {/* <li onClick={handleClick}>
                  <a href="/">Blog</a>
                </li> */}
                <li onClick={handleClick}>
                  <Link to="/contact">Contact</Link>
                </li>
                <Dropdown className="navbarDropdown">
                  <Dropdown.Toggle className="ourServices">
                    Our Services
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        to={"/school"}
                        onClick={() => {
                          handleClick();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        For School
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/teacher"}
                        onClick={() => {
                          handleClick();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        For Teachers
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          display: "block",
                        }}
                        to={"/student"}
                        onClick={() => {
                          handleClick();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        For Students/Parents
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <li onClick={handleClick}>
                  <Link to="/channel-program">Channel Partner</Link>
                </li> */}
                <Button
                  className="loginButton"
                  onClick={() => {
                    window.location.href = "https://app.innovartan.com";
                  }}
                >
                  Log In
                </Button>
              </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
              <i
                id="bar"
                className={clicked ? "fas fa-times" : "fas fa-bars"}
                style={{ color: "#000", paddingTop: 15 }}
              ></i>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomNavbar;
