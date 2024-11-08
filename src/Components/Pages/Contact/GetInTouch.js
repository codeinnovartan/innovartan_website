import React from "react";
import styles from "./GetInTouch.module.css";

function ContactInfo({ icon, title, description }) {
  return (
    <div className={styles.contactInfo}>
      <img src={icon} alt={title} className={styles.contactIcon} />
      <div className={styles.contactDetails}>
        <div className={styles.contactTitle1}>{title}</div>
        <div className={styles.contactDescription}>{description}</div>
      </div>
    </div>
  );
}

const contactData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d362fb2e191304b7dee1786f653c20f2be10e9d758851c38b1cf82dc356a0df?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Office Address",
    description: "H-151, Basement, GIPL Tower, Sector 63, Noida, Uttar Pradesh, 201301.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/451d78e92779cc9fcc673e967866919aebdfdb2abbab0b58b92115c0fa8f49d4?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Phone Number",
    description: "+91 8130907972",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab979ad0603d95949b0902f90c01d1db52f877b50858e920532ad69c63444f8b?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Send email",
    description: "info@innovartan.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3169d0e0d4b8867e1969797de7fe6a464b888e0f892f5ae486917d0eede419c9?apiKey=65c3b0a390fd4311b72fcd91fc18e875&",
    title: "Our Website",
    description: "www.innovartan.com",
  },
];
const GetInTouch = () => {
  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactSubtitle}>Get in touch with us</h2>
          <h1 className={styles.contactTitle}>
            We're Always Eager To Hear From You!
          </h1>
          <div className={styles.contactContent}>
            <div
              className={styles.contactImageContainer}
              onClick={() => {
                window.open("https://maps.app.goo.gl/HxRyxRnNo4GGUyAdA", "_blank");
              }}
            >
              <img
                src="Images/Asserts/map1.png"
                alt="Contact us"
                className={styles.contactImage}
                // onClick={() => {
                //   window.location.href =
                //     "https://maps.app.goo.gl/HxRyxRnNo4GGUyAdA";
                // }}
              />
            </div>
            <div className={styles.contactInfoContainer}>
              {contactData.map((data, index) => (
                <ContactInfo
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
