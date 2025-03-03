import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Collaborators = () => {

  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact");
  };

  return (
    <section className="w-full bg-white py-3 lg:my-12 px-6  lg:px-40 font-metropolis relative z-10">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#E7EDF6] to-[#f1f5fb] rounded-xl py-10 px-2 lg:py-6 lg:px-12">
        <div className="w-full lg:w-[30%] lg:text-left text-center">
          <h2 className="text-base lg:text-[32px] lg:leading-[40px] font-bold ">
            Our Collaborators in <span className="text-[#F36421]">Growth</span>
          </h2>
          <p className="text-[#494949] text-sm lg:text-base px-2 lg:px-0">
            Partnering with Innovartan to Drive Excellence in Education
            Together.
          </p>
          <button onClick={handleNavigation} className="hidden md:inline-flex justify-center items-center gap-2 text-[#0743A3] mt-4 py-3 px-4 rounded-full border cursor-pointer border-1 w-44 border-[#0743A3] font-medium text-base md:text-base">
            Learn More
            <IoIosArrowForward className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col mt-7 lg:mt-0">
          <div className="lg:py-5 flex items-center justify-center">
            <img
              src="/images/collaborator-1.png"
              alt="Emversity Logo"
              className="w-64 lg:w-80"
            />
          </div>
          <div className="lg:py-4 py-4 flex items-center justify-center lg:ml-72">
            <img
              src="/images/collaborator-2.png"
              alt="IIM Lucknow Logo"
              className="w-64 lg:w-80"
            />
          </div>
        </div>
        <button onClick={handleNavigation} className="md:hidden inline-flex justify-center items-center gap-2 text-[#0743A3] mt-4 py-3 px-4 rounded-full border border-1 w-44 cursor-pointer border-[#0743A3] font-medium text-base md:text-base">
          Know More
          <IoIosArrowForward className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </section>
  );
};
export default Collaborators;
