import React, { useRef, useState } from "react";
import classes from "./ContactUs.module.css";
import Footer from "../../Footer/Footer";
import { Form, Button } from "react-bootstrap";
import { sendContactUs } from "../../Store/ApiCall";
import CustomAlert from "../../Alert/CustomAlert";

const ContactUs = () => {
  const form = useRef();
  const mobileNumberRegex = /^\d{10}$/;

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [showAlert, setshowAlert] = useState("none");

  const handleInputChnage = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "number") {
      setMobileError(false);
    }
  };

  const handleSubmite = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else if (!mobileNumberRegex.test(formData.number)) {
      console.log("Mobile Number is not valid");
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setMobileError(true);
    } else {
      event.preventDefault();
      const data = await sendContactUs(formData);
      console.log(data.statuscode);
      if (data.statuscode === "200") {
        setshowAlert("block");
        setTimeout(() => {
          setshowAlert("none");
        }, 3000);
      } else {
        console.log("Data sending failed");
      }
    }
  };

  return (
    <div>
      <CustomAlert
        message={"Form Submitted"}
        type={"success"}
        display={showAlert}
      />
      <div className={classes.mainContainer}>
        <div className={classes.headingContainer}>
          <h1 style={{ textAlign: "" }}>
            <strong>
              <span style={{ color: "#0f4d9c" }}>Get In </span>
              <span style={{ color: "#ef6520" }}>Touch</span>
            </strong>
          </h1>
        </div>
        <div className={classes.outerBox}>
          <div className={classes.box1}>
            <img
              src="https://edvanz.com/wp-content/uploads/2023/12/contact-us.webp"
              alt="map"
              className={classes.image}
            ></img>
            <div className={classes.contactDetails}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0px 10px 20px 10px",
                }}
              >
                <i
                  className="fa-solid fa-phone fa-2xl"
                  style={{ marginRight: "20px", color: "#0f4d9c" }}
                ></i>
                <p className={classes.infoText} style={{ color: "#0f4d9c" }}>
                  +91 9319888781
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0px 10px 20px 10px",
                }}
              >
                <i
                  className="fa-solid fa-envelope fa-2xl"
                  style={{ marginRight: "20px", color: "#0f4d9c" }}
                ></i>
                <p className={classes.infoText} style={{ color: "#0f4d9c" }}>
                  info@innovartan.com
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0px 10px 20px 10px",
                }}
              >
                <i
                  className="fa-solid fa-house fa-2xl"
                  style={{ marginRight: "20px", color: "#0f4d9c" }}
                ></i>
                <p className={classes.infoText} style={{ color: "#0f4d9c" }}>
                  8th Floor, Riana Perito Sector 136,
                  <br /> Noida, 201304, UP
                </p>
              </div>
            </div>
          </div>
          <div className={classes.box2}>
            <h5 style={{ margin: "50px" }}>
              we are here for you! How can we Help?
            </h5>
            <div className={classes.formBox}>
              <Form
                noValidate
                validated={validated}
                style={{ width: "90%", margin: "20px 0px 20px 0px" }}
                action=""
                ref={form}
                onSubmit={handleSubmite}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Name :"
                    onChange={handleInputChnage}
                    autoComplete="name"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Enter Name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="number"
                    type="text"
                    placeholder="Mobile Number :"
                    onChange={handleInputChnage}
                    autoComplete="tel"
                    required
                    isInvalid={validated && mobileError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {mobileError &&
                      "Mobile number should be exactly 10 digits long."}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email id :"
                    onChange={handleInputChnage}
                    autoComplete="email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter email id.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="message"
                    as="textarea"
                    placeholder="Message :"
                    style={{ height: "100px" }}
                    onChange={handleInputChnage}
                    autoComplete="off"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#ef6520 ",
                    borderColor: "#ef6520",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
