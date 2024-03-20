import React from "react";

const CategoryIcon = ({ image, text, link }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <div
        style={{
          display: "flex",
          width: 85,
          height: 85,
          backgroundColor: "#785EFF",
          borderRadius: 50,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="category" />
      </div>
      <p style={{ fontSize: 14, marginTop: 20, fontWeight: 600 }}>{text}</p>
    </div>
  );
};

export default CategoryIcon;
