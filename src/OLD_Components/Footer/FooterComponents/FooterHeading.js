import React from "react";

const FooterHeading = ({ heading }) => {
  return (
    <div>
      <h2 style={{ color: "white", fontWeight: "bold", marginBottom: "25px" }}>
        {heading}
      </h2>
    </div>
  );
};

export default FooterHeading;
