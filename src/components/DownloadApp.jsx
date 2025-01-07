
import { Link } from "react-router-dom";
const DownloadApp = () => {
  return (
    <>
       <div className="bg-gradient-to-r from-[#4C0087] to-[#001B47] w-full flex flex-col md:flex-row justify-center items-center p-4  md:justify-around ">
        <div className="flex flex-col w-full md:w-1/2 md:justify-between justify-center items-center text-white px-4 py-2">
          <p className="text-xs lg:text-xl font-normal text-center lg:text-left lg:mr-10">
            Unlock the power of seamless learning and growth
          </p>
          <h1 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold  text-center md:text-left">
            <span className="text-[#F36421]">Download</span> Innovartan App
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center gap-4 mt-4 md:mt-0 flex-col lg:flex-row pb-10  lg:pb-0">
          <Link to="#">
            <img src="../Images/app-btn.svg" alt="app" className="w-44 md:w-40 lg:w-40 " />
          </Link>
          <Link to="#">
            <img
              src="../Images/store-btn.svg"
              alt="store"
              className="w-44 md:w-40 lg:w-40 "
            />
          </Link>
        </div>
      </div>
    </>
  )
}
export default DownloadApp
