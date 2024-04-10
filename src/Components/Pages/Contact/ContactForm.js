// import React, { useState } from "react";
// import styles from "./ContactForm.module.css";
// import { Button, Col, Form } from "react-bootstrap";
// import { Row } from "react-bootstrap";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmite = () => {
//     console.log(formData);
//   };

//   return (
//     <>
//       <div className={styles.contactForm}>
//         <h2 className={styles.formSubtitle}>Get in touch with Contact us</h2>
//         <h1 className={styles.formTitle}>
//           Fill The Form Below So We Can Get To Know <br /> You And Your Needs
//           Better.
//         </h1>
//         <Form>
//           <Row>
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   className={styles.inputField}
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6} className="mb-md-4">
//               <Form.Group controlId="formBasicNumber">
//                 <Form.Control
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={styles.inputField}
//                   placeholder="Your Email"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={6} className="mb-md-4">
//               <Form.Group controlId="formBasicName">
//                 <Form.Control
//                   type="text"
//                   className={styles.inputField}
//                   placeholder="Mobile Number"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="formBasicNumber">
//                 <Form.Control
//                   type="text"
//                   className={styles.inputField}
//                   placeholder="Your Subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Form.Group controlId="formBasicNumber">
//             <Form.Control
//               as="textarea"
//               rows={10}
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Button onClick={handleSubmite} variant='outline-warning' className={styles.submitButton}>
//             Send Your Message
//           </Button>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { sendContactUs } from "../../Store/ApiCall";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    // Validation rules
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
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmite = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const isValid = validateForm();
    if (isValid) {
      console.log(formData);
      const response = await sendContactUs(formData);
      console.log(response);
      // You can perform further actions like submitting the form data to a server here
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.formSubtitle}>Get in touch with Contact us</h2>
      <h1 className={styles.formTitle}>
        Fill The Form Below So We Can Get To Know <br /> You And Your Needs
        Better.
      </h1>
      <Form onSubmit={handleSubmite}>
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
        </Form.Group>
        <Button
          type="submit"
          variant="outline-warning"
          className={styles.submitButton}
        >
          Send Your Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
