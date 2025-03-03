import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const BannerHome = () => {
  const navigate=useNavigate();

  const handleNavigation=()=>{
    navigate("/contact");
  }
  return (
    // <div className="w-full bg-white py-12 px-6 md:px-20 lg:px-36 font-metropolis">
    <div className=" bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 lg:py-4  w-full font-metropolis" data-aos="zoom-in">
      <div className=" bg-gradient-to-b from-[#001A44] to-[#002A6C] text-white px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-lg">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-base lg:text-[32px] lg:leading-[40px] font-bold text-center">
            Let’s <span className="text-[#F36421]">build</span> a brighter{" "}
            <span className="text-[#F36421]">future</span>, together!
          </span>
        </div>
        <div className="flex gap-4">
          <button onClick={handleNavigation} className="inline-flex  items-center text-base font-medium gap-2 bg-[#F36421] text-white px-6 py-3 rounded-full border border-transparent hover:border hover:border-[#F36421] hover:text-[#F36421] hover:bg-transparent transition ease-in duration-300 cursor-pointer">
            Let&apos;s Connect
            <IoIosArrowForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BannerHome;
