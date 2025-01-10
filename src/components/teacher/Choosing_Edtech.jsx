import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const features = [
  {
    title: "Learning and career growth support.",
    icon: '/images/star.png',
  },
  {
    title: "Placement assistance in top-tier schools.",
    icon: "/images/group.png",
  },
  {
    title: "Connect & Collaborate - Educator Networks.",
    icon: "/images/team.png",
  },
  {
    title: "Comprehensive training programs.",
    icon:"/images/presentation.png",
  },
];

const Choosing_Edtech = () => {

  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#fff9f5] w-full relative md:p-2 max-md:px-4 font-metropolis lg:mt-5 ">
      <div className="grid lg:gap-12 py-4 lg:grid-cols-2 mx-auto bg-[#fff9f5] md:px-36 ">
        <div className="space-y-6">
          <div className="relative max-w-md sm:flex-1 flex-col items-center hidden md:block">
            <img
              src='/images/teacher_1.png'
              alt="image"
              className="object-cover rounded-full lg:h-[14rem]"
            />
          </div>
          <div className="space-y-2 w-full flex flex-col justify-center items-center text-center md:text-left md:items-start">
            <h2 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold w-[70%] lg:w-[80%]">
              Why <span className="text-[#F36421]">Teachers</span> Choose
              Innovartan
            </h2>
            <p className="text-[#494949] text-sm lg:text-xl font-normal ">
              Innovartan empowers teachers with advanced training, recognized
              certifications, and seamless placements in schools—shaping
              fulfilling careers & impactful educators.
            </p>
            <div className="hidden lg:block p-2">
              <button onClick={handleNavigation} className="flex items-center justify-center  border border-transparent font-medium gap-2 bg-[#F36421] text-white px-8 py-3 rounded-full  hover:text-[#F36421] hover:bg-transparent hover:border hover:border-[#F36421]  transition ease-in duration-300">
                Explore Now
                <IoIosArrowForward className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:relative">
          {features.map((feature, index) => {
            const verticalSpacing = 120;
            const offset = index * verticalSpacing;

            const style = isMd
              ? {
                  right: `${offset * 0.55}px`,
                  top: `${offset}px`,
                  position: "absolute",
                  transform: `translateY(${index * 20}px)`,
                }
              : {};
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-md mb-6 ${
                  isMd ? "xl:w-2/3" : "w-full"
                }`}
                style={style}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 lg:w-16 shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-xl font-bold">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" lg:hidden flex justify-center  ">
          <button onClick={handleNavigation} className="flex items-center border border-transparent justify-center font-medium gap-2 bg-[#F36421] text-white px-8 py-3 rounded-full  hover:text-[#F36421] hover:bg-transparent hover:border hover:border-[#F36421]  transition ease-in duration-300">
            Know More
            <IoIosArrowForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choosing_Edtech;
