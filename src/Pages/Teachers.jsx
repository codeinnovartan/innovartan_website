
import Feature from "../components/teacher/Feature";
import Choosing_Edtech from "../components/teacher/Choosing_Edtech";
import With_us from "../components/teacher/With_us";
import GetInTouch from "../components/GetInTouch";
import Benefits from "../components/teacher/Benefits";
import Community from "../components/teacher/Community";
import FacultySupport from "../components/teacher/FacultySupport";
import Banner from "../components/teacher/Banner";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Excellence from "../components/teacher/Excellence";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPopup from "../components/ModalPopup";
// import DownloadApp from "../components/DownloadApp";
// import DownloadNow from "../components/DownloadNow";

const Teachers = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
          
  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
  return (
    <>
      {/* <div className="w-full bg-gradient-to-r from-[#01255F] to-[#001A44] font-metropolis">
        <div className="flex flex-col md:flex-row justify-center items-center pt-6 px-4 lg:py-8 mx-auto sm:px-6 lg:px-32">
          <div className="text-center md:text-left w-full md:w-[50%] md:mb-0 px-6"> */}
          <div className="relative h-[70vh] lg:min-h-screen w-full font-metropolis">
  <div className="absolute inset-0 bg-[url('/images/innovartan_teacher.png')] bg-cover bg-center" />
  <div className="relative z-10 flex justify-center text-center lg:text-left lg:justify-start items-center lg:w-[50%] h-full  px-4 lg:py-24 mr-auto sm:px-6 lg:px-32 lg:mx-6">
    <div className="flex flex-col justify-center h-full ">
      <div className="text-[32px] leading-[40px] md:text-3xl lg:text-[40px] lg:leading-[44px] font-bold text-white mb-2 sm:mb-4 ">
            <h1 className="text-[26px] leading-[32px] md:text-3xl  lg:text-[40px] lg:leading-[48px] font-bold text-white ">
              Empowering <span className="text-[#F36421]">Teachers</span>,
              Transforming Education
            </h1>
            <p className="text-[#E7EDF6]  text-sm md:text-xl font-normal sm:font-medium mb-6 font-metropolis">
              Join Innovartan to elevate your teaching career with advanced
              training, certifications, and placement opportunities.
            </p>
            <div className="hidden sm:flex justify-center md:justify-start mt-4 md:mt-8 space-x-4 mb-0 sm:mb-6">
            <button onClick={()=>setIsModalOpen(true)} className="bg-[#F36421] w-52 md:w-40 lg:w-44 text-white py-2 px-4 rounded-xl font-medium text-base md:text-base hover:text-[#F36421] border border-transparent cursor-pointer transition ease-in duration-300 hover:border hover:border-[#F36421] hover:bg-transparent">
                Get Started
              </button>
              <button onClick={handleNavigation} className="bg-[#0743A3] w-52 text-white py-2 px-4 border border-transparent cursor-pointer transition ease-in duration-300 rounded-xl font-medium text-base md:text-base shadow-md md:w-40 lg:w-44 hover:text-white hover:border hover:border-white hover:bg-transparent">
             Contact us
              </button>
            </div>
          </div>
          {/* <div className="relative w-full md:w-[50%] flex justify-center md:justify-end items-center">
            <img src="/images/teacher.png" alt="Teachers" className="relative z-10 lg:-bottom-8" />
          </div> */}
        </div>
        </div>
        <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
      </div>
      {/* <div className="bg-white rounded-tl-xl rounded-tr-xl shadow-md p-3 max-w-md mx-auto sm:hidden">
        <h1 className="text-xl font-bold text-center mb-1 font-metropolis">
          Start Your Journey Today!
        </h1>
        <p className="text-[#494949] text-center text-sm font-normal mb-4 font-metropolis">
          Register for free and access advanced resources
        </p>
        <PhoneInput
          country={"in"}
          inputClass="w-[100%] border-gray-300 rounded-lg h-10"
          buttonClass="bg-transparent"
          containerClass="mb-3"
          placeholder="Enter your mobile number"
        />
        <button className="w-full bg-[#F36421] text-white font-medium py-2 rounded-lg font-metropolis">
          Send OTP
        </button>
      </div> */}
      <Excellence />
      <Feature left="Our Featured" right="Program"/>
      <Banner />
      <Choosing_Edtech />
      <div className="flex flex-col">
        <div className="order-2 md:order-1">
          <Benefits />
        </div>
        <div className="order-1 md:order-2">
          <Community />
        </div>
      </div>
      <FacultySupport />
      <With_us />
     {/* <div className="lg:block hidden">
     <DownloadApp/>
     </div>
     <div className=" lg:hidden">
     <DownloadNow/>
     </div> */}
      <GetInTouch />
    </>
  );
};

export default Teachers;
