// import LandingPage from "./OLD_Components/Pages/LandingPage/LandingPage";
// import AboutSchoolsPage from "./OLD_Components/Pages/About/AboutSchoolsPage";
// import NavBar from "./OLD_Components/NavBar/NavBar";
import ContactUs from "./OLD_Components/Pages/ContactUs/ContactUs";
// import TermOfUse from "./OLD_Components/Pages/TermOfUse/TermOfUse";
// import PrivacyPolicy from "./OLD_Components/Pages/Privacy Policy/PrivacyPolicy";
// import Services from "./OLD_Components/Pages/Services/Services";
// import AboutUs from "./OLD_Components/Pages/Us-About/AboutUs";
// import Home from "./OLD_Components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./OLD_Components/Pages/NoPage/NoPage";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";

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
            <Navbar location={"outside"} heading={"About Innovartan"} subHeading={" Home / About"}>
              <About />
            </Navbar>
          }
        ></Route>
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
