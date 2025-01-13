

const FinancialAdvisors = () => {
  return (
    <div className="w-full py-3 px-6  lg:px-40 font-metropolis mb-4">
      <div className="bg-gradient-to-r from-[#01255F] to-[#001A44] p-6 lg:p-10 rounded-xl relative z-10">
        {/* <img
        src="/images/ellipse-advisor.png"
        alt="background eclipse"
        className="absolute -top-1 w-full left-1 object-cover z-0 hidden sm:block"
      /> */}
        <h2 className="text-center text-white text-xl md:text-[40px] leading-[48px] font-semibold -mt-3 lg:-mt-0">
          Our <span className="text-[#F36421]">Advisors</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-2 lg:mt-10">
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6 w-52 lg:w-64 flex flex-col items-center">
              <img
                src="/images/advisor1.png"
                alt="Gokul Rajaram"
                className="w-24 h-24 border-4 border-white"
              />
            <h3 className="text-base lg:text-xl font-bold text-[#073278] mt-4">
              Gokul Rajaram
            </h3>
            {/* <p className="text-xs text-[#494949] lg:text-[16px]">Financial Advisor</p> */}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6 w-52 lg:w-64 flex flex-col items-center">
              <img
                src="/images/advisor2.png"
                alt="Amit Singhal"
                className="w-24 h-24 border-4 border-white"
              />
            <h3 className="text-base lg:text-xl font-bold text-[#073278] mt-4">
              Amit Singhal
            </h3>
            {/* <p className="text-xs text-[#494949] lg:text-[16px]">Financial Advisor</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisors;