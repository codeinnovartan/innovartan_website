import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button, Col, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmite = () => {
    console.log(formData);
  };

  return (
    <>
      <div className={styles.contactForm}>
        <h2 className={styles.formSubtitle}>Get in touch with Contact us</h2>
        <h1 className={styles.formTitle}>
          Fill The Form Below So We Can Get To Know <br /> You And Your Needs
          Better.
        </h1>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  className={styles.inputField}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-md-4">
              <Form.Group controlId="formBasicNumber">
                <Form.Control
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                  placeholder="Your Email"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-md-4">
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  className={styles.inputField}
                  placeholder="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBasicNumber">
                <Form.Control
                  type="text"
                  className={styles.inputField}
                  placeholder="Your Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
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
            />
          </Form.Group>
          <Button onClick={handleSubmite} variant='outline-warning' className={styles.submitButton}>
            Send Your Message
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
