
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const logos = [
  {
    src: "/images/school1.svg",
    title: "Delhi Public School (DPS)",
    location: "Noida",
  },
  {
    src: "/images/school2.svg",
    title: "Delhi Public School (DPS)",
    location: "Noida",
  },
  {
    src: "/images/school3.svg",
    title: "Innovartan Global Public School",
    location: "Noida",
  },
  {
    src: "/images/school4.svg",
    title: "Summer Valley School",
    location: "Dehradun",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// eslint-disable-next-line react/prop-types
export const SchoolLogo = ({left,middle,right,description}) => {
  return (
    <div className=" bg-[#E7EDF6] flex flex-col justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 font-metropolis">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full ">
      <div className="text-center mb-8 flex flex-col justify-center items-center ">
        <h2 className="text-xl font-bold  md:text-3xl lg:text-[40px] lg:leading-[48px] lg:w-full ">
          {left} <span className="text-[#F36421]">{middle}</span> {right}
        </h2>
        <p className="text-sm text-[#494949] md:text-base lg:text-base mt-2 w-full">
          {description}
        </p>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
        customTransition="all 1s ease"
        transitionDuration={700}
        showDots={false}
        containerClass="carousel-container"
        itemClass="px-4"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl px-2 py-4 shadow-sm"
          >
            <img
              src={logo.src}
              alt={logo.title}
              className="w-24 h-24 mb-4 object-contain"
            />
            <h3 className="text-base font-medium lg:text-base  md:text-lg text-center">
              {logo.title}
            </h3>
            <p className=" text-sm text-[#494949] text-center">{logo.location}</p>
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
};


