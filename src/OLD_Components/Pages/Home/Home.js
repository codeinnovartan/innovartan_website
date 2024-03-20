import React from "react";
import Footer from "../../Footer/Footer";
import classes from "./Home.module.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProblemsCard from "./HomeComponents/ProblemsCard";
import StackHolderCard from "./HomeComponents/StackHolderCard";
import HelpCard from "./HomeComponents/HelpCard";
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate();

  // const handlePhoneButtonClicked = () => {
  //   const phoneNumber = "+919319888781";
  //   window.location.href = `tel:${phoneNumber}`;
  // };
  return (
    <div>
      <div className={classes.section1}>
        <Image
          src="Images/homePage.png"
          className={classes.teacherImage}
        />
        <div className={classes.section1InnerContainer}>
          <h1>
            Empowering Schools, Enlightening <br />
            Students
          </h1>
          <div>
            <Link to="/contact" className={classes.link}>
              <Button
                variant="outline-warning"
                size="lg"
                className={classes.LinkButton}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.section2}>
        <h1>
          <strong>
            <span style={{ color: "#0f4d9c" }}>About </span>
            <span style={{ color: "#ef6520" }}>Innovartan</span>
          </strong>
        </h1>
        <div className={classes.aboutContainer}>
          <div className={classes.aboutInner}>
            <p>
              Innovartan is a company that aims to strengthen the teachers in
              schools and schools by itself. It provides training to teachers
              for Board exams, regular curriculum and for various competitive
              exams like IITJEE and NEET. Teachers are given training on their
              subjects on a class by class basis and students are given app with
              content so they can learn and practice on tests.
            </p>
            <Link
              to={"/about-us"}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Button
                variant="outline-warning"
                size="lg"
                className={classes.LinkButton}
              >
                Read More
              </Button>
            </Link>
          </div>
          <img src="Images/techerTeaching.png" alt="Teaching Png" />
        </div>
      </div>
      <div className={classes.section3}>
        <h1>
          <span style={{ color: "#0f4d9c" }}>Our </span>
          <span style={{ color: "#ef6520" }}>Moto</span>
        </h1>
        <div className={classes.motoContainer}>
          <img src="Images/moto.png" alt="" />
          <p>
            Our mission is to fill the GAP between school education and
            competitive needs through our product and services by capacity
            building of teachers.
          </p>
        </div>
      </div>
      <div className={classes.section4}>
        <h1 className={classes.headingContainer}>
          <span style={{ color: "#fff", marginRight: "10px" }}>
            Problems faced by
          </span>
          <span style={{ color: "#ef6520" }}>parents/students</span>
        </h1>
        <div className={classes.problemInner}>
          <ProblemsCard
            image={"Images/childThinking.png"}
            imageAlt={"Student"}
            text={
              "Forced to go to school and then to coaching after school hours"
            }
          />
          <ProblemsCard
            image={"Images/childTime.png"}
            imageAlt={"Student"}
            text={"No time for self study"}
          />
          <ProblemsCard
            image={"Images/ChildAbc.png"}
            imageAlt={"Student"}
            text={
              "Study two topics at the same time – one in school & another in coaching"
            }
          />
          <ProblemsCard
            image={"Images/pigyBank.png"}
            imageAlt={"Student"}
            text={"Spent time & money traveling to coaching after school hours"}
          />
          <ProblemsCard
            image={"Images/spendMoney.png"}
            imageAlt={"Student"}
            text={"Extra cost borne by parents"}
          />
        </div>
      </div>
      <div className={classes.section5}>
        <div className={classes.headingContainer}>
          <h1 style={{ color: "#104D9C", marginRight: "10px" }}>
            Advantages for{" "}
          </h1>
          <h1 style={{ color: "#EF6521" }}>different stakeholders</h1>
        </div>
        <div className={classes.stackContainer}>
          <StackHolderCard img={"Images/school.png"} imgAlt={"School"} />
          <StackHolderCard img={"Images/teacher.png"} imgAlt={"Teacher"} />
          <StackHolderCard img={"Images/student.png"} imgAlt={"Students"} />
          <StackHolderCard img={"Images/parent.png"} imgAlt={"Parents"} />
        </div>
      </div>
      <div className={classes.section6}>
        <div className={classes.headingContainer}>
          <h1 style={{ color: "#104D9C", marginRight: "10px" }}>How can we</h1>
          <h1 style={{ color: "#EF6521" }}>help you?</h1>
        </div>
        <div>
          <HelpCard
            img={
              "https://innovartan.com/wp-content/uploads/2023/09/pointed-finger.png"
            }
            imgAlt={"Finger Pointer"}
            text={
              "Teachers are trained before they teach the students with content for regular school and competitive exams"
            }
          />
          <HelpCard
            img={
              "https://innovartan.com/wp-content/uploads/2023/09/pointed-finger.png"
            }
            imgAlt={"Finger Pointer"}
            text={"Separate content for teachers and students"}
          />
          <HelpCard
            img={
              "https://innovartan.com/wp-content/uploads/2023/09/pointed-finger.png"
            }
            imgAlt={"Finger Pointer"}
            text={"Building inhouse program for each school"}
          />
          <HelpCard
            img={
              "https://innovartan.com/wp-content/uploads/2023/09/pointed-finger.png"
            }
            imgAlt={"Finger Pointer"}
            text={
              "Testing and analysis of each student through AI enabled platform"
            }
          />
          <HelpCard
            img={
              "https://innovartan.com/wp-content/uploads/2023/09/pointed-finger.png"
            }
            imgAlt={"Finger Pointer"}
            text={
              "Trained teacher placement in ill-equipped schools through our inhouse training program"
            }
          />
        </div>
      </div>
      <div className={classes.section7}>
        <div className={classes.headingContainer}>
          <h1 style={{ color: "#FFF", marginRight: "10px" }}>Connect</h1>
          <h1 style={{ color: "#EF6521" }}>with us</h1>
        </div>
        <Link to="/contact" className={classes.link}>
          <Button
            variant="outline-warning"
            size="lg"
            className={classes.LinkButton}
            style={{ marginLeft: "-40px" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Contact Us
          </Button>
        </Link>
      </div>
      <div className={classes.section8}>
        <div className={classes.headingContainer}>
          <h1 style={{ color: "#0E4D9C", marginRight: "10px" }}>
            Connect with
          </h1>
          <h1 style={{ color: "#EF6521" }}>our team</h1>
        </div>
        <Button
          className={classes.LinkButton}
          style={{ height: "50px", fontSize: "20px" }}
          // onClick={handlePhoneButtonClicked}
        >
          Call:+91 9319888781
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
