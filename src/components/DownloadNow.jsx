import { Link } from "react-router-dom"


const DownloadNow = () => {
  return (
    <>
       <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-metropolis ">
        <div className="bg-gradient-to-r from-[#4C0087] to-[#001B47] w-full flex flex-col md:flex-row justify-center items-center p-4  md:justify-around rounded-2xl lg:-mt-5 lg:-mb-5 ">
          <div className="flex flex-col w-full md:w-1/2 md:justify-between justify-center items-center text-white px-4 py-2">
            <p className="text-sm md:text-xl font-normal text-center md:text-left lg:ml-2">
              Unlock the power of seamless learning and growth
            </p>
            <h1 className="text-xl md:text-4xl font-bold  text-center md:text-left">
              <span className="text-[#F36421]">Download</span> Innovartan App
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center gap-4 mt-4 md:mt-0 flex-col lg:flex-row ">
            <Link to="#">
              <img
                src="../Images/app-btn.svg"
                alt="app"
                className="w-44 md:w-40 lg:w-40 "
              />
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
      </div>
    </>
  )
}

export default DownloadNow
