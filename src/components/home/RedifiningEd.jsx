import { IoIosArrowForward } from "react-icons/io";
const features = [
  {
    id: 1,
    title: "Reverse Theory – Back to School Approach",
    description:
      "Innovartan eliminates the need for costly external coaching by integrating competitive exam preparation into schools, ensuring students succeed in their academic & career aspirations within a supportive environment.",
    image: "/images/icon7.png",
  },
  {
    id: 2,
    title: "Comprehensive Teacher Development",
    description:
      "Through professional development programs, Innovartan equips educators with modern teaching skills, empowering them to inspire and guide students effectively while advancing their own careers.",
    image: "/images/icon8.png",
  },
  {
    id: 3,
    title: "Personalized Learning Experiences",
    description:
      "By leveraging technology and fostering collaboration, Innovartan enables educators to deliver tailored, high-quality education that meets the unique needs of today’s students.",
    image: "/images/icon9.png",
  },
  {
    id: 4,
    title: "School Transformation into Centers of Excellence",
    description:
      "Innovartan partners with schools to enhance their academic infrastructure, helping them become hubs of innovation, learning, and success for students and teachers alike.",
    image: "/images/icon10.png",
  },
];

function RedifiningEd() {
  return (
    <div className="flex flex-col items-center font-metropolis mx-auto px-4 sm:px-6 lg:px-36 py-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-white md:text-base font-bold bg-[#74AE42] inline-block px-2 md:px-3 py-1 md:py-2 rounded-lg mb-4 text-center"> Redefining Education</p>
        <h1 className="text-[24px] md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-center w-[80%]">
          <span className="text-[#F36421]">Empowering </span>{" "}
          Schools, Teachers,and Students Together
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-4">
        {features.map((feature) => (
        <div
        key={feature.id}
        className=" flex flex-col lg:text-left md:text-left lg:items-start md:items-start justify-center items-center w-full"
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="w-20 h-20 mb-4 lg:self-start md:self-start"
        />
        <h2 className="lg:text-2xl text-sm font-semibold mb-2 md:text-xl lg:self-start md:self-start">
          {feature.title}
        </h2>
        <p className="lg:text-lg font-normal text-[#494949] lg:self-start md:self-start text-xs">
          {feature.description}
        </p>
      </div>
        ))}
      </section>
      <div className="mt-5 flex justify-center items-end">
        <button className=" inline-flex justify-center items-center gap-2  text-[#F36421] py-3 px-6 w-64 rounded-full border border-1 border-[#F36421] font-medium text-base md:text-base shadow-md">
          Know More
           <IoIosArrowForward  className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
}
export default RedifiningEd;
