

export const BringInnovartan = () => {
  return (
    <section className="relative bg-white py-6 lg:py-12 lg:mb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-lg lg:text-[40px] lg:leading-[48px] font-bold text-center mb-6 lg:mb-12">
          What Innovartan Brings to Your{" "}
          <span className="text-[#F36421]">School</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 gap-8 lg:gap-0 relative">
          <div className="bg-white shadow-lg rounded-xl p-4 lg:p-6 text-center border-l-4 border-[#F36421] relative">
            <img
              src="/images/Faculty Support.svg"
              alt="Faculty Support"
              className="w-20 h-16 mx-auto mb-8"
            />
            <p className="text-base lg:text-2xl font-bold">Faculty Support</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-4 lg:p-6 text-center border-l-4 border-[#F36421] relative sm:top-0 lg:top-32 lg:-left-8">
            <img
              src="/images/learning-solution.svg"
              alt="Integrated Learning Programs"
              className="w-20 h-16 mx-auto mb-4"
            />
            <p className="text-base lg:text-2xl font-bold">
              Integrated Learning Programs
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center border-l-4 border-[#F36421] relative lg:-left-16">
            <img
              src="/images/Student Success.svg"
              alt="Student Success"
              className="w-20 h-16 mx-auto mb-8"
            />
            <p className="text-base lg:text-2xl font-bold">Student Success</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center border-l-4 border-[#F36421] relative sm:top-0 lg:top-32 lg:-left-20">
            <img
              src="/images/Teacher Training.svg"
              alt="Teacher Training"
              className="w-20 h-16 mx-auto mb-8"
            />
            <p className="text-base lg:text-2xl font-bold">Teacher Training</p>
          </div>
        </div>
      </div>
    </section>
  )
}
