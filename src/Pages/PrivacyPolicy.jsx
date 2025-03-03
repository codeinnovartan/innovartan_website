const PrivacyPolicy = () => {
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
        <h1 className="  text-[32px] leading-[40px] md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold mb-6 relative z-10">
          Privacy Policy
        </h1>
        <div className="  lg:border lg:border-[#E7EDF6] rounded-2xl lg:px-12 lg:py-8">
          <p className="mb-4  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal relative z-10">
            At Innovartan, we value the privacy of our users and are committed
            to protecting the personal information you share with us. This
            Privacy Policy outlines the types of personal data we collect, how
            we use it, and the measures we take to safeguard your information.
          </p>
          <section className="mb-6 relative z-10">
            <h2 className=" text-sm leading-6 lg:text-xl lg:leading-[38px] font-medium">
              1. Information We Collect:
            </h2>

            <ul className="list-disc pl-6 mt-2 text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <li>
                {" "}
                Personal Information: When you register on our website,
                subscribe to our services, or fill out a form, we may collect
                personal details such as your name, email address, phone number,
                and educational background.
              </li>
              <li>
                {" "}
                Usage Data: We collect data about how you use our website and
                services, such as pages visited, time spent on the site, and
                interaction with content.
              </li>
            </ul>
          </section>
          <section className="mb-6 relative z-10">
            <h2 className=" text-sm leading-6 lg:text-xl lg:leading-[38px] font-medium">
              2. How We Use Your Information:
            </h2>
            <ul className="list-disc pl-6 mt-2 text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <li>
                To provide and improve our services, including personalized
                content.
              </li>
              <li>
                To communicate with you, including promotions and notifications.
              </li>
              <li>
                To enhance the user experience through data analysis and
                optimization.
              </li>
            </ul>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2 text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">
                3. How We Protect Your Information:
              </span>{" "}
              We implement a variety of security measures to ensure the
              protection of your personal information, including encryption,
              firewalls, and access controls.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">4. Sharing Your Information:</span>{" "}
              We do not sell, rent, or trade your personal information to third
              parties. We may share your information with trusted partners to
              perform functions on our behalf.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">5. Your Rights:</span> You have the
              right to access, correct, or delete your personal information at
              any time. You can also opt-out of receiving marketing
              communications by following the unsubscribe instructions in any
              email you receive from us.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">
                6. Cookies and Tracking Technologies:
              </span>{" "}
              Our website may use cookies and similar technologies to improve
              user experience, analyze site traffic, and provide personalized
              content. You can control cookie settings through your browser.
            </p>
          </section>
          <section className="mb-6 relative z-10">
            <p className="mt-2  text-sm leading-6 lg:text-xl lg:leading-[38px] font-normal">
              <span className="font-medium">
                7. Changes to This Privacy Policy:
              </span>{" "}
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the date of the most recent
              revision will be indicated at the top.
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
             hover:text-[#F36421] hover:border hover:border-[#F36421] hover:bg-transparent  transition ease-in duration-300"
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

export default PrivacyPolicy;
