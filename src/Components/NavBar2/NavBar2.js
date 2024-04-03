import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import SearchComponent from "./SearchComponent";

const NavBar2 = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <div
        className="outer-container2"
        style={{
          backgroundImage: "url(Images/Asserts/schoolBg.png)",
        }}
      >
        <div className="info">
          <div style={{ display: "flex", paddingTop: 10 }}>
            <div style={{ marginRight: 10 }}>
              <i className="fa-solid fa-phone" style={{ color: "#555555" }}></i>
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
            <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
              <li onClick={handleClick}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={handleClick}>
                <a href="/">Blog</a>
              </li>
              <li onClick={handleClick}>
                <Link to="/contact">Contact</Link>
              </li>
              <Dropdown>
                <Dropdown.Toggle className="ourServices">
                  Our Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
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
                      style={{ textDecoration: "none", color: "black" }}
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
        <SearchComponent />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NavBar2;
