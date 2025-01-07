import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import {Routes,Route, useLocation} from 'react-router-dom';
import Schools from './Pages/Schools';
import Teachers from './Pages/Teachers';
import Students from './Pages/Students';
import {About} from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import  TermsCondition  from "./Pages/TermsCondition";
import { CommonIcons } from "./components/CommonIcons";
import { useEffect } from "react";



function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]);
  return (
    <>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        {/* <Route path="/talk-to-us" element={<TalkUs />} /> */}
      </Routes>
      <CommonIcons/>
   <Footer/>
    </>
  )
}

export default App
