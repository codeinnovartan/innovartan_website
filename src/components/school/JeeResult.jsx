import { useState } from "react";
import { schools } from "./SchoolData";
export default function JeeResult() {
  const [activeSchool, setActiveSchool] = useState(schools[0]);

  return (
    // <div className="w-full bg-gradient-to-r from-[#01255F] to-[#001A44] font-metropolis">
    <div className="w-full bg-no-repeat bg-cover bg-bottom font-metropolis pb-16 lg:pb-10" style={{ backgroundImage: "url('/images/bg-jee-result.png')" }}>
      <div className="flex flex-col md:flex justify-center items-center pt-6 px-4 lg:py-8 mx-auto sm:px-6 lg:px-32 xl:px-32">
        <div className="text-center  w-full md:w-[50%] md:mb-6 px-6 py-3 ">
          <h2 className=" text-2xl lg:text-[32px] lg:leading-7  text-white font-bold">
            Our Results
          </h2>
        </div>
        <div className="flex justify-center relative w-full xl:w-fit">
          <div className="w-full h-0.5 bg-white absolute bottom-0 " />
          <div className="flex overflow-x-auto whitespace-nowrap ">
            {schools.map((school) => (
              <button
                key={school.id}
                onClick={() => setActiveSchool(school)}
                className={`relative pb-2 px-4 text-sm md:text-base transition-colors   
                ${
                  activeSchool.id === school.id
                    ? "text-white"
                    : "text-[#cccccc]"
                }`}
              >
                {school.name}
                {activeSchool.id === school.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F36421] "/>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-12">
          <img src={activeSchool.schoollogo} alt="School Logo" />
        </div>
        <div className=" flex flex-col md:flex-col lg:flex-row w-full items-center justify-center text-center text-white  mb-5 md:mb-10">
          <div className="flex flex-col md:flex-col lg:flex-row gap-8  px-2 -mt-10 md:-mt-4">
            <img src="/images/batch-title.png" alt="jee" />
            <div className="flex  gap-5 justify-center items-center">
              <div
                className=" flex flex-col w-40 h-40 md:w-48 md:h-48 text-center justify-center  items-center border-2 border-[#ffffff4d] rounded-xl px-2 md:px-4 "
                // style={{
                //   borderImageSource:
                //     "linear-gradient(180deg, #04AC9F 0%, #9821F3 26%, #F36421 54%, #0743A3 85.5%)",
                //   borderImageSlice: "1",
                // }}
              >
                <span className=" text-[44px] leading-[50px] md:text-[64px] md:leading-[68px] font-bold">
                  {activeSchool.appeared}
                </span>
                <p className=" font-medium text-center text-xs md:text-lg">
                  Students Appeared in Exam
                </p>
              </div>
              <div
                className=" flex flex-col w-40 h-40 md:w-48 md:h-48 text-center justify-center items-center border-2 border-[#ffffff3d] rounded-xl px-2 md:px-4 "
                // style={{
                //   borderImageSource:
                //     "linear-gradient(180deg, #04AC9F 0%, #9821F3 26%, #F36421 54%, #0743A3 85.5%)",
                //   borderImageSlice: "1",
                // }}
              >
                <span className=" text-[44px] leading-[50px] md:text-[64px] md:leading-[68px] font-bold">
                  {activeSchool.selected}
                </span>
                <p className="font-medium text-center text-xs md:text-lg ">
                  Students Selected in JEE (Mains)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <i className=" text-2xl text-white md:text-5xl font-normal mt-4 font-satisfy">
            Congratulations to all students!
          </i>
        </div>
        <div className="relative w-full">
          <div className="absolute  -left-32 top-[25vh] -translate-y-1/2 hidden  xl:block">
            <img src="/images/right.png" alt="Trophy" className="h-80" />
          </div>
          <div className="absolute  -right-32 top-[25vh] -translate-y-1/2 hidden  xl:block">
            <img src="/images/left.png" alt="Trophy" className="h-80" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-8   mt-2 lg:mt-12 gap-2  max-w-4xl mx-auto  ">
            {activeSchool.students1.map((student, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative inline-block">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="mb-4 "
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 px-6  max-w-4xl mx-auto">
            {activeSchool?.students2?.map((student, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative inline-block">
                  <img
                    src={student.image}
                    alt={student.name}
                    className=" mb-4 "
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4  max-w-4xl mx-auto">
            {activeSchool?.students3?.map((student, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative inline-block">
                  <img
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                    className=" mb-4 "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}