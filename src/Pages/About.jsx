import { useNavigate } from "react-router-dom";
import { Main } from "../components/about/Main"
import Mission from "../components/about/Mission"
// import DownloadApp from "../components/DownloadApp"
// import DownloadNow from "../components/DownloadNow"
export const About = () => {
  const navigate =useNavigate();

  const handleNavigation=()=>{
    navigate("/contact")
  }
  return (
    <>
    <div className="relative h-[70vh] lg:min-h-screen w-full font-metropolis">
        <div className="absolute inset-0 bg-[url('/images/innovartan_about.png')] bg-cover bg-center" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <span className="bg-[#1CB2B7] lg:text-2xl font-medium
          text-white text-sm px-4 py-2 rounded-xl mb-4">About Innovartan</span>
          <h1 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[44px] font-bold text-white w-full lg:w-1/3">
            Redefining Education, Empowering Futures
          </h1>
          <p className="text-white text-sm lg:text-xl">
            At Innovartan, we believe education is the cornerstone of a thriving society.
          </p>
         <div className="mt-28">
         <button onClick={handleNavigation} className=" bg-[#F36421] text-base text-white px-20 py-3 rounded-xl font-medium shadow-lg transition ease-in duration-300 cursor-pointer
         border border-transparent 
         hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent">
            Get Started
          </button>
         </div>
        </div>
      </div>
      <Main/>
      <Mission/>
      {/* <div className=" hidden lg:block">
      <DownloadApp/>
      </div>
      <div className="lg:hidden">
        <DownloadNow/>
      </div> */}
    </>
  )
}
