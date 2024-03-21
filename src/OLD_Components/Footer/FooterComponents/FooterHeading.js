import React from "react";

const FooterHeading = ({ heading }) => {
  return (
    <div>
      <h2 style={{ color: "black", fontWeight: 700, marginBottom: "24px" }}>
        {heading}
      </h2>
    </div>
  );
};

export default FooterHeading;
