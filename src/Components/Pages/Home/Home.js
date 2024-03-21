import React from "react";
import styles from "./Home.module.css";
import { Image } from "react-bootstrap";
import CategoryIcon from "./CategoryIcon";
import CourseSwiper from "./CourseSwiper";
import AboutCard from "./AboutCard";
import EducatorSwiper from "./EducatorSwiper";
// import BlogSwiper from "./BlogSwiper";
import StatsSection from "./StatsSection";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.schoolContainer}>
        <Image src="Images/Asserts/school2.png" className={styles.schoolLogo} />
        <Image src="Images/Asserts/school4.png" className={styles.schoolLogo} />
        <Image src="Images/Asserts/school5.png" className={styles.schoolLogo} />
        <Image src="Images/Asserts/school6.png" className={styles.schoolLogo} />
        <Image src="Images/Asserts/school1.png" className={styles.schoolLogo} />
        <Image src="Images/Asserts/school3.png" className={styles.schoolLogo} />
      </div>
      <div className={styles.popularCategory}>
        <p
          style={{
            fontSize: "20px",
            letterSpacing: 5,
            fontWeight: 500,
            color: "#F16126",
          }}
        >
          POPULAR CATEGORY
        </p>
        <h2>Build Bridges to a Knowledgeable & Inclusive Future</h2>
        <p className={styles.popularCategorytext}>
          Innovartan is on a mission to redefine education. We believe that
          knowledge is the cornerstone of progress and that every individual
          deserves access to high-quality learning opportunities. Our commitment
          lies in empowering every stakeholder within the educational ecosystem
          with cutting-edge learning solutions that inspire, engage, and
          transform.
        </p>
        <button className={styles.popularCategoryButton}>Know More</button>
        <div className={styles.categoryIconContainer}>
          <CategoryIcon
            image={"Images/Asserts/student.png"}
            text={"For Students "}
          />
          <CategoryIcon
            image={"Images/Asserts/teacher.png"}
            text={"For Teachers"}
          />
          <CategoryIcon
            image={"Images/Asserts/school.png"}
            text={"For Schools"}
          />
        </div>
      </div>
      <div className={styles.backToSchool}>
        <div className={styles.backToSchooldiv1}>
          <Image
            src="Images/Asserts/bts1.png"
            className={styles.backToSchooldiv1image1}
          />
          <Image
            src="Images/Asserts/bts2.png"
            className={styles.backToSchooldiv1image2}
          />
        </div>
        <div className={styles.backToSchooldiv2}>
          <p
            style={{
              fontSize: 20,
              letterSpacing: 5,
              color: "#F16126",
            }}
          >
            THE INNOVARTAN SOLUTION
          </p>
          <h1>Back To School</h1>
          <p className={styles.backToSchooldiv2text}>
            Innovartan is committed to revolutionizing education through
            innovative solutions. Our Reverse Theory –
            <span style={{ fontWeight: 700 }}>Back to School</span> approach
            aims to create supportive and nurturing environments where every
            student can thrive.
          </p>
          <p className={styles.backToSchooldiv2text}>
            By empowering schools to become centers of learning excellence, we
            elevate the role of educators through comprehensive professional
            development programs, eliminating the need for costly external
            coaching classes.
          </p>
          <p className={styles.backToSchooldiv2text}>
            Additionally, we equip educators with the skills needed to meet the
            demands of modern learners, fostering communities of practice and
            leveraging technology to enhance learning. With Innovartan,
            educators are prepared to deliver personalized, high-quality
            education that equips students for success in the rapidly evolving
            world..
          </p>
          <button className={styles.backToSchoolButton}>Know More</button>
        </div>
      </div>
      <div className={styles.coursesContainer}>
        <p
          style={{
            fontSize: 20,
            letterSpacing: 5,
            color: "#F16126",
          }}
        >
          FEATURED COURSES
        </p>
        <h1>Programs You Can Pursue</h1>
        <div className={styles.swiperContainer}>
          <CourseSwiper />
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContainerDiv1}>
          <Image
            src="Images/Asserts/about_girl.png"
            className={styles.aboutContainerDiv1Image}
          />
        </div>
        <div className={styles.aboutContainerDiv2}>
          <p
            style={{
              fontSize: 20,
              letterSpacing: 5,
              color: "#F16126",
            }}
          >
            About Innovartan
          </p>
          <h2>Empowering Educators, Enriching Education</h2>
          <p className={styles.aboutContainerDiv2text}>
            Enriching education begins with empowered educators. Our platform
            provides invaluable support and resources designed to enhance
            teaching practices and improve the classroom experience.{" "}
          </p>
          <AboutCard
            url={"Images/Asserts/about_teacher.png"}
            heading={"For Teachers"}
            text={
              "At Innovartan Learning Solutions, we’re dedicated to transforming education. Our platform offers a multitude of benefits for teachers– empowering both newcomers and experienced educators to excel in their roles."
            }
          />
          <AboutCard
            url={"Images/Asserts/about_school.png"}
            heading={"For Schools"}
            text={
              "Innovartan is revolutionising the educational landscape by offering comprehensive support to schools, ensuring that they are equipped with the tools and resources needed to excel."
            }
          />
          <AboutCard
            url={"Images/Asserts/about_student.png"}
            heading={"For Students & Parents"}
            text={
              "At Innovartan, we are dedicated to enhancing the educational journey of students and parents alike by providing comprehensive resources and support."
            }
          />
        </div>
      </div>
      <div className={styles.coursesContainer}>
        <p
          style={{
            fontSize: 20,
            letterSpacing: 5,
            color: "#F16126",
          }}
        >
          WORLD-CLASS EDUCATORS
        </p>
        <h1>Classes Taught By Experienced Professionals</h1>
        <div className={styles.swiperContainer}>
          <EducatorSwiper />
        </div>
      </div>
      {/* <div className={styles.coursesContainer}>
        <p
          style={{
            fontSize: 20,
            letterSpacing: 5,
            color: "#F16126",
          }}
        >
          OUR BLOG POSTS
        </p>
        <h1>More Articles From Resource Library</h1>
        <div className={styles.swiperContainer}>
          <BlogSwiper />
        </div>
      </div> */}
      <div className={styles.statsSection}>
        <StatsSection />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
