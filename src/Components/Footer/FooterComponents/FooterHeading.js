import React from "react";

const FooterHeading = ({ heading }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2
        style={{
          color: "white",
          fontWeight: "700",
          marginBottom: "15px",
          fontSize: "24px",
        }}
      >
        {heading}
      </h2>
      <div
        style={{
          width: "20%",
          height: "2px",
          backgroundColor: "#26C976",
          marginBottom: "25px",
        }}
      ></div>
    </div>
  );
};

export default FooterHeading;
