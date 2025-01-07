import { IoIosArrowForward } from "react-icons/io";
const FacultySupport = () => {
  const data = [
    {
      id: 1,
      title: "Guidance & Support",
      description:
        "Receive personalised guidance and consistent support to improve your teaching effectiveness and classroom performance.",
      icon: "/images/icon1.png", 
    },
    {
      id: 2,
      title: "Concept Clarity",
      description:
        "Gain better clarity on vital concepts to advance your classroom instruction, and foster student engagement and understanding.",
      icon: "/images/icon2.png", 
    },
    {
      id: 3,
      title: "Educator Network",
      description:
        "Join a platform designed to foster community and collaboration among educators to share learning and exchange resources.",
      icon: "/images/icon3.png", 
    },
  ];

  return (
    <section className="bg-white py-8 px-2 md:px-20 lg:px-36  ">
      <div className="w-full mx-auto px-6 sm:px-12 font-metropolis">
        <h2 className="text-center text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold mb-10 ">
        Our Faculty {" "} 
          <span className="text-[#F36421]">Support </span>
          System & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mt-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md p-4 lg:p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 rounded-2xl border-l-4 border-[#F36421]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-24 h-20 mb-4"
              />
              <h3 className="text-base lg:text-[26px] lg:leading-[32px] font-bold mb-3">{item.title}</h3>
              <p className="text-[#494949] lg:text-xl font-normal text-sm mb-4">{item.description}</p>
              <div className="w-10 h-10 flex items-center justify-center border-2 border-[#F36421] rounded-full 
              text-[#F36421]">
                   <IoIosArrowForward className='mt-1' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FacultySupport;
