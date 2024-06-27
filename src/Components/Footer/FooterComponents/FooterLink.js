import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ hrefLink, text, type, imgURL }) => {
  if (type === "external") {
    return (
      // <div style={{ marginBottom: "25px" }}>
      //   <a
      //     href={hrefLink}
      //     style={{ textDecoration: "none", color: "white", margin: "5px" }}
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     {text}
      //   </a>
      // </div>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.open(hrefLink, "_blank");
        }}
      >
        <i
          className={imgURL}
          style={{ marginRight: "15px", color: "white", marginTop: "15px" }}
        ></i>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          style={{ color: "white", fontSize: "1.2rem" }}
        />
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "20px", marginLeft: "3px" }}>
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
