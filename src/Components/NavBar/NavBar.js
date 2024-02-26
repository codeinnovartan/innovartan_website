import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="Images/innovartan_Logo.png"
              width="200"
              height="35"
              className="d-inline-block align-top mt-3"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Innovartan
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to={"/home"}
                  href="/home"
                  active={location.pathname === "/home"}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/about-us"}
                  href="/about-us"
                  active={location.pathname === "/about-us"}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/our-services"}
                  href="/our-services"
                  active={location.pathname === "/our-services"}
                >
                  Our Services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/"}
                  href="/"
                  active={location.pathname === "/"}
                >
                  Our Clients
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/contact"}
                  href="/contact"
                  active={location.pathname === "/contact"}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
              <Button
                className={classes.GSButton}
                onClick={() => {
                  window.location.href = "https://app.innovartan.com/login";
                }}
              >
                Login
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {children}
    </>
  );
};

export default NavBar;
