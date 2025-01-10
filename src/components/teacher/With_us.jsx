
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const With_us = () => {
  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row items-center max-h-screen font-metropolis  mx-auto px-4 sm:px-6 lg:px-40 py-8">
        <div className="text-center lg:text-left flex flex-col items-center lg:w-[40%] justify-center lg:-ml-16 lg:pt-20">
          <h1
            className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold -mt-4 lg:-mt-0 "
          >
            Achieve Your <span className="text-[#F36421]">Goals</span>
            <br />
             With Innovartan
          </h1>
          <p className="text-[#494949] text-xs lg:text-lg  lg:w-[70%]  lg:-ml-10">
            Celebrating Milestones in Empowering Education and Transforming
            Lives!!
          </p>
          <div className="w-full max-md:flex items-center justify-center  lg:px-20 pb-5 lg:-ml-10">
            <button onClick={handleNavigation} className=" flex justify-center items-center mt-6 bg-[#073278] text-white px-8 py-3  rounded-xl text-sm font-medium border border-transparent shadow-md hover:text-[#073278] hover:bg-transparent hover:border hover:border-[#073278] transition ease-in duration-300 ">
              <span className="mr-2">Know More</span>
              <IoIosArrowForward className="mt-1" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-[30%]  lg:gap-10 gap-4 lg:mt-8">
          <div className="bg-white lg:shadow-md max-w-sm rounded-xl p-2 sm:px-6 flex md:flex-col xl:flex-row items-start lg:gap-2 gap-8 lg:mr-20 ">
            <img src="/images/profe.png" alt="image" className="w-16  mr-5" />
            <div>
              <div className="text-[#073278] text-4xl font-bold">600+</div>
              <div>
                <h3 className="text-[#494949] text-sm">Expert Teachers</h3>
              </div>
            </div>
          </div>
          <div className="bg-white lg:shadow-md max-w-sm rounded-xl p-2 sm:px-6 flex md:flex-col xl:flex-row items-start lg:gap-2 gap-8 lg:ml-24">
            <img src="/images/prof2.png" alt="image" className="w-16 mr-5" />
            <div>
              <div className="text-[#073278] text-4xl font-bold -mr-2 lg:-mr-0">12000+</div>
              <div>
                <h3 className="text-[#494949] text-sm">Students</h3>
              </div>
            </div>
          </div>
          <div className="bg-white lg:shadow-md max-w-sm rounded-xl p-2 sm:px-6 flex md:flex-col xl:flex-row items-start lg:gap-2 gap-8 lg:mr-20">
            <img src="/images/home.png" alt="image" className="w-16  mr-5" />
            <div>
              <div className="text-[#073278] text-4xl font-bold">45+</div>
              <div>
                <h3 className="text-[#494949] text-sm">Affiliated Schools</h3>
              </div>
            </div>
          </div>
        </div>
       <div className=" hidden sm:flex-1 md:flex flex-col items-center lg:w-[30%] relative">
          <img
            src="/images/img.png"
            alt="image"
            className="h-52 md:h-auto relative z-10 md:-bottom-8"
          />
        </div>
      </div>
    </>
  );
};
export default With_us;
