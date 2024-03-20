import React from "react";
import Footer from "../../Footer/Footer";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div className={classes.headingContainer}>
          <p className={classes.headingText}>About Us</p>
        </div>
        <div className={classes.detailContainer}>
          <div className={classes.detailOuterContainer}>
            <p className={classes.detailText}>
              Innovartan is a company that aims to strengthen the teachers in
              schools and schools by itself. It provides training to teachers
              for Board exams, regular curriculum and for various competitive
              exams like IITJEE and NEET. Teachers are given training on their
              subjects on a class by class basis and students are given app with
              content so they can learn and practice on tests. The school gets
              their own custom app by name of school. Students learn from the
              same teacher for their regular school curriculum as well as for
              competitive exams.
            </p>
            <img
              className={classes.studentTeacherimage}
              src="Images/techerTeaching.png"
              alt="student-teact-phot"
            />
          </div>
          <h1 style={{}}>
            <strong>
              <span style={{ color: "#0f4d9c" }}>Our </span>
              <span style={{ color: "#ef6520" }}>Moto</span>
            </strong>
          </h1>
          <div className={classes.detailOuterContainer1}>
            <img
              className={classes.arrowImage}
              src="Images/moto.png"
              alt="Arrow-imag"
            />
            <p className={classes.detailText1}>
              Our mission is to fill the GAP between school education and
              competitive needs through our product and services by capacity
              building of teachers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
