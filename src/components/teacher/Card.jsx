/* eslint-disable react/prop-types */

const Card = ({ img, title }) => {
  return (
    <div className="flex flex-col px-4 py-4 shadow-lg w-full rounded-xl -mt-5 ">
      <div className="flex items-center justify-center">
        <img src={img} alt="physics" />
      </div>
      <div className=" md:w-[70%] lg:w-[70%] w-full">
        <p className=" flex items-center mt-4 text-base lg:text-xl font-bold">
          {title}
        </p>
      </div>
      <hr className="mt-4 mb-5" />
      <div className="flex flex-wrap md:flex-row flex-col gap-1 mb-4 lg:justify-center lg:items-center justify-start items-start ">
        <div className="flex gap-1 font-medium text-base justify-center items-center ">
          <img src="/images/clock-icon.svg" alt="clock" className="w-4 h-4" />
          <span className="text-[#073278]"> 12 Weeks</span>
        </div>
        <span className="text-[#E7EDF6] hidden lg:block md:block">|</span>
        <div className="flex gap-1 font-medium text-base justify-center items-center">
          <img src="/images/video-icon.svg" alt="vedio" className="w-4 h-4" />
          <span className="text-[#073278]"> Live Training</span>
        </div>
        <span className="text-[#E7EDF6] hidden lg:block md:block ">|</span>
        <div className="flex gap-1 font-medium text-base justify-center items-center">
          <img
            src="/images/certificate-icon.svg"
            alt="certificate-icon"
            className="w-4 h-4"
          />
          <span className="text-[#073278]"> Certifications</span>
        </div>
      </div>
      <div className="flex  mt-3 gap-4 items-center">
        <button className="w-1/2 font-medium text-[#F36421] border border-[#F36421] lg:p-2 rounded-xl lg:px-4 p-3 ">
          View Course
        </button>
        <button className="w-1/2 font-medium text-white border bg-[#0743A3] lg:p-2 rounded-xl lg:px-4 p-3 hover:text-[#0743A3] hover:border hover:border-[#0743A3] hover:bg-transparent transition ease-in-out duration-300">
  Enroll Now
</button>

      </div>
    </div>
  );
};

export default Card;
