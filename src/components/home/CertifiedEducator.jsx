
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ModalPopup from "../ModalPopup";
const CertifiedEducator = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
            
  return (
    <>
      <section className="w-full bg-white my-12 px-3 xl:px-40   font-metropolis">
            <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#FFF5EF] to-[#FFFFFF] rounded-2xl px-2 pt-10 lg:px-12 lg:h-80 lg:mt-16 -mt-10 ">
              <div className=" w-full lg:w-1/2 lg:text-left text-center">
                <h2 className="text-xl lg:text-[40px] lg:leading-[48px] md:text-3xl  px-2 font-bold">
                Become a <span className="text-[#F36421]">Certified</span> Educator with Innovartan
                </h2>
                <p className=" text-[#494949] text-sm lg:text-lg px-4 lg:-ml-2 lg:mt-2 ">
                Join our growing community of skilled educators and unlock new opportunities in teaching
                </p>
                <button onClick={()=>setIsModalOpen(true)} className="inline-flex justify-center items-center gap-2 bg-[#F36421] mt-4 py-2 px-4 rounded-full   w-44  font-medium text-base md:text-base text-white  hover:text-[#F36421] border border-transparent cursor-pointer transition ease-in duration-300 hover:border hover:border-[#F36421] hover:bg-transparent ">
                Talk to us
                  <IoIosArrowForward className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
              <div className="lg:w-1/2 flex flex-col mt-7 lg:mt-0">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/certificate.png"
                    alt="cerificate"
                    className="hidden lg:block"/>
                   <img
                    src="/images/cerified-educator.png"
                  alt="certified-educator"
                    className=" relative lg:bottom-20 lg:mt-5 hidden lg:block"
                />
                </div>
              </div>
            </div>
            <ModalPopup isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
        </section>
    </>
  )
}
export default CertifiedEducator
