
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ModalPopup from "../ModalPopup";
const studentsData = [
  {
    id: 1,
    img: "/images/student-icon1.png",
    title: "Tailored learning programs to meet student goals",
  },
  {
    id: 2,
    img: "/images/student-icon2.png",
    title: "Removing the coaching stress, exam preparation in school time ",
  },
  {
    id: 3,
    img: "/images/student-icon3.png",
    title: "Continuous assessment and progress tracking to improve performance",
  },
  {
    id: 4,
    img: "/images/student-icon4.png",
    title: "Dedicated support for school boards and competitive exams",
  },
];

const EmpoweringStudent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
    return (
      <div className="bg-white max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10 -mt-10 lg:-mt-0 font-metropolis">
        <div className="text-center mb-8 flex items-center justify-center">
          <h2 className="text-xl lg:text-[40px] lg:leading-[48px] font-bold lg:w-[50%]">
            A <span className="text-[#F36421]">Empowering</span> Approach to
            Student <span className="text-[#F36421]">Success</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mb-32">
          {studentsData.map((studentdata) => (
            <div
              key={studentdata.id}
              className="p-4 rounded-2xl border-2 border-[#E7EDF6]"
            >
              <div className="flex items-start justify-start text-center">
                <img
                  src={studentdata.img}
                  alt={studentdata.title}
                  className="w-12 h-12 mr-4 mt-1 flex justify-center items-center text-center"
                />
                <h3 className="font-medium lg:text-xl lg:w-[65%] text-left">
                  {studentdata.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#E7EDF6] to-[#FFFFFF] p-4 lg:p-12 rounded-2xl flex flex-col-reverse md:flex-row items-center justify-between lg:h-64 lg:gap-8 mt-8">
          <div className="">
            <h2 className="text-xl lg:text-[40px] lg:leading-[48px] font-bold text-center">
              Take the <span className="text-[#F36421]">First Step</span> Towards
              Your Dream{" "}
              <span className="text-[#F36421]">Career</span>
            </h2>
            <p className="mt-2 text-black text-xs sm:text-lg lg:text-xl mb-6 text-center lg:text-left">
              Enroll in our SEP program today and give yourself the edge you
              deserve
            </p>
            <div className="flex gap-2 lg:gap-4 flex-row lg:mt-6 items-center justify-center lg:items-start lg:justify-start ">
              <button onClick={handleNavigation} className="hidden sm:inline-flex justify-center items-center text-base bg-[#F36421] font-medium gap-2 text-white px-4 lg:px-6 lg:py-3 py-2 rounded-full border border-transparent hover:text-[#F36421] hover:bg-transparent hover:border hover:border-[#F36421] transition ease-in duration-300 cursor-pointer">
                Enroll Now
                <IoIosArrowForward className="w-4 h-4" />
              </button>
              <button onClick={handleNavigation}  className="inline-flex sm:hidden justify-center items-center text-base bg-[#F36421] font-medium gap-2 text-white px-4 lg:px-6 lg:py-3 py-2 rounded-full border border-transparent hover:text-[#F36421] hover:bg-transparent hover:border hover:border-[#F36421] transition ease-in duration-300 cursor-pointer">
                Contact Us
                <IoIosArrowForward className="w-4 h-4" />
              </button>
              <button onClick={()=>setIsModalOpen(true)} className="inline-flex sm:hidden justify-center items-center text-base font-medium gap-2 bg-[#0743A3] text-white px-4 lg:px-6 lg:py-3 py-2 rounded-full border border-transparent hover:text-[#0743A3] hover:bg-transparent hover:border hover:border-[#0743A3] transition ease-in duration-300 cursor-pointer ">
                Talk to Us
                <IoIosArrowForward className="w-4 h-4" />
              </button>
              <button onClick={()=>setIsModalOpen(true)} className="hidden sm:inline-flex justify-center items-center text-base font-medium gap-2 bg-[#0743A3] text-white px-4 lg:px-6 lg:py-3 py-2 rounded-full border border-transparent hover:text-[#0743A3] hover:bg-transparent hover:border hover:border-[#0743A3] transition ease-in duration-300 cursor-pointer ">
                Talk to our Counsellor
                <IoIosArrowForward className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative lg:flex-1 lg:text-end md:order-2">
            <img
              src="/images/dream-career.png"
              alt="dream career img"
              className="lg:absolute lg:-bottom-32 lg:h-56 lg:w-60  mb-2 sm:mb-0"
            />
          </div>
        </div>
        <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
      </div>
    );
  };
  export default EmpoweringStudent;