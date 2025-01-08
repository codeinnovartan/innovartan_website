
import { IoIosArrowForward } from "react-icons/io";
import MissionCard from "./MissionCard";


const StudentMission = () => {
  const missions = [
    {
      imageSrc: "/images/laptop1.svg",
      title: "Integrated Learning",
      description: "Competitive exam prep during school hours.",
    },
    {
      imageSrc: "/images/expert_teachers.svg",
      title: "Expert Teachers",
      description: "Learn from certified and highly skilled educators.",
    },
    {
      imageSrc: "/images/assements.svg",
      title: "Smart Assessments",
      description: "AI-based performance tracking to boost results.",
    },
    {
      imageSrc: "/images/stress_free.svg",
      title: "Stress-Free Schedule",
      description: "No need to juggle between school and coaching centers.",
    },
  ];
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-metropolis -mb-5">
        <div className=" bg-gradient-to-r from-[#01255F] to-[#001A44] relative overflow-hidden rounded-2xl ">
          <img
            src="/images/mission-ellipse1.svg"
            alt="bg-ellipse"
            className="absolute -top-2 right-0 w-64 md:-right-5 object-right z-0 hidden md:block"
          />
          <img
            src="/images/mission-ellipse2.svg"
            alt="bg-ellipse"
            className="absolute -bottom-2 left-0 w-64 md:-left-5 object-left z-0 hidden md:block"
          />
          <div className=" mx-auto px-4 py-6 md:py-16 relative z-10">
            <div className="text-center mb-4">
              <button className="bg-[#74ae42] text-white px-6 py-2 rounded-xl lg:text-sm font-bold tracking-wider">
                <span className="block lg:hidden">Empowering Schools</span>
                <span className="hidden lg:block">Why Choose Innovartan?</span>
              </button>
            </div>

            <h1 className="text-center text-white text-lg md:text-[40px] md:leading-[48px]  lg:text-[40px] lg:leading-[48px] font-bold mb-6">
              Your Success is our{" "}
              <span className="text-[#f36421]">Mission</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8 lg:w-[70%] mx-auto mb-12">
              {missions.map((feature, index) => (
                <MissionCard
                  key={index}
                  imageSrc={feature.imageSrc}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <div className="text-center">
              <button className="inline-flex justify-center items-center gap-2 bg-[#F36421]  py-2 px-4 rounded-full w-60  font-medium text-base md:text-base text-white">
                Talk to Us
                <IoIosArrowForward className="w-4 h-4 flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentMission;
