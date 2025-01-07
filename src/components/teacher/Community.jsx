const Community = () => {
  return (
    <div className="w-full bg-white px-4 md:px-20 lg:px-36 font-metropolis">
      <section className="bg-[#001C4A] text-white rounded-2xl flex flex-col md:flex-row items-center md:items-stretch ">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[60%] py-8 md:py-12 px-6 md:pl-12">
          <p className="text-xs md:text-sm font-bold bg-[#74AE42] inline-block px-2 md:px-3 py-1 md:py-2 rounded-xl mb-4 text-center">
            Community
          </p>
          <h2 className="text-lg md:text-2xl lg:text-[40px] lg:leading-[48px] font-bold mb-4 text-center md:text-left ">
            Be Part of a Growing Network of
            <span className="text-[#F36421] ml-2 md:ml-3">Educators</span>
          </h2>
          <p className=" text-sm md:text-base mb-6 text-center md:text-left">
            Collaborate, share, and learn with like-minded professionals.
          </p>
          <button className="bg-[#F36421] text-white px-10 py-2 lg:py-2 lg:px-6 rounded-xl font-medium text-base md:text-base  hover:text-[#F36421] hover:bg-transparent hover:border hover:border-[#F36421]  shadow-md">
            Sign Up Today
          </button>
        </div>
        <div className="w-full md:w-[40%] flex justify-center items-center relative">
          <img
            src="/images/Ellipse 159.png"
            alt="bg-ellipse"
            className="absolute top-0 left-0 md:left-24 object-right z-0 hidden sm:block"
          />
          <img
            src="/images/community.png"
            alt="Educator"
            className="relative z-10 h-52 md:h-[18.25rem] md:-bottom-7 md:left-5"
          />
        </div>
      </section>
    </div>
  );
};

export default Community;
