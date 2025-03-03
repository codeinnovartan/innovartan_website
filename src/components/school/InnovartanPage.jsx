import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ModalPopup from "../ModalPopup";

const InnovartanPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
          
  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
  return (
    <div className="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 py-4 font-metropolis">
      <div className=" bg-gradient-to-r from-[#002A6C] to-[#001A44]  relative overflow-hidden lg:rounded-2xl ">
        <div className="flex  flex-col justify-center items-center text-white mt-10 ">
          <h2 className=" text-sm lg:text-base  font-medium">
            Benefits for Your School
          </h2>
          <h1 className=" text-xl lg:text-[32px] lg:leading-[40px] font-bold">
            Innovartan Makes It <span className="text-[#F36421]">Easy</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center m-4 lg:m-8 lg:gap-10 gap-4">
          <img src="/images/innovartan-page-img.png" alt="teaching-img" />
          <div className="flex flex-col lg:gap-10 gap-4 text-white ">
            <div className="flex lg:gap-8 gap-4 ">
              <img src="/images/innovartan-page-icon1.svg" alt="icon" />
              <div className="flex  flex-col">
                <h2 className=" text-base lg:text-2xl font-bold">
                  Integrated Learning
                </h2>
                <p className=" text-sm lg:text-lg font-normal">
                  No need for external coaching centers.
                </p>
              </div>
            </div>
            <div className="flex lg:gap-8 gap-4">
              <img src="/images/innovartan-page-icon2.svg" alt="icon" />
              <div className="flex  flex-col">
                <h2 className="text-base lg:text-2xl font-bold">
                  Enhanced Reputation
                </h2>
                <p className="text-sm lg:text-lg font-normal">
                  Become a leader in academic excellence
                </p>
              </div>
            </div>
            <div className="flex lg:gap-8 gap-4 ">
              <img src="/images/innovartan-page-icon3.svg" alt="icon" />
              <div className="flex  flex-col">
                <h2 className=" text-base lg:text-2xl font-bold">
                  Tech-Enabled Classrooms
                </h2>
                <p className="text-sm lg:text-lg font-normal">
                  Advanced tools for better learning outcomes
                </p>
              </div>
            </div>
            <div className="flex lg:gap-8 gap-4 ">
              <img src="/images/innovartan-page-icon4.svg" alt="icon" />
              <div className="flex  flex-col">
                <h2 className="text-base lg:text-2xl font-bold">
                  Schools Growth
                </h2>
                <p className="text-sm lg:text-lg font-normal">
                  School rise in terms of growth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#FFFFFF1A] lg:m-20  text-white m-6 px-6 py-4 md:px-12  flex flex-col md:flex-row lg:flex-row items-center justify-between rounded-2xl shadow-lg">
          <div className=" relative flex items-center mb-4 md:mb-0">
            <img
              src="/images/announcement2.svg"
              alt="announcement"
              className="relative z-10 lg:-bottom-4 mr-4 hidden md:block lg:block "
            />
            <h1 className="lg:text-2xl md:text-2xl text-lg font-bold text-center">
              Stay <span className="text-[#F36421]">Updated</span> with
              Innovartan
            </h1>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row md:flex-row ">
            <button onClick={handleNavigation} className="inline-flex  border border-transparent items-center text-base font-medium gap-2 bg-[#0743A3] md:bg-[#0743A3]  text-white px-6 py-3 hover:border hover:border-white  hover:bg-transparent hover:text-white transition ease-in duration-400  rounded-full">
              Let&apos;s Connect
              <IoIosArrowForward className="w-4 h-4" />
            </button>
            <button onClick={()=>setIsModalOpen(true)} className="lg:inline-flex items-center text-base bg-[#F36421] font-medium gap-2  text-white border border-transparent px-6 py-3 hover:border hover:border-[#F36421]  hover:bg-transparent hover:text-[#F36421] transition ease-in duration-400 rounded-full hidden ">
              Schedule a Call
              <IoIosArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
    </div>
  );
};

export default InnovartanPage;
