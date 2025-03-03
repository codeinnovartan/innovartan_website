// import { Link } from "react-router-dom";
export const AppPromo = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#4C0087] to-[#001B47] w-full flex  justify-center items-center  md:justify-around lg:py-6  px-6 md:px-30 lg:px-36 font-metropolis ">
        <div>
          <div className="flex flex-col w-full  lg:justify-between justify-center items-center text-white px-4 py-2">
            <p className="text-sm lg:text-base font-normal text-center lg:text-left lg:mr-8">
              Download the Innovartan App & unlock the power of seamless
              learning and growth
            </p>
            <h1 className="text-base  md:text-3xl lg:text-[32px] lg:leading-[40px] font-bold  text-center lg:text-left ">
              Learn, Grow, <span className="text-[#F36421]">Succeed</span>{" "}
              —Anytime, Anywhere!
            </h1>
          </div>
          <div className="flex lg:flex-col lg:justify-start lg:items-start ">
            <ul className="m-4 text-white lg:text-xl space-y-4">
              <li className="flex items-center">
                <span className="mr-2 flex items-center justify-center w-6 h-6 border-2 border-white rounded-full text-[#F36421] p-1">
                  &#10003;
                </span>
                Personalized Learning
              </li>
              <li className="flex items-center">
              <span className="mr-2 flex items-center justify-center w-6 h-6 border-2 border-white rounded-full text-[#F36421] p-1">
                  &#10003;
                </span> On-the-Go Access
              </li>
              <li className="flex items-center">
              <span className="mr-2 flex items-center justify-center w-6 h-6 border-2 border-white rounded-full text-[#F36421] ">
                  &#10003;
                </span>Progress Tracking
              </li>
              <li className="flex items-center">
              <span className="mr-2 flex items-center justify-center w-6 h-6 border-2 border-white rounded-full text-[#F36421] ">
                  &#10003;
                </span> Exclusive Content
              </li>
            </ul>
          </div>
          {/* <div className="w-full md:w-1/2 flex justify-center items-center gap-4 lg:mt-2 md:mt-0 flex-col lg:flex-row ">
            <Link to="#">
              <img
                src="/images/app-btn.svg"
                alt="app"
                className=" "
              />
            </Link>
            <Link to="#">
              <img
                src="/images/download-app.svg"
                alt="store"
                className=" "
              />
            </Link>
          </div> */}
        </div>
        <div className="flex z-10 relative lg:-bottom-6">
          <img src="/images/img_innovartan_app.png" alt="mobile image" />
        </div>
      </div>
    </>
  );
};
