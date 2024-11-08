import React, { useState, useRef } from "react";
import styles from "./ContactForm.module.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { sendContactUs } from "../../Store/ApiCall";
import { set } from "react-ga";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formNotSubmitted, setFormNotSubmitted] = useState(false);
  const formRef = useRef(null); // Create a ref for the form element

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmite = async (e) => {
    setFormNotSubmitted(false);
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setFormSubmitting(true);
      console.log(formData);
      const response = await sendContactUs(formData);
      console.log(response);
      if (response.statuscode === "200") {
        emailjs
          .sendForm(
            "service_umf6b9d", // Your service ID
            "template_97n4wig", // Your template ID
            formRef.current, // Pass the form reference
            "nAWs11i_i9eSe5baV" // Your public key
          )
          .then(
            () => {
              setFormSubmitted(true);
              setFormSubmitting(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            },
            (error) => {
              setFormNotSubmitted(true);
            }
          );
      }
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.formSubtitle}>Get in touch with Contact us</h2>
      <h1 className={styles.formTitle}>
        Fill The Form Below So We Can Get To Know <br /> You And Your Needs
        Better.
      </h1>
      <Form ref={formRef} onSubmit={handleSubmite}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                className={`${styles.inputField} ${
                  errors.name && styles.error
                }`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className={styles.errorMessage}>{errors.name}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6} className="mb-md-4">
            <Form.Group controlId="formBasicNumber">
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.inputField} ${
                  errors.email && styles.error
                }`}
                placeholder="Your Email"
              />
              {errors.email && (
                <div className={styles.errorMessage}>{errors.email}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-md-4">
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                className={`${styles.inputField} ${
                  errors.phone && styles.error
                }`}
                placeholder="Mobile Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
              />
              {errors.phone && (
                <div className={styles.errorMessage}>{errors.phone}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicNumber">
              <Form.Control
                type="text"
                className={`${styles.inputField} ${
                  errors.subject && styles.error
                }`}
                placeholder="Your Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <div className={styles.errorMessage}>{errors.subject}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicNumber">
          <Form.Control
            as="textarea"
            rows={10}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && (
            <div className={styles.errorMessage}>{errors.message}</div>
          )}
        </Form.Group>
        <Button
          type="submit"
          variant="outline-warning"
          className={styles.submitButton}
          disabled={formSubmitting}
        >
          {!formSubmitting ? "Send Your Message" : "Submitting Your Message"}
        </Button>
        {formSubmitted && (
          <div className={styles.successMessage}>
            Your message has been sent successfully
          </div>
        )}
        {formNotSubmitted && (
          <div className={styles.errorMessage}>
            Your message has not been sent, please try again
          </div>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
