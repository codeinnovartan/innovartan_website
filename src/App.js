// import LandingPage from "./OLD_Components/Pages/LandingPage/LandingPage";
// import AboutSchoolsPage from "./OLD_Components/Pages/About/AboutSchoolsPage";
import ContactUs from "./OLD_Components/Pages/ContactUs/ContactUs";
import TermOfUse from "./OLD_Components/Pages/TermOfUse/TermOfUse";
import PrivacyPolicy from "./OLD_Components/Pages/Privacy Policy/PrivacyPolicy";
// import Services from "./OLD_Components/Pages/Services/Services";
// import AboutUs from "./OLD_Components/Pages/Us-About/AboutUs";
// import Home from "./OLD_Components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./OLD_Components/Pages/NoPage/NoPage";
import Navbar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Teacher from "./Components/Pages/Teachers/Teacher";
import Student from "./Components/Pages/Students/Student";
import NavBar1 from "./Components/NavBar1/NavBar1";
import NavBar2 from "./Components/NavBar2/NavBar2";
import School from "./Components/Pages/School/School";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <NavBar1 heading={"About Innovartan"} subHeading={" Home / About"}>
              <About />
            </NavBar1>
          }
        ></Route>
        <Route
          path="/teacher"
          element={
            <NavBar1
              heading={"Teacher-Centric Solutions for Educational Excellence"}
              subHeading={" Home / Educator"}
            >
              <Teacher />
            </NavBar1>
          }
        ></Route>
        <Route
          path="/student"
          element={
            <NavBar1
              heading={"All Best Students"}
              subHeading={" Home / Students"}
            >
              <Student />
            </NavBar1>
          }
        ></Route>
        <Route
          path="/school"
          element={
            <NavBar2>
              <School />
            </NavBar2>
          }
        ></Route>
        <Route
          path="/term-of-use"
          element={
            <NavBar1 heading={"Terms of Use"}>
              <TermOfUse />
            </NavBar1>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <NavBar1 heading={"Privacy Policy"}>
              <PrivacyPolicy />
            </NavBar1>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route
          index
          element={
            <NavBar>
              <LandingPage />
            </NavBar>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <NavBar>
              <AboutSchoolsPage />
            </NavBar>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <NavBar>
              <ContactUs />
            </NavBar>
          }
        />
        <Route
          path="/term-of-use"
          element={
            <NavBar>
              <TermOfUse />
            </NavBar>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <NavBar>
              <PrivacyPolicy />
            </NavBar>
          }
        />
        <Route
          path="/our-services"
          element={
            <NavBar>
              <Services />
            </NavBar>
          }
        />
        <Route
          path="/about-us"
          element={
            <NavBar>
              <AboutUs />
            </NavBar>
          }
        />
        <Route
          path="/home"
          element={
            <NavBar>
              <Home />
            </NavBar>
          }
        /> */}
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
