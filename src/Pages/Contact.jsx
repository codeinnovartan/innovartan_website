import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
// import DownloadNow from '../components/DownloadNow'
import GetInTouch from "../components/GetInTouch";

const ContactUs = () => {
  return (
    <>
      <div className="bg-white min-h-screen font-metropolis">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 w-full bg-white">
          <header className="flex flex-col items-start justify-start mb-8 w-full">
            <h1 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[44px] font-bold">
              Contact Us
            </h1>
          </header>
          <section className="bg-white lg:bg-[#E7EDF6] rounded-2xl lg:px-6 py-2 lg:py-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <div className="flex flex-col items-start text-center bg-white shadow-md rounded-2xl p-6">
                <div className="flex items-center justify-center w-14 h-14 bg-[#9821F3] rounded-full">
                  <FaLocationDot className="text-white p-2 rounded-full w-12 h-12" />
                </div>
                <h3 className="mt-4 text-lg font-bold ">Office Address</h3>
                <p className="mt-2 text-lg leading-[22px] text-start">
                  H-151, GIPL Tower, Sector 63, Noida, U.P India 201301
                </p>
              </div>
              <div className="flex flex-col items-start text-center bg-white shadow-md rounded-2xl p-6">
                <div className="flex items-center justify-center w-14 h-14 bg-[#F36421] rounded-full">
                  <BiSolidPhoneCall className="text-white p-2 rounded-full w-12 h-12" />
                </div>
                <h3 className="mt-4 text-lg font-bold ">Phone Number</h3>
                <p className="mt-2 text-lg leading-[22px] text-start">
                  <a href="tel:+918130907972" className="hover:underline">
                    +91 8130907972
                  </a>
                  <br />
                  <a href="tel:+919319888781" className="hover:underline">
                    +91 9319888781
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-start text-center bg-white shadow-md rounded-2xl p-6">
                <div className="flex items-center justify-center w-14 h-14 bg-[#1CB2B7] rounded-full">
                  <MdEmail className="text-white p-2 rounded-full w-12 h-12" />
                </div>
                <h3 className="mt-4 text-lg font-bold ">Email Address</h3>
                <p className="mt-2 text-lg leading-[22px] text-start">
                  <a href="mailto:info@innovartan.com" className="hover:underline"> info@innovartan.com</a>
                  <a href="mailto:contact@innovartan.com" className="hover:underline"> contact@innovartan.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-3 lg:py-4 grid grid-cols-1 gap-6 h-[300px] lg:h-[500px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.64480204455!2d77.40182545!3d28.5222018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bc323d36b4e75cd%3A0xdd843f8853726a36!2sInnovartan%20Learning%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1736091470237!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg border-0"
            title="Company Location"
          ></iframe>
        </div>
      </div>
      {/* <DownloadNow/> */}
      <GetInTouch />
    </>
  );
};

export default ContactUs;
