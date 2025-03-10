// import DownloadNow from "../components/DownloadNow";
import AchiveGoals from "../components/home/AchiveGoals";
// import { AppPromo } from "../components/home/AppPromo";
import BannerHome from "../components/home/BannerHome";
import FinancialAdvisors from "../components/home/FinancialAdvisors";
import Pathway from "../components/home/Pathway";
import RedifiningEd from "../components/home/RedifiningEd";
import { SchoolLogo } from "../components/SchoolLogo";
import Testimonials from "../components/Testimonials";
import Feature from "../components/teacher/Feature";
import GetInTouch from "../components/GetInTouch";
import Collaborators from "../components/home/Collaborators";
import CertifiedEducator from "../components/home/CertifiedEducator";
import NewsArticles from "../components/home/NewsArticles";
import { SchoolBanner } from "../components/home/SchoolBanner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalPopup from "../components/ModalPopup";
import JeeResultBanner from "../components/JeeResultBanner";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* <div className="w-full bg-gradient-to-r from-[#01255F] to-[#001A44] font-metropolis">
        <div className="flex flex-col md:flex-row justify-center items-center pt-6 px-4 lg:py-8 mx-auto sm:px-6 lg:px-32 xl:px-32">
          <div className="text-center md:text-left w-full md:w-[50%] md:mb-0 px-6"> */}

      <div className="relative h-[70vh] lg:min-h-screen w-full font-metropolis">
        <div className="absolute inset-0 bg-[url('/images/innovartan_home.png')] bg-cover bg-center" />
        <div className="relative z-10 flex justify-center text-center lg:text-left lg:justify-start items-center lg:w-[50%] h-full  px-4 lg:py-24 mr-auto sm:px-6 lg:px-32 lg:mx-6">
          <div className="flex flex-col justify-center h-full ">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[44px] font-bold text-white mb-2 sm:mb-4 ">
              Transforming <span className="text-[#F36421]">schools</span> into
              centers of excellence <br /> where{" "}
              <span className="text-[#F36421]">teachers</span> lead and{" "}
              <span className="text-[#F36421]">students</span> shine.
            </h1>
            <div className="hidden sm:flex justify-start mt-4 md:mt-8 space-x-4 mb-0 sm:mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F36421] w-52 md:w-40 lg:w-44 text-white py-2 px-4 rounded-xl font-medium text-base md:text-base hover:text-[#F36421] border border-transparent cursor-pointer transition ease-in duration-300 hover:border hover:border-[#F36421] hover:bg-transparent"
              >
                Get Started
              </button>
              <button
                onClick={handleNavigation}
                className="bg-[#0743A3] w-52 text-white py-2 px-4 border border-transparent cursor-pointer transition ease-in duration-300 rounded-xl font-medium text-base md:text-base shadow-md md:w-40 lg:w-44 hover:text-white hover:border hover:border-white hover:bg-transparent"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
        <ModalPopup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      {/* <div className="relative w-full md:w-[50%] flex justify-center md:justify-end items-center">
            <img src="/images/home-img.png" alt="Teachers" className="relative z-10 lg:-bottom-8" />
          </div> */}
<JeeResultBanner/>
      <Pathway />
      <BannerHome />
      <RedifiningEd />
      <SchoolLogo
        left="Transforming "
        middle="Schools"
        right=" to Excellence"
        description="Explore our expanding network of affiliated schools and uplift student achievements"
      />
      <SchoolBanner />
      <Testimonials
        title="Tesmimonials"
        description="Here's what students are saying"
      />
      <AchiveGoals />
      <CertifiedEducator />
      <Feature left="Featured" right="Courses" />
      <FinancialAdvisors />
      <Collaborators />
      <div className="hidden lg:block">
        <NewsArticles />
      </div>
      <div>
        {/* <div className="hidden lg:block">
        <AppPromo/>
        </div>
        <div className="block lg:hidden">
          <DownloadNow/>
        </div> */}
      </div>
      <GetInTouch />
    </>
  );
}
