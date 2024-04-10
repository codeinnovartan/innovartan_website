import React from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "../Pages/Contact/ContactForm";

const LeadModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        { window.innerWidth < 450  && <Modal.Header closeButton></Modal.Header>}
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LeadModal;
