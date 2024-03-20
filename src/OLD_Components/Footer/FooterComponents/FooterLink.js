import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ hrefLink, text, type }) => {
  if (type === "external") {
    return (
      <div style={{ marginBottom: "5px" }}>
        <a
          href={hrefLink}
          style={{ textDecoration: "none", color: "white", margin: "5px" }}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "5px", marginLeft: "3px" }}>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={hrefLink}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {text}
        </Link>
      </div>
    );
  }
};

export default FooterLink;
