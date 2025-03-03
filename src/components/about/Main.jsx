export const Main = () => {
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mb-16 font-metropolis ">
        <div className="text-center mx-auto">
          <h2 className="text-base md:text-3xl lg:text-[32px] lg:leading-[40px] font-bold">
            <span className="text-[#F36421]">About </span>Innovartan
          </h2>
          <p className="text-base md:text-xl lg:text-xl font-normal text-center lg:text-[#494949] mt-6 ">
            Innovartan is more than an education platform. 
            <br />
            It&lsquo;s a movement
            to transform the way learning is experienced in India. We are
            committed to bridging the gaps in the traditional education system
            by offering holistic, innovative solutions that empower schools,
            teachers, and students to achieve their fullest potential.
          </p>
          <p className=" text-base md:text-xl lg:text-xl font-normal lg:text-[#494949] mt-6  ">
            With our flagship{" "}
            <span className="font-semibold">
              School Empowering Program (SEP)
            </span>
            , we seamlessly integrate competitive exam preparation into regular
            school schedules. This eliminates the need for students to juggle
            between school and external coaching, reducing stress and fostering
            academic excellence within a nurturing environment.
          </p>
          <p className="text-base md:text-xl lg:text-xl font-normal lg:text-[#494949] mt-6 ">
            We believe in empowering teachers as the cornerstone of quality
            education. Through our advanced training and placement programs, we
            ensure that educators are equipped with the tools and skills needed
            to meet the demands of modern learners.
          </p>
          <p className="text-base md:text-xl lg:text-xl font-normal lg:text-[#494949] mt-6 ">
            At Innovartan, we don&lsquo;t just prepare students for exams; we
            prepare them for life. By combining cutting-edge technology,
            visionary leadership, and a deep understanding of educational needs,
            we&lsquo;re building a future where learning knows no boundaries.
          </p>
        </div>
      </div>
      <div className="bg-white max-w-7xl mx-auto lg:px-8  font-metropolis">
        <div className="bg-gradient-to-r from-[#01255F] to-[#001A44] text-white mt-16 lg:rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-4">
          <div className="flex flex-col lg:flex-row items-center relative lg:px-8">
            <div className="absolute top-[-20px] text-[200px] text-[#E7EDF633] leading-none lg:-ml-4 lg:mt-10 lg:px-6 hidden lg:block">
              &ldquo;
            </div>
            <div className="text-center lg:text-left flex-1 lg:px-20 lg:py-4 lg:w-1/3 ">
              <h2 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold p-2">
                About@
                <span className="text-[#F36421]">Founder</span>
              </h2>
              <p className="text-sm leading-6 lg:text-base mt-3 font-normal text-[#E7EDF6]">
                <span className="font-semibold"> Prashant Sharma,</span> founder
                of <span className="font-semibold"> Innovartan</span>, brings
                over 15 years of teaching experience, guiding thousands for
                IIT-JEE and NEET. Innovartan was born from his vision to expand
                impact beyond select batches, bridging educational gaps
                nationwide.
              </p>
              <p className="text-sm leading-6 mt-3 lg:text-base font-normal text-[#E7EDF6]">
                Focused on simplifying students&lsquo; lives, Innovartan
                integrates competitive and board exam prep into schools, offers
                teacher upskilling, and uses AI-driven assessments.
              </p>
              <p className="text-sm  leading-6 mt-3 lg:text-base font-normal text-[#E7EDF6]">
                Prashant is dedicated to providing top-tier education, enabling
                students to achieve success without the pressures of relocating
                to coaching hubs.
              </p>
            </div>
            <div className="flex justify-center relative">
              <img
                src="/images/prashant_sharma.png"
                alt="Prashant Sharma"
                className="relative z-10 -bottom-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
