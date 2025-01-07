import { IoIosArrowForward } from "react-icons/io";
const BannerHome = () => {
  return (
    // <div className="w-full bg-white py-12 px-6 md:px-20 lg:px-36 font-metropolis">
    <div className=" bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 lg:py-4  w-full font-metropolis">
      <div className=" bg-gradient-to-b from-[#001A44] to-[#002A6C] text-white px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-lg">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-2xl font-bold text-center">
            Let’s <span className="text-[#F36421]">build</span> a brighter{" "}
            <span className="text-[#F36421]">future</span>, together!
          </span>
        </div>
        <div className="flex gap-4">
          <button className="inline-flex  items-center text-base font-medium gap-2 bg-[#F36421] text-white px-6 py-3 rounded-full ">
            Let&apos;s Connect
            <IoIosArrowForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BannerHome;
