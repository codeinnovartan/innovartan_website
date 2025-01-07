import Home from "../../Images/home.png";
import Profile1 from "../../Images/profe.png";
import Profile2 from "../../Images/prof2.png";
import { IoIosArrowForward } from "react-icons/io";

const AchiveGoals = () => {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row items-center gap-12 max-h-screen font-metropolis max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className=" hidden sm:flex-1 md:flex flex-col lg:w-[30%] items-center relative">
          <img
            src="/images/achivegoals1.png"
            alt="image"
            className="h-52 md:h-auto relative z-10 md:-bottom-8"
          />
        </div>
        <div className="text-center md:text-left flex-1 lg:w-[40%] ">
          <h1
            className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-gray-800 leading-snug 
          "
          >
            Achieve Your <span className="text-[#F36421]">Goals</span> With Us
          </h1>
          <p className="text-[#494949] mt-4  ">
            Celebrating Milestones in Empowering Education and Transforming
            Lives!!
          </p>
          <div className="w-full max-md:flex items-center justify-center">
          <button className=" flex justify-center items-center mt-6 bg-[#073278] text-white px-8 py-3 rounded-xl text-sm font-medium shadow-md hover:text-[#073278] hover:bg-transparent hover:border hover:border-[#073278] transition ease-in duration-300 ">
              <span className="mr-2">Know More</span>
              <IoIosArrowForward className="mt-1" />
            </button>
          </div>
        </div> 
         <div className="flex flex-col justify-center items-center lg:w-[30%]  gap-10 mt-8">
                  <div className="bg-white lg:shadow-md max-w-sm rounded-xl p-2 sm:px-6 flex md:flex-col xl:flex-row items-start gap-2 lg:mr-20 ">
                    <img src={Profile1} alt="image" className="w-16  mr-5" />
                    <div>
                      <div className="text-[#073278] text-4xl font-bold">600+</div>
                      <div>
                        <h3 className="text-[#494949] text-sm">Expert Teachers</h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white lg:shadow-md max-w-sm rounded-xl p-2 sm:px-6 flex md:flex-col xl:flex-row items-start gap-2 lg:ml-24">
                    <img src={Profile2} alt="image" className="w-16 mr-5" />
                    <div>
                      <div className="text-[#073278] text-4xl font-bold">12000+</div>
                      <div>
                        <h3 className="text-[#494949] text-sm">Students</h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white lg:shadow-md max-w-sm rounded-xl p-2 sm:px-6 flex md:flex-col xl:flex-row items-start gap-2 lg:mr-20">
                    <img src={Home} alt="image" className="w-16  mr-5" />
                    <div>
                      <div className="text-[#073278] text-4xl font-bold">45+</div>
                      <div>
                        <h3 className="text-[#494949] text-sm">Affiliated Schools</h3>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
    </>
  );
};

export default AchiveGoals;
