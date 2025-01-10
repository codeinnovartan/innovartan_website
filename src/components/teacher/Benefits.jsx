
const Benefits = () => {
  const benefits = [
    {
      img: "/images/salary.png",
      title: "Competitive Salaries",
      backgroundColor: "#F1F7EC",
      imageBackgroundColor: "#74AE4233",
      active: true,
    },
    {
      img: "/images/tech-skills.png",
      title: "Enhanced Teaching Skills",
      backgroundColor: "#FEF0E9",
      imageBackgroundColor: "#F3642133",
    },
    {
      img: "/images/networking.png",
      title: "Networking & Mentorship",
      backgroundColor: "#E7EDF6",
      imageBackgroundColor: "#0743A333",
    },
    {
      img: "/images/classroom.png",
      title: "Enhanced Classroom Management",
      backgroundColor: "#EBFCFD",
      imageBackgroundColor: "#1CB2B733",
    },
  ];

  return (
    <section className=" font-metropolis px-4 md:px-36 lg:px-36 py-8 bg-white">
      <h2 className="text-center text-xl md:text-2xl lg:text-[40px] lg:leading-[48px] font-bold lg:p-6 mb-10">
        Benefits for Teachers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16 lg:px-24 ">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            style={{ backgroundColor: benefit.backgroundColor }}
            className="flex flex-col items-center text-center p-4 px-4 rounded-xl "
          >
            <div
              className="flex items-center justify-center rounded-full w-20 h-20 lg:w-24 lg:h-24"
              style={{ backgroundColor: benefit.imageBackgroundColor }}
            >
              <img src={benefit.img} alt={benefit.title} className="w-12 h-12" />
            </div>
            <h3 className="mt-4 text-lg lg:text-xl lg:w-[70%] font-bold">{benefit.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
