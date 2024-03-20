import React from "react";
import { Alert } from "react-bootstrap";

const customAlert = ({ message, type, display }) => {
  return (
    <div style={{ display: display }}>
      <Alert variant={type} style={{ textAlign: "center" }}>
        {message}
      </Alert>
      ;
    </div>
  );
};

export default customAlert;
