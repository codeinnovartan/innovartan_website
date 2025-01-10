import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ModalPopup from "../ModalPopup";

const programData = [
  {
    id: 1,
    logo: "/images/program-img1.png",
    title: "GANTAVYA BATCH IIT-JEE CLASS XI & XII",
    duration: "1 Year Program",
    mode: "Offline",
  },
  {
    id: 2,
    logo: "/images/program-img2.png",
    title: "UDAAN BATCH | IIT-JEE CLASS XI & XII",
    duration: "1 Year Program",
    mode: "Offline",
  },
  {
    id: 3,
    logo: "/images/program-img3.png",
    title: "SMART SCIENCE BATCH | IIT-JEE CLASS XI & XII",
    duration: "1 Year Program",
    mode: "Offline",
  },
];

const  Program = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-metropolis ">
        <div className="text-center lg:my-8">
          <h1 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold">
            Unlock Your <span className="text-[#F36421]">Potential</span> with
            Innovartan
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-xl text-[#494949] hidden lg:block">
            At Innovartan, we simplify your academic journey by integrating
            competitive exam preparation into your school schedule. Say goodbye
            to the stress of school and coaching separately—prepare for IIT-JEE,
            NEET, and more while excelling in your school curriculum.
          </p>
        </div>
        <div className="grid gap-6 px-4 py-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {programData.map((program) => (
            <div key={program.id} className="bg-white shadow-lg rounded-lg p-5">
              <div className="w-full px-3 py-6 border border-[#E7EDF6] rounded-xl mb-3">
                <img
                  src={program.logo}
                  alt={program.title}
                  className="h-24 mx-auto"
                />
              </div>
              <h2 className="lg:text-xl font-semibold  text-left px-2 lg:w-[80%]">
                {program.title}
              </h2>
              <hr className="m-5" />
              <ul className="flex  flex-col lg:flex-row justify-start lg:gap-6 gap-2 text-sm lg:items-center text-[#0743A3] mt-4 items-start">
                <li className="flex w-auto items-center space-x-2">
                  <img
                    src="/images/clock-icon.svg"
                    alt="clock"
                    className="w-6 h-6"
                  />
                  <span>{program.duration}</span>
                </li>
                <span className="text-[#E7EDF6] hidden lg:block md:block">
                  |
                </span>
                <li className="flex items-center space-x-2">
                  <img
                    src="/images/video-icon.svg"
                    alt="vedio"
                    className="w-6 h-6"
                  />
                  <span>{program.mode}</span>
                </li>
              </ul>
              <button className="inline-flex w-full bottom-0 justify-center items-center gap-2 bg-[#0743A3] text-white mt-4 py-2 px-4 rounded-xl border border-transparent font-medium text-base md:text-base hover:text-[#0743A3] hover:bg-white hover:border hover:border-[#0743A3] transition ease-in duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
        <div className=" hidden lg:block text-center mt-5">
          <button onClick={()=>setIsModalOpen(true)}  className="inline-flex justify-center items-center gap-2 bg-[#F36421] text-white mt-4 py-3 px-4 rounded-full border border-transparent w-60 border-[#F36421] font-medium text-base md:text-base hover:bg-transparent hover:border hover:border-[#F36421] hover:text-[#F36421] transition ease-in duration-300 cursor-pointer">
            Explore Programs
            <IoIosArrowForward className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>
      </div>
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10  font-metropolis">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FEF0E9] p-6 rounded-xl shadow-sm ">
            <div className="flex items-start justify-start mb-4">
              <img
                src="/images/notes2.png"
                alt="NCERT notes"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-between">
              <h1 className="text-base w-[80%] lg:w-full lg:text-xl font-bold">
                NCERT Solved Questions & Solutions
              </h1>
              <button className=" p-2  border-2 border-[#F36421] rounded-xl">
                <IoIosArrowForward className="w-4 h-4 text-[#F36421]" />
              </button>
            </div>
          </div>
          <div className="bg-[#F5E8FF] p-6 rounded-xl shadow-sm">
            <div className="flex items-start justify-start mb-4">
              <img
                src="/images/notes1.png"
                alt="Free Quitz"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-between">
              <h1 className=" text-base w-[80%] lg:text-xl font-bold lg:w-full">
                Free Quizzes & Previous Year Question Papers
              </h1>
              <button className=" p-2 border-2 border-[#9821F3] rounded-xl">
                <IoIosArrowForward className="w-4 h-4 text-[#9821F3]" />{" "}
              </button>
            </div>
          </div>
        </div>
        <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
      </div>
    </>
  );
};
export default Program;
