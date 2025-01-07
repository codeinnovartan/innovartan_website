

const TermsCondition = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-4 font-metropolis lg:-mt-5">
      <div className="w-full md:w-2/3 p-8 bg-white  relative">
        <div className="absolute inset-0 flex items-center justify-center ">
          <img
            src="/images/watermark-img.svg"
            alt="Watermark"
            className="hidden lg:block md:block"
          />
        </div>
        <h1 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold mb-6 relative z-10">
        Terms & Conditions
        </h1>
        <div className="  lg:border lg:border-[#E7EDF6] rounded-2xl lg:px-12 lg:py-8">
          <p className="mb-4  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal relative z-10">
          Welcome to Innovartan. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>
          <section className="mb-6 relative z-10">
            <h2 className=" text-sm leading-6 lg:text-xl lg:leading-[38px] font-medium">
            <span className="font-medium">1. Acceptance of Terms:</span>
            {" "} By using our website or services, you agree to comply with these Terms and Conditions, along with any applicable laws and regulations.
            </h2>
          </section>
          <section className="mb-6 relative z-10">
            <h2 className=" text-sm leading-6 lg:text-xl lg:leading-[38px] font-medium">
            2. Use of Website:
            </h2>
            <ul className="list-disc pl-6 mt-2 text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <li>
              You must use our website for lawful purposes only and refrain from engaging in any activity that could harm the website or its functionality.
              </li>
              <li>
              You are responsible for maintaining the confidentiality of your account and login information.
              </li>
            </ul>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2 text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">
              3. Services Provided:
              </span>{" "}
              Innovartan provides educational resources, training, and assessments related to competitive exams and school board exams. The content and services are subject to change at any time without prior notice.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">4. Payment Terms:</span>{" "}
              <ul className="list-disc pl-6 mt-2 text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <li>
              Some services may require payment. All payments must be made as per the terms specified at the time of purchase.
              </li>
              <li>
              We reserve the right to change pricing, billing methods, and terms at any time.
              </li>
            </ul>
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">5. Intellectual Property:</span> {" "}
              All content, materials, and services on this website are owned by Innovartan and are protected by intellectual property laws. You may not use, reproduce, or distribute any content without prior written consent.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">
              6. Limitation of Liability:
              </span>{" "}
              Innovartan is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or services. We make no warranties regarding the accuracy or completeness of the content provided.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">          
               7. Termination of Access:
              </span>{" "}
              We reserve the right to terminate or suspend your access to the website and services at our discretion if you violate these Terms and Conditions.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">          
              8. Privacy:
              </span>{" "}
              By using our website, you agree to the collection and use of your personal data as outlined in our Privacy Policy.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">          
              9. Governing Law: 
              </span>{" "}
              These Terms and Conditions are governed by the laws of India , and any disputes will be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">          
              10. Changes to Terms: 
              </span>{" "}
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.
            </p>
          </section>
        </div>
      </div>
      <aside className="w-full md:w-1/3 p-4 lg:mt-20">
        <div
          className="bg-gradient-to-r from-[#ECFFDB] to-[#FFFFFF]
          p-6 mb-6 rounded-2xl">
          <div className="flex flex-row-reverse justify-center  gap-4 ">
            <img
              src="/images/contactus.svg"
              alt="contact"
              className="w-14 h-14 lg:mb-5"
            />
            <div>
              <p className=" text-sm leading-[18px] text-[#494949] lg:text-black lg:text-2xl font-normal">
                If you have any query please
              </p>
              <h3 className="text-base  lg:text-2xl font-bold">
                contact us at
              </h3>
              <div className="text-[#0743A3] text-base lg:text-[26px] lg:leading-9 font-bold mt-5">
                <a href="mailto:info@innovartan.com">info@innovartan.com</a>
                <br />
                <a href="tel:+919319 888 783">+91 9319 888 783</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-b from-[#FFF5EF] to-[#FFFFFF]
        p-6 mb-6 rounded-2xl flex"
        >
          <div className="">
            <h3 className="text-base lg:text-2xl  font-bold ">
              Transform Your <span className="text-[#F36421]">School</span> with
              Innovartan
            </h3>
            <p className=" text-sm lg:text-base text-[#494949]">
              Empowering schools today for the leaders of tomorrow.
            </p>
            <button
              className="mt-4 bg-[#F36421] text-xs font-medium text-white lg:py-2 px-4 py-3 rounded-xl
             hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent transition ease-in duration-300"
            >
              Get Started
            </button>
          </div>
          <div>
            <img
              src="/images/contact-img1.png"
              alt="contact-innovartan"
              className="w-64 h-52"
            />
          </div>
        </div>
        <div className=" p-6 mb-6 rounded-2xl bg-gradient-to-l from-[#002A6C] to-[#001A44] flex">
          <div className="text-white">
            <h3 className=" text-base lg:text-2xl font-bold">
              Become a <span className="text-[#F36421]">Certified</span>{" "}
              Educator with Innovartan
            </h3>
            <p className="text-sm text-[#E7EDF6] lg:text-base">
              Join our community of skilled educators and unlock new
              opportunities.
            </p>
            <button
              className="mt-4 bg-[#F36421] text-xs font-medium text-white lg:py-2 px-6  py-3 rounded-xl
             hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent  transition ease-in duration-300"
            >
              Talk to Us
            </button>
          </div>
          <div className="relative">
            <img
              src="/images/contact-img2.png"
              alt="contact"
              className="relative z-10 lg:-bottom-6 lg:h-56 lg:w-72 h-44 w-80 -bottom-14 "
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#E7EDF6] to-[#FFFFFF] p-6 mb-6 rounded-2xl">
          <h1 className=" lg:text-2xl font-bold lg:mb-3 lg:w-[80%]">
            Achieve Your <span className="text-[#F36421]">Goals </span> With
            Innovartan
          </h1>
          <p className=" text-[#494949] lg:text-base  font-medium lg:mb-3">
            Celebrating Milestones in Empowering Education and Transforming
            Lives!!
          </p>
          <div className="flex justify-center">
            <button className="w-full max-w-xs mt-4 bg-[#F36421] text-base font-medium text-white py-2 px-8 rounded-xl  hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent  transition ease-in duration-300">
              Get Started
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TermsCondition;
