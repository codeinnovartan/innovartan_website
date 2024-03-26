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
      {location !== "outside" ? (
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
            <div className="info">
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
                    8th Floor, Riana Perito, Sector 136, Noida, 201304, UP
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
            </div>
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
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <Dropdown>
                    <Dropdown.Toggle className="ourServices">
                      Our Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/">For Schools</Dropdown.Item>
                      <Dropdown.Item href="/">For Teachers</Dropdown.Item>
                      <Dropdown.Item href="/">
                        For Students/Parents
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

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
      ) : (
        <div>
          <div
            className="outer-container1"
            style={{
              backgroundImage: "url(Images/Asserts/navbar-student3.png)",
            }}
          >
            <div className="info">
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
                    8th Floor, Riana Perito, Sector 136, Noida, 201304, UP
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
            </div>
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
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <Dropdown>
                    <Dropdown.Toggle className="ourServices">
                      Our Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/">For Schools</Dropdown.Item>
                      <Dropdown.Item href="/">For Teachers</Dropdown.Item>
                      <Dropdown.Item href="/">
                        For Students/Parents
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

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
            <h2>{heading}</h2>
            <p>{subHeading}</p>
          </div>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default CustomNavbar;
