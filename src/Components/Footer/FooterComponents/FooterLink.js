import React from "react";

const FooterLink = ({ hrefLink, text }) => {
  return (
    <div style={{ marginBottom: "5px" }}>
      <a
        href={hrefLink}
        style={{ textDecoration: "none", color: "white", margin: "5px" }}
      >
        {text}
      </a>
    </div>
  );
};

export default FooterLink;
