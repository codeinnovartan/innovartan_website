import React from "react";

const FooterText = ({ imgURL, text }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "5px",
      }}
    >
      <i className={imgURL} style={{ marginRight: "20px", color: "white" }}></i>
      {/* <h5 style={{ color: "white" }}>{text}</h5> */}
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        style={{ color: "white", fontSize: "1.2rem" }}
      />
    </div>
  );
};

export default FooterText;
