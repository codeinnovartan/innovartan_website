import { BringInnovartan } from "../components/school/BringInnovartan";
import EmpowerSchool from "../components/school/EmpowerSchool";
import InnovartanPage from "../components/school/InnovartanPage";
import SchoolEmpoweringProgram from "../components/school/SchoolEmpoweringProgram";
import TeacherReviews from "../components/school/TeacherReviews";
import { SchoolLogo } from "../components/SchoolLogo";
import GetInTouch from "../components/GetInTouch";

const Schools = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#01255F] to-[#001A44] font-metropolis">
        <div className="flex flex-col md:flex-row justify-center items-center pt-6 px-4 lg:py-8 mx-auto sm:px-6 lg:px-32">
          <div className="text-center md:text-left w-full md:w-[50%] md:mb-0 px-6">
            <h1
              className="text-[26px]  leading-[32px] md:text-3xl lg:text-[40px] lg:leading-[48px]  font-bold text-white mb-2 sm:mb-4 
          "
            >
              Empowering <span className="text-[#F36421]">Schools</span> <br />
              for Excellence
            </h1>
            <p className="text-[#E7EDF6]  text-sm md:text-xl font-normal sm:font-medium mb-6 font-metropolis">
              Transform your school into a center of academic excellence with
              our School Empowering Program
            </p>
            <button className=" hidden lg:block md:block bg-[#F36421] w-[164px] px-8 sm:px-3 py-3 rounded-xl text-white font-medium  sm:text-base hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-400">
              Partner With Us
            </button>
          </div>
          <div className="relative w-full md:w-[50%] flex justify-center md:justify-end items-center">
            <img
              src="/images/landing school_page.png"
              alt="Teachers"
              className="relative z-10 lg:-bottom-8"
            />
          </div>
        </div>
      </div>
      <SchoolEmpoweringProgram />
      <InnovartanPage />
      <BringInnovartan />
      <EmpowerSchool />
      <SchoolLogo left="Building" middle="Excellence" right="Together"  description="Join a growing network of schools that trust Innovartan for educational transformation."/>
      <TeacherReviews />
      <GetInTouch />
    </>
  );
};
export default Schools;
