import { IoIosArrowForward } from "react-icons/io";
import ModalPopup from "../ModalPopup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
          
  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 lg:py-4  w-full font-metropolis lg:-mt-5">
      <div className=" bg-gradient-to-b from-[#001A44] to-[#002A6C] text-white px-10 py-4 md:px-12 flex flex-col md:flex-row lg:flex-row items-center justify-between rounded-2xl shadow-lg ">
        <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/images/announcement 1.png"
              alt="announcement"
              className="w-10 h-10 mr-4 hidden md:block lg:block"
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
      <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
    </div>
  );
};
export default Banner;
