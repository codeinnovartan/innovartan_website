
const TeacherReviews = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-8 py-10 font-metropolis lg:-mb-10">
      <h2 className="text-center text-base lg:text-[32px] lg:leading-[40px] font-bold mb-12">
        Hear from <span className="text-[#F36421]">Schools</span> Like Yours
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#F36421] font-metropolis">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <img
                src="/images/Mr. Prabhjot Singh.png"
                alt="Mr. Prabhjot Singh"
                className="w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover"
              />
              <div className="flex-1 items-center justify-center">
                <h3 className="text-base lg:text-2xl font-bold text-[#073278]">
                  Mr. Prabhjot Singh
                </h3>
                <p className="text-sm lg:text-lg">Dr. MKK Arya Model School</p>
                <p className="text-xs lg:base text-[#494949]">Master Mentors</p>
              </div>
            </div>
            <img
              src="/images/school-logo-2.svg"
              alt="logo"
              className=" w-16 h-16 lg:w-24 lg:h-24 object-contain -mt-20 lg:-mt-0"
            />
          </div>
          <hr className="mb-4" />
          <p className="relative z-10 leading-relaxed text-xs lg:text-lg lg:leading-[32px]">
            Grateful to Innovartan for including us in their transformative
            training program, unifying CBSE and competitive exam prep at our
            school. The invaluable guidance received has streamlined our
            education approach and enhanced students&lsquo; readiness for academic
            challenges. <br />
            Thank you, Innovartan, for this commendable initiative.
          </p>
          <div className="hidden lg:block items-center justify-end absolute right-6 bottom-0 ">
            <img
              src="/images/comma.svg"
              alt="comma"
              className="lg:w-20 w-12 h-12 lg:h-20 object-contain right-0 "
            />
          </div>
        </div>
        <div className="relative bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#F36421] font-metropolis">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src="/images/Ms. Roli Srivastava.png"
                alt="Ms. Roli Srivastava"
                className=" w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-base lg:text-2xl font-bold text-[#073278]">
                 Ms. Roli Srivastava
                </h3>
                <p className="text-sm lg:text-lg">Sapphire International School</p>
                <p className="text-xs lg:base text-[#494949]">Crossing Republik, Ghaziabad</p>
              </div>
            </div>
            <img
              src="/images/school-logo-1.svg"
              alt="logo"
              className="w-20 h-20 -mt-28 lg:w-24 lg:h-24 object-contain lg:-mt-0"
            />
          </div>
          <hr className="mb-4" />
          <p className="relative z-10 leading-relaxed text-xs lg:text-lg lg:leading-[32px]">
            I have gone through a number of interactions with Mr. Harish
            Kharbhanda and Mr. Rohit Jha, found them to be very innovative in
            their teaching style and terminology. <br />
            <br />
            All the video lectures and modules are very supportive in this
            teaching learning activity. <br />I am thankful for all their
            efforts.
          </p>
          <div className=" absolute right-6 bottom-0 hidden lg:block">
            <img
              src="/images/comma.svg"
              alt="comma"
              className="lg:w-20 w-12 h-12 lg:h-20 object-contain right-0"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default TeacherReviews
