

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const logos = [
  {
    src: "/images/DPS Rajnagar.svg",
    title: "DPS Rajnagar | DPS Agra",
   
  },
  {
    src: "/images/DPSG Meerut Road.svg",
    title: "DPSG Meerut Road",
   
  },
 
  {
    src: "/images/RKY International.svg",
    title: "RKY International",
   
  },
  {
    src: "/images/school3.svg",
    title: "Innovartan Global Public School",
   
  },
  {
    src: "/images/Jesus' Sacred Heart School.svg",
    title: "Jesus' Sacred Heart School",
  
  },
  {
    src: "/images/DPSG Meerut Road.svg",
    title: " DPSG Vasundhara",
   
  },
  {
    src: "/images/Holy Child Public School.svg",
    title: "Holy Child Public School",
  
  },
  {
    src: "/images/Rankers International School.svg",
    title: "Rankers International School",
    
  },
  {
    src: "/images/Sapphire International School.svg",
    title: "Sapphire International School",
   
  },
  {
    src: "/images/Gyanshree School.svg",
    title: "Gyanshree School",
  
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
    <div className=" bg-[#E7EDF6] flex flex-col justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-8  font-metropolis">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full ">
      <div className="text-center mb-8 flex flex-col justify-center items-center ">
        <h2 className="text-xl font-bold  md:text-3xl lg:text-[40px] lg:leading-[48px] lg:w-full -mt-5">
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
        autoPlaySpeed={1000}
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
            className="flex flex-col items-center bg-white rounded-2xl px-4 py-4 shadow-sm"
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





