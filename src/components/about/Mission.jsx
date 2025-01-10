const Mission = () => {
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 py-6 font-metropolis mb-5  ">
      <h1 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold text-center p-2 mb-8 lg:-mt-2 ">
        Shaping a Brighter <span className="text-[#F36421]">Tomorrow</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FFF5EF] p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#F3642133] p-3 rounded-full">
              <img src="/images/mission.png" alt="our-mission"  className="p-2"/>
            </div>
          </div>
          <h2 className="text-base  lg:text-2xl font-bold text-center m-4">Our Mission</h2>
          <p className=" text-base lg:text-lg text-center lg:px-2 lg:py-1">
            Our mission is to simplify students&lsquo; learning journey by providing
            comprehensive educational resources and training, empowering them
            to excel in both competitive exams and school board exams all
            within their school environment.
          </p>
          <p className="text-base lg:text-lg text-center lg:px-2 lg:py-1 mt-4">
            We are dedicated to bridging educational disparities and unlocking
            the full potential of students from all backgrounds.
          </p>
        </div>
        <div className="bg-[#ECFFDB] p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#74AE4233] p-3 rounded-full">
             <img src="/images/vision.png" alt="our-vision"  className="p-2"/>
            </div>
          </div>
          <h2 className="text-base font-semibold text-center lg:text-2xl  m-4">Our Vision</h2>
          <p className=" text-base lg:text-lg lg:px-2 lg:py-1 text-center">
            To create an ecosystem where students from all backgrounds and
            locations have access to the best teachers and educational content,
            empowering them to achieve academic success without the need to
            relocate to coaching hubs.
          </p>
          <p className=" text-base lg:text-lg lg:px-2 lg:py-1 text-center mt-4">
            We aspire to nurture students for great results without creating
            unnecessary pressure.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Mission
