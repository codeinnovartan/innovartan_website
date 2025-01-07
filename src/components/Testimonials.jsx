
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Ipshita Gupta",
    class: "Class 10",
    message:
      "Thank you for a great course. This program was really helpful to me. It helped me understand the concepts well. Their experienced teachers and doubt-clearing classes enhanced my learning ability. I loved the interactive sessions. I would recommend this program to all my friends.",
    image: "/images/student1.png",
  },
  {
    name: "Parin Gupta",
    class: "Class 10",
    message:
      "The Gantavya program has been an immaculate initiative taken up by the DPSG Society. What I think is the best thing about the program is that there is one-on-one communication and doubt solving, which really helps us students to advance and maximize our capabilities.",
    image: "/images/student2.png",
  },
  {
    name: "Yashvi Kaushik",
    class: "Class 9",
    message:
      "I am Yashvi Kaushik of class 9th D, part of the Gantavya program. This program has been very beneficial, providing specialized courses, individual assistance, and a lot of new knowledge. The classes were personalized, highly interactive, and consistently emphasized practice.",
    image: "/images/student3.png",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// eslint-disable-next-line react/prop-types
const TestimonialsCarousel = ({title,description}) => {
  return (
    <div className=" py-8 lg:px-24 bg-white  font-metropolis ">
      <div className="text-center">
        <h2 className="text-xs lg:text-2xl text-[#F36421] sm:text-3xl">
         {title}
        </h2>
        <p className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] mt-2 mb-6 font-bold">
          {description}
        </p>
      </div>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        arrows={false}
        autoPlaySpeed={2000}
        customTransition="all 0.8s ease"
        transitionDuration={800}
        showDots
        containerClass="carousel-container"
        itemClass="px-4"
        dotListClass="custom-dot-list-style"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative w-full max-w-md pt-12 p-7 mx-auto">
            <div className="absolute -top-0 left-36 lg:left-48 transform -translate-x-1/2 z-10">
              <div className="h-20 w-20 lg:h-24 lg:w-24  rounded-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover  text-center flex justify-center items-center"
                />
              </div>
            </div>
            <div className="relative bg-white rounded-xl shadow-md p-4 lg:px-6 lg:py-6  text-center border-l-4 border-[#F36421]">
              <div className=" pt-5 lg:pt-10">
                <div className="absolute top-10 lg:top-16 text-center left-1/4">
                  <h3 className="text-lg lg:text-2xl font-semibold text-[#073278]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm lg:text-base text-[#494949]">
                    {testimonial.class}
                  </p>
                </div>
                <p className="mt-16 text-[#494949] text-xs lg:text-xl lg:leading-[40px] ">
                  {testimonial.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;