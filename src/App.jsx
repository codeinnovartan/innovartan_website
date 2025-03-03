import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Schools from "./Pages/Schools";
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import { About } from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/TermsCondition";
import { CommonIcons } from "./components/CommonIcons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JeeResult from "./components/school/JeeResult";


function App() {
  const location = useLocation();

 
  useEffect(() => {
    AOS.init({ duration: 1000 });
},[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<Schools />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/student" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/result" element={<JeeResult />} />
       
      </Routes>
      <CommonIcons />
      <Footer />
    </div>
  );
}

export default App;
