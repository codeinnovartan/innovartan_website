import { FaRegCirclePlay } from "react-icons/fa6";

const Excellence = () => {
  return (
    <section className="bg-white font-metropolis lg:mb-14 px-4 lg:pb-0 pb-6">
      <div className="flex flex-col justify-center items-center text-center px-4 lg:px-0  lg:mt-4">
        <h2 className="text-xl w-[80%] md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold mt-6 lg:mt-10">
          Your Path to <span className="text-[#F36421]">Teaching</span>{" "}
          Excellence
        </h2>
        <p className="hidden sm:flex text-lg md:text-xl text-[#494949] mt-4">
          Your gateway to advanced Faculty training and career excellence.
          Empower yourself with our specialised Faculty training courses.
        </p>
      </div>
      <div className="relative mt-6 mb-4  w-full flex justify-center">
        <div className="relative max-w-6xl">
          <img
            src="/images/video-img.svg"
            alt="Video Background"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center lg:w-[35%]">
              Shape Your Future with{" "}
              <span className="bg-[#0743A3] px-2 py-1 rounded-lg inline-block">
                Innovartan
              </span>
            </h2>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2 text-center">
              Leading the Way in Education Excellence
            </h2>
            <button className="bg-[#F36421] text-base font-medium text-white px-6 py-3 rounded-full flex items-center gap-2 mt-6">
              Watch Video
              <FaRegCirclePlay />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
