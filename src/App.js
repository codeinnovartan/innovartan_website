import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoPage from "./OLD_Components/Pages/NoPage/NoPage";
import Navbar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Teacher from "./Components/Pages/Teachers/Teacher";
import Student from "./Components/Pages/Students/Student";
import NavBar1 from "./Components/NavBar1/NavBar1";
import NavBar2 from "./Components/NavBar2/NavBar2";
import School from "./Components/Pages/School/School";
import InnoStore from "./Components/Pages/InnoStore/InnoStore";
import PartnerProgram from "./Components/Pages/Partner_Program/PartnerProgram";
import ContactUs from "./Components/Pages/Contact/ContactUs";
import TermOfUse from "./OLD_Components/Pages/TermOfUse/TermOfUse";
import PrivacyPolicy from "./OLD_Components/Pages/Privacy Policy/PrivacyPolicy";
import "./App.css"; // Ensure that this contains your animation CSS
import ScrollingCarasoule from "./Components/ScrollingCarasoule/ScrollingCarasoule";
import ReactGA from "react-ga";

const trackingId = "G-QFL919Y39E";
ReactGA.initialize(trackingId);

function App() {
  const location = useLocation();
  return (
    // <Router>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={600}
        classNames="page"
        unmountOnExit={false}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Navbar>
                <Home />
              </Navbar>
            }
          />
          <Route
            path="/about"
            element={
              <NavBar1 heading={"About Innovartan"} subHeading={"Home / About"}>
                <About />
              </NavBar1>
            }
          />
          <Route
            path="/channel-program"
            element={
              <NavBar1 heading={"About Innovartan"} subHeading={"Home / About"}>
                <PartnerProgram />
              </NavBar1>
            }
          />
          <Route
            path="/teacher"
            element={
              <NavBar1
                heading={"Teacher-Centric Solutions for Educational Excellence"}
                subHeading={"Home / Educator"}
              >
                <Teacher />
              </NavBar1>
            }
          />
          <Route
            path="/student"
            element={
              <NavBar1
                heading={"All Best Students"}
                subHeading={"Home / Students"}
              >
                <Student />
              </NavBar1>
            }
          />
          <Route
            path="/school"
            element={
              <NavBar2>
                <School />
              </NavBar2>
            }
          />
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
          <Route
            path="/contact"
            element={
              <NavBar1
                heading={"Get In Touch With Us"}
                subHeading={"Home / Contact Us"}
              >
                <ContactUs />
              </NavBar1>
            }
          />
          <Route path="/store" element={<InnoStore />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/ScrollingCarasoule" element={<ScrollingCarasoule />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    // </Router>
  );
}

export default App;
