

const SidebarPage = () => {
  return (
    <>
        <aside className="w-full md:w-1/3 p-4 lg:mt-20">
        <div
          className="bg-gradient-to-r from-[#ECFFDB] to-[#FFFFFF]
          p-6 mb-6 rounded-2xl">
          <div className="flex flex-row-reverse justify-center  gap-4 ">
            <img
              src="/images/contactus.svg"
              alt="contact"
              className="w-14 h-14 lg:mb-5"
            />
            <div>
              <p className=" text-sm leading-[18px] text-[#494949] lg:text-black lg:text-2xl font-normal">
                If you have any query please
              </p>
              <h3 className="text-base  lg:text-2xl font-bold">
                contact us at
              </h3>
              <div className="text-[#0743A3] text-base lg:text-[26px] lg:leading-9 font-bold mt-5">
                <a href="mailto:info@innovartan.com">info@innovartan.com</a>
                <br />
                <a href="tel:+919319 888 783">+91 9319 888 783</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-b from-[#FFF5EF] to-[#FFFFFF]
        p-6 mb-6 rounded-2xl flex"
        >
          <div className="">
            <h3 className="text-base lg:text-2xl  font-bold ">
              Transform Your <span className="text-[#F36421]">School</span> with
              Innovartan
            </h3>
            <p className=" text-sm lg:text-base text-[#494949]">
              Empowering schools today for the leaders of tomorrow.
            </p>
            <button
              className="mt-4 bg-[#F36421] text-xs font-medium text-white lg:py-2 px-4 py-3 rounded-xl
             hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300"
            >
              Get Started
            </button>
          </div>
          <div>
            <img
              src="/images/contact-img1.png"
              alt="contact-innovartan"
              className="w-64 h-52"
            />
          </div>
        </div>
        <div className=" p-6 mb-6 rounded-2xl bg-gradient-to-l from-[#002A6C] to-[#001A44] flex">
          <div className="text-white">
            <h3 className=" text-base lg:text-2xl font-bold">
              Become a <span className="text-[#F36421]">Certified</span>{" "}
              Educator with Innovartan
            </h3>
            <p className="text-sm text-[#E7EDF6] lg:text-base">
              Join our community of skilled educators and unlock new
              opportunities.
            </p>
            <button
              className="mt-4 bg-[#F36421] text-xs font-medium text-white lg:py-2 px-6  py-3 rounded-xl
             hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent  transition ease-in duration-300"
            >
              Talk to Us
            </button>
          </div>
          <div className="relative">
            <img
              src="/images/contact-img2.png"
              alt="contact"
              className="relative z-10 lg:-bottom-6 lg:h-56 lg:w-72 h-44 w-80 -bottom-14 "
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#E7EDF6] to-[#FFFFFF] p-6 mb-6 rounded-2xl">
          <h1 className=" lg:text-2xl font-bold lg:mb-3 lg:w-[80%]">
            Achieve Your <span className="text-[#F36421]">Goals </span> With
            Innovartan
          </h1>
          <p className=" text-[#494949] lg:text-base  font-medium lg:mb-3">
            Celebrating Milestones in Empowering Education and Transforming
            Lives!!
          </p>
          <div className="flex justify-center">
            <button className="w-full max-w-xs mt-4 bg-[#F36421] text-base font-medium text-white py-2 px-8 rounded-xl  hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300">
              Get Started
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SidebarPage
