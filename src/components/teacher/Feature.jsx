/* eslint-disable react/prop-types */

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const multipleCard = [
  {
    img: "/images/physics.png",
    title: "PHYSICS | IIT-JEE CLASS XI & XII",
  },
  {
    img: "/images/math.png",
    title: "MATHS | IIT-JEE CLASS XI & XII",
  },
  {
    img: "/images/chemistry.png",
    title: "CHEMISTRY | IIT-JEE CLASS XI & XII",
  },
];

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg border border-[#F36421] hidden md:block lg:block"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-[#F36421] bg-white rounded-full" />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg border border-[#F36421] hidden md:block lg:block"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-[#F36421] bg-white rounded-full" />
    </div>
  );
};

const Feature = ({left,right}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full bg-white md:px-28 lg:px-32 font-metropolis">
        <h2 className="text-[26px] md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-center px-4 py-2 lg:-mt-4 ">
          {left} <span className="text-[#F36421]">{right}</span>
        </h2>
        <div className="relative px-4 py-6">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            showDots={true}
            renderDotsOutside={false}
            containerClass="pb-5"
            customLeftArrow={<CustomPrevArrow />}
            customRightArrow={<CustomNextArrow />}
          >
            {multipleCard.map((card, index) => (
              <div key={index} className="p-4">
                <Card img={card.img} title={card.title} />
              </div>
            ))}
          </Carousel>
        </div>
    </div>
  );
};
export default Feature;
