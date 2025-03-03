
import React from "react";
import { useNavigate } from "react-router-dom";

function JeeResultBanner() {


    const navigate = useNavigate();
  return (
    <div className=" bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 lg:py-4  w-full font-metropolis mt-5" data-aos="zoom-in">
      <div className=" bg-gradient-to-r from-[#4C0087] to-[#001B47] text-white px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-center rounded-2xl shadow-lg">
        <div className="flex  w-full justify-center md:justify-between items-center">
          <div>
            <div className="flex  justify-center items-center text-center gap-4">
              <h2 className="text-[18px] md:text-xl lg:text-2xl font-bold text-center">
                JEE(Mains) Results 2025
              </h2>
              <img src="/images/live-icon.svg" alt="live icon" className="w-10 h-10"/>
            </div>
            <div className=" flex justify-center items-center text-center md:hidden">
            <img src="/images/result-btn.png" alt="result" />
          </div>
            <div className=" m-0 md:m-2 flex justify-center items-center md:justify-start ">
              <button onClick={() => navigate("/result")} className="flex items-center text-base font-medium  bg-[#F36421] text-white px-6 py-2 rounded-full border border-transparent hover:border hover:border-[#F36421] hover:text-[#F36421] hover:bg-transparent transition ease-in duration-300 cursor-pointer">
                View Results
              </button>
            </div>
          </div>
          <div className="hidden md:block text-center ">
            <img src="/images/result-btn.png" alt="result" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JeeResultBanner;
