import React from "react";
import { useState, useEffect } from "react";

const FooterText = ({ imgURL, text }) => {
  const [fontSize, setFontSize] = useState("1.2rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setFontSize("0.9rem");
      } else {
        setFontSize("1.0rem");
      }
    };

    handleResize(); // Initial call to set font size based on initial width

    window.addEventListener("resize", handleResize); // Event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []); // Empty dependency array en
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "10px",
      }}
    >
      <i
        className={imgURL}
        style={{ marginRight: "20px", color: "white", marginTop: "13px" }}
      ></i>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        style={{ color: "white", fontSize: fontSize }}
      />
    </div>
  );
};

export default FooterText;
