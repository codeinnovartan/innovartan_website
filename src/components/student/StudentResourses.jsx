import { IoIosArrowForward } from "react-icons/io";
const StudentResourses = () => {
  const resources = [
    {
      img: "/images/ai-icon.svg",
      title: "AI- Assessment Platform",
      backgroundColor: "white",
    },
    {
      img: "/images/study-icon.svg",
      title: "Study Resources",
      backgroundColor: "white",
    },
    {
      img: "/images/class-icon.svg",
      title: "Class Videos",
      backgroundColor: "white",
    },
  ];
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-metropolis -mt-10">
      <div className="bg-gradient-to-r from-[#4C0087] to-[#001B47] p-8 rounded-2xl flex md:flex-row items-center justify-between lg:h-64  lg:mt-24">
        <div className="relative text-end lg:bottom-[82px] hidden lg:block ">
          <img src="/images/student-guidance.png" alt="guidance" />
        </div>
        <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start lg:mr-48 ">
          <h2 className="text-xl lg:text-3xl  text-center lg:text-right font-bold text-white">
            Have questions? Need guidance?
          </h2>
          <p className="mt-2 text-white text-center text-xs lg:text-xl ">
            Reach out to our student support team for assistance
          </p>
          <div className="flex  flex-col justify-center items-center text-center lg:flex-row md:flex-row mt-5 lg:mt-6 ">
            <button className="inline-flex justify-center items-center text-base bg-[#F36421] font-medium gap-2  text-white px-6 py-3 rounded-full  hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300 ">
              Contact us
              <IoIosArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <section className="bg-[#FFF5EF] rounded-2xl flex flex-col items-center justify-center lg:h-80 mt-8 lg:mt-10 lg:-mb-20 ">
        <div>
          <h1 className="text-xl lg:text-[40px] lg:leading-[48px] font-bold text-center px-2 py-4 lg:py-8 ">
            Advanced <span className="text-[#F36421]">Resources</span> at Your
            Fingertips
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 lg:px-24 py-4 text-center">
          {resources.map((resource, index) => (
            <div
              key={index}
              style={{ backgroundColor: resource.backgroundColor }}
              className="flex lg:flex-col  items-center justify-evenly text-center lg:p-4 p-2  rounded-2xl lg:w-[320px]"
            >
              <img
                src={resource.img}
                alt={resource.title}
                className="w-16 h-16"
              />
              <h3 className="mt-4 text-base lg:text-xl font-bold m-6 text-left">
                {resource.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default StudentResourses;

