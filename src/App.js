import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import AboutSchoolsPage from "./Components/Pages/About/AboutSchoolsPage";
import NoPage from "./Components/Pages/NoPage/NoPage";
import NavBar from "./Components/NavBar/NavBar";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";

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
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
