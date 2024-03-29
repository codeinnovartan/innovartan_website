import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import AboutSchoolsPage from "./Components/Pages/About/AboutSchoolsPage";
import NoPage from "./Components/Pages/NoPage/NoPage";
import NavBar from "./Components/NavBar/NavBar";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import TermOfUse from "./Components/Pages/TermOfUse/TermOfUse";
import PrivacyPolicy from "./Components/Pages/Privacy Policy/PrivacyPolicy";
import Services from "./Components/Pages/Services/Services";
import AboutUs from "./Components/Pages/Us-About/AboutUs";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
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
        />
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
