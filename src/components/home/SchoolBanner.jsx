

export const SchoolBanner = () => {
  return (
    <div className=" bg-[#E7EDF6] flex flex-col justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8 font-metropolis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10 py-6 -mt-10  w-full lg:-mt-10">
        <section className="bg-[#001C4A] text-white rounded-2xl flex flex-col md:flex-row items-center md:items-stretch ">
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[50%] py-8 md:py-12 px-6 md:pl-12">
            <p className="text-xs md:text-sm font-bold bg-[#74AE42] inline-block px-2 md:px-3 py-1 md:py-2 rounded-xl mb-4 text-center">
              Empowering Schools
            </p>
            <h2 className="text-lg md:text-2xl  lg:text-[40px] lg:leading-[48px] font-bold text-center md:text-left">
              Transform Your
              <span className="text-[#F36421] ml-2 md:ml-3">School</span> with
              Innovartan
            </h2>
            <p className=" text-sm md:text-base mb-6 text-center md:text-left text-[#E7EDF6]">
              Empowering schools today for the leaders of tomorrow.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-start lg:justify-start gap-2 mb-0">
              <button className="bg-[#F36421] w-52 md:w-40 lg:w-44 text-white py-2 px-4 rounded-xl font-medium text-base md:text-base hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent">
                Get Started
              </button>
              <button className="bg-[#0743A3] w-52 text-white py-2 px-4 rounded-xl font-medium text-base md:text-base shadow-md md:w-40 lg:w-44 hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent">
              Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex justify-center items-center relative">
            <img
              src="/images/Ellipse 159.png"
              alt="bg-ellipse"
              className="absolute top-0 left-0 right-0 bottom-0  md:left-24 object-fit z-0 hidden sm:block "
            />
            <img
              src="/images/teacher4.png"
              alt="Educator"
              className="relative z-10 h-52 md:h-[18.25rem] md:-bottom-5 lg:-bottom-5 md:left-5"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
