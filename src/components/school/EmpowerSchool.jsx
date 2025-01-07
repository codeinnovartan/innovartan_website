import { IoIosArrowForward } from "react-icons/io";

const EmpowerSchool = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 font-metropolis">
      <section className="bg-[#FFF5EF]  rounded-2xl flex flex-col-reverse py-4 md:flex-row items-center md:items-stretch ">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[50%] py-8 md:py-12  md:pl-12">
          <h2 className="text-lg md:text-2xl  lg:text-[40px] lg:leading-[48px] font-bold mb-4 text-center md:text-left ">
          Ready to Empower Your 
            <span className="lg:text-[#F36421] ml-2 md:ml-3">School?</span>
          </h2>
          <p className=" text-sm md:text-base mb-6 text-center md:text-left text-[#494949] lg:w-[80%]">
          Partner with Innovartan and bring world-class education to your classrooms
          </p>
          <div className="flex gap-4 flex-col lg:flex-row md:flex-row ">
          <button className=" inline-flex  justify-center items-center text-base bg-[#F36421] font-medium gap-2  text-white px-6 py-3 hover:text-[#F36421]  hover:border-[#F36421] hover:border hover:bg-transparent  transition ease-in duration-300 rounded-full">
          Contact Us
            <IoIosArrowForward  className="w-4 h-4"/>
          </button>
          <button className="inline-flex  items-center text-base font-medium gap-2 bg-[#0743A3] text-white px-6 py-3 rounded-full  hover:text-[#0743A3]  hover:border-[#0743A3] hover:border hover:bg-transparent  transition ease-in duration-300 ">
           Download Brochure
              <IoIosArrowForward  className="w-4 h-4"/>
            </button>
        </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <img
            src="/images/empower-school.png"
            alt="Empower school"
            className=" h-52 md:h-[18.25rem]  md:left-5"
          />
        </div>
      </section>
    </div>
  )
}

export default EmpowerSchool
