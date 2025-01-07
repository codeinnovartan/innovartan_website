import EmpoweringStudent from "../components/student/EmpowerStudent";
import Program from "../components/student/Program";
import StudentMission from "../components/student/StudentMission";
import StudentResourses from "../components/student/StudentResourses";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/GetInTouch";
import DownloadNow from "../components/DownloadNow";

const Students = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#01255F] to-[#001A44] font-metropolis">
        <div className="flex flex-col md:flex-row justify-center items-center pt-6 px-4 lg:py-8 mx-auto sm:px-6 lg:px-32">
          <div className="text-center md:text-left w-full md:w-[50%] md:mb-0 px-6">
            <h1 className="text-[26px]  leading-[32px] md:text-3xl  lg:text-[40px] lg:leading-[48px] font-bold text-white mb-2 sm:mb-4 ">
              Empower Your <span className="text-[#F36421]">Dreams</span>,
              Achieve Your Goals with Innovartan
            </h1>
            <p className="text-[#E7EDF6]  text-sm md:text-xl font-normal sm:font-medium mb-6 ">
              Your journey to academic and competitive exam <br /> success
              starts here.
            </p>
            <div className="hidden sm:flex justify-center md:justify-start mt-4 md:mt-8 space-x-4 mb-0 sm:mb-6">
              <button className="bg-[#F36421] w-52 md:w-40 lg:w-44 text-white py-2 px-4 rounded-xl font-medium text-base md:text-base hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300">
                Get Started
              </button>
              <button className="bg-[#0743A3] w-52 text-white py-2 px-4 rounded-xl font-medium text-base md:text-base shadow-md md:w-40 lg:w-44 hover:text-[#0743A3] hover:border hover:border-[#0743A3] hover:bg-transparent transition ease-in duration-300">
                Contact us
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-[50%] flex justify-center md:justify-end items-center">
            <img
              src="/images/student_page.png"
              alt="student"
              className="relative z-10 lg:-bottom-8"
            />
          </div>
        </div>
      </div>
      <Program />
      <StudentMission />
      <DownloadNow />
      <EmpoweringStudent/>
      <Testimonials
        title="Success Stories"
        description="Inspiring Stories of Students"
      />
      <StudentResourses />
      <GetInTouch />
    </>
  );
};

export default Students;
