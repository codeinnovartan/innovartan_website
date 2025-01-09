
import { useNavigate } from "react-router-dom";

const Pathway = () => {
  const navigate = useNavigate();

  const sections = [
    {
      img: "/images/icon4.png",
      title: "Students",
      backgroundColor: "white",
      imageBackgroundColor: "#E7EDF6",
      link: "/student", 
    },
    {
      img: "/images/icon5.png",
      title: "Teachers",
      backgroundColor: "white",
      imageBackgroundColor: "#E7EDF6",
      link: "/teacher",
    },
    {
      img: "/images/icon6.png",
      title: "Schools",
      backgroundColor: "white",
      imageBackgroundColor: "#E7EDF6",
      link: "/school",
    },
  ];

  const handleNavigation = (link) => {
    navigate(link); 
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-10 w-full font-metropolis bg-white">
      <header className="text-center mb-8">
        <h1 className="text-[26px] md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-center">
          Building <span className="text-[#F36421]">Pathways</span> to an
          Inclusive &amp;
          <br className="md:block lg:block xl:block" /> Knowledge-Driven{" "}
          <span className="text-[#F36421]">Future</span>
        </h1>
      </header>
      <section className="bg-[#E7EDF6] rounded-2xl px-4 py-5 flex items-center justify-center text-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 lg:px-10 justify-center items-center">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(section.link)} 
              style={{ backgroundColor: section.backgroundColor }}
              className="flex flex-col items-center justify-between w-56 text-center p-4 rounded-xl lg:w-60 cursor-pointer"
            >
              <div
                className="flex items-center justify-center rounded-full w-16 h-16 lg:w-20 lg:h-20"
                style={{ backgroundColor: section.imageBackgroundColor }}
              >
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-12 h-12 p-2"
                />
              </div>
              <h3 className="mt-4 text-base lg:text-2xl font-bold">
                {section.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pathway;
