import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) =>
    location.pathname === path ? "text-[#F36421] text-lg" : "text-[#000000] text-lg";

  return (
    <nav className="bg-white shadow-md sticky  top-0 z-50 font-metropolis">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6  max-w-7xl lg:px-8 py-6">
       <Link to="/" className={getLinkClass("/")}>
       <img src="../Images/header-logo.svg" alt="logo" className="w-28 sm:w-auto" />
          </Link>

        <div className="flex items-center space-x-4">
          <button className="bg-[#F36421] text-white px-4 py-2 rounded-xl lg:hidden font-metropolis hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300">
            Talk to Us
          </button>
          <button
            className="text-2xl lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="text-[#0743A3]"/> : <FiMenu className="text-[#0743A3]"/>}
          </button>
        </div>

        <div className="hidden lg:flex space-x-6 font-medium font-metropolis">
        <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/schools" className={getLinkClass("/schools")}>
            Schools
          </Link>
          <Link to="/teachers" className={getLinkClass("/teachers")}>
            Teachers
          </Link>
          <Link to="/students" className={getLinkClass("/students")}>
            Students
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4 text-base font-medium font-metropolis">
          <button  id="#talk-to-us"className="bg-[#F36421] text-white px-4 py-2 rounded-xl hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300">
            Talk to Us
          </button>
          <button className="bg-[#0743A3] text-white px-4 py-2 rounded-xl hover:text-[#0743A3] hover:border hover:border-[#0743A3] hover:bg-transparent transition ease-in duration-300">
            Login/Signup
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-4 px-6 pb-4 font-medium lg:hidden font-metropolis">
          <Link to="/" className={getLinkClass("/")} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/schools" className={getLinkClass("/schools")} onClick={toggleMenu}>
            Schools
          </Link>
          <Link to="/teachers" className={getLinkClass("/teachers")} onClick={toggleMenu}>
            Teachers
          </Link>
          <Link to="/students" className={getLinkClass("/students")} onClick={toggleMenu}>
            Students
          </Link>
          <Link to="/about" className={getLinkClass("/about")} onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")} onClick={toggleMenu}>
            Contact
          </Link>
          <button className="bg-[#0743A3] text-white px-4 py-2 rounded-xl font-metropolis" onClick={toggleMenu}>
            Login/Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;