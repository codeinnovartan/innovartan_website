import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from 'react';
import ModalPopup from "../ModalPopup";
const SchoolEmpoweringProgram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      img: "/images/empower-school1.svg",
      text: "Seamless integration of JEE/NEET preparation with the regular curriculum.",
    },
    {
      img: "/images/empower-school2.svg",
      text: "Expert-certified teachers for subject-specific training.",
    },
    {
      img: "/images/empower-school3.svg",
      text: "Customized programs to suit your school’s unique needs.",
    },
  ];

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-12 max-w-7xl mx-auto font-metropolis">
  <div className="lg:w-1/3">
    <h1 className="text-xl font-bold lg:text-[40px] lg:leading-[48px] text-center lg:text-left">
      What is the <span className="text-[#F36421]">School Empowering</span>{" "}
      Program?
    </h1>
    <p className="mt-4 text-sm leading-[18px] lg:text-xl lg:leading-[32px] text-[#494949] text-center lg:text-left">
      A comprehensive solution designed to integrate competitive exam
      preparation into the school system.
    </p>
    <div className="mt-5 hidden lg:block">
      <button onClick={()=>setIsModalOpen(true)} className="inline-flex justify-center items-center border border-transparent gap-2 hover:text-[#F36421] py-3 px-8 rounded-full hover:border hover:border-[#F36421] hover:bg-transparent font-medium text-base text-white bg-[#F36421] shadow-md transition ease-in duration-300">
        Talk to Us
        <IoIosArrowForward className="w-4 h-4" />
      </button>
    </div>
  </div>
  <div className="flex flex-col gap-6 mt-8 w-full lg:mt-0 lg:w-[50%]">
    {features.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-2xl p-6 border-l-4 border-[#F36421] relative gap-5"
        style={{
          marginLeft: isDesktop ? `${index * 70}px` : '0px',
        }}
      >
        <img src={feature.img} alt="icons" className="w-16 h-16" />
        <p className="text-sm lg:text-2xl lg:leading-7 font-medium">{feature.text}</p>
      </div>
    ))}
   <div className=" lg:hidden flex justify-center -mb-5">
  <button onClick={()=>setIsModalOpen(true)}className="inline-flex justify-center items-center border border-transparent text-center gap-2 hover:text-[#F36421] py-3 px-8 rounded-full hover:border hover:border-[#F36421] hover:bg-transparent font-medium text-base text-white bg-[#F36421] shadow-md transition ease-in duration-300">
    Talk to Us
    <IoIosArrowForward className="w-4 h-4" />
  </button>
</div>
  </div>
  <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
</section>

  );
};

export default SchoolEmpoweringProgram;
