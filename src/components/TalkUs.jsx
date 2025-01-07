import Home from "../Images/home.png";
import Profile1 from "/images/profe.png";
import Profile2 from "/images/prof2.png";
import Image from "/images/img.png";
const data = [
  {
    id: 1,
    image: Profile1,
    value: "600+",
    title: "Expert Teachers",
  },
  {
    id: 2,
    image: Profile2,
    value: "12000+",
    title: "Students",
  },
  {
    id: 3,
    image: Home,
    value: "45+",
    title: "Affiliated Schools",
  },
];
const TalkUs = () => {
  return (
    <div className=" flex items-center justify-center bg-white p-5 ">
      <div className=" bg-gradient-to-r from-[#001A44] to-[#002A6C] lg:px-20 lg:py-24 rounded-xl">
        <div>
          <div className="flex lg:flex-col items-center gap-6 lg:-mt-14">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-[#0732781A]  lg:shadow-md max-w-sm rounded-xl p-2 flex md:flex-col xl:flex-row items-start gap-2"
              >
                <img src={item.image} alt={item.title} className="w-14 mr-5 " />
                <div>
                  <div className="text-white text-4xl font-bold">
                    {item.value}
                  </div>
                  <div>
                    <h3 className="text-white text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center lg:-mt-16">
          <img
            src={Image}
            alt="image"
            className="lg:w-64 lg:h-80 relative z-10 lg:-bottom-24"
          />
        </div>  
      </div>



    </div>
  );
};

export default TalkUs;
