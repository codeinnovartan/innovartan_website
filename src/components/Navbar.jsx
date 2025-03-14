

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ModalPopup from "./ModalPopup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-[#F36421] text-lg"
      : "text-[#000000] text-lg";

  return (
    <>
    <nav className="bg-white shadow-md sticky  top-0 z-50 font-metropolis">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6  max-w-7xl lg:px-8 lg:py-6 py-4">
        <Link to="/" className={getLinkClass("/")}>
          <img
            src="/images/header-logo.svg"
            alt="logo"
            className="w-28 sm:w-auto"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <button
            className="bg-[#F36421] text-white px-4 py-2 rounded-xl lg:hidden font-metropolis hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300"
            onClick={openModal}
          >
            Talk to Us
          </button>
          <button
            className="text-2xl lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FiX className="" />
            ) : (
              <FiMenu className="text-[#0743A3]" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex space-x-6 font-medium font-metropolis">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/school" className={getLinkClass("/school")}>
            School
          </Link>
          <Link to="/teacher" className={getLinkClass("/teacher")}>
            Teacher
          </Link>
          <Link to="/student" className={getLinkClass("/student")}>
            Student
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4 text-base font-medium font-metropolis">
          <button
            className="bg-[#F36421] text-white px-4 py-2 rounded-xl border border-transparent hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent cursor-pointer transition ease-in duration-300"
            onClick={openModal}
          >
            Talk to Us
          </button>
          <button className="bg-[#0743A3] text-white px-4 py-2 rounded-xl border border-transparent hover:text-[#0743A3] hover:border hover:border-[#0743A3] cursor-pointer hover:bg-transparent transition ease-in duration-300"  onClick={() => {
                window.open("https://tests.innovartan.com")
            }
            }>
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-4 px-6 pb-4 font-medium lg:hidden font-metropolis">
          <Link to="/" className={getLinkClass("/")} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/school"
            className={getLinkClass("/school")}
            onClick={toggleMenu}
          >
            School
          </Link>
          <Link
            to="/teacher"
            className={getLinkClass("/teacher")}
            onClick={toggleMenu}
          >
            Teacher
          </Link>
          <Link
            to="/student"
            className={getLinkClass("/student")}
            onClick={toggleMenu}
          >
            Student
          </Link>
          <Link
            to="/about"
            className={getLinkClass("/about")}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={getLinkClass("/contact")}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <button
            className="bg-[#0743A3] text-white px-4 py-2 rounded-xl border border-transparent hover:text-[#0743A3] hover:border hover:border-[#0743A3] hover:bg-transparent transition ease-in duration-300 cursor-pointer"
            onClick={() => {
                window.open("https://tests.innovartan.com")
            }
            }
          >
            Login
          </button>
        </div>
      )}
    </nav>
    <ModalPopup isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
