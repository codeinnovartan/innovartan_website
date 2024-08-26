import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./CommonNavbar.module.css";

const CommonNavbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.outerNavbar}>
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
            <Link
              to="/"
              onClick={() => {
                handleClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/about"
              onClick={() => {
                handleClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About
            </Link>
          </li>
          {/* <li onClick={handleClick}>
                  <a href="/">Blog</a>
                </li> */}
          <li onClick={handleClick}>
            <Link
              to="/contact"
              onClick={() => {
                handleClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact
            </Link>
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
          <li onClick={handleClick}>
            <Link to="/channel-program">Channel Partner</Link>
          </li>
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
  );
};

export default CommonNavbar;
