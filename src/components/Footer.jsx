import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#00163A] text-white font-metropolis">
      <div className=" mx-auto px-4 sm:px-6 lg:px-36 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <img
              src="/images/footer-logo.svg"
              alt="footer-logo"
              className="w-28 sm:w-auto"
            />
            <p className="mt-4 text-lg">
              Empowering Schools & students with comprehensive, future-focused
              training and support to excel in today’s competitive educational
              landscape.
            </p>
            <div className="mt-4 hidden sm:block">
              <h3 className="text-lg font-semibold mb-2">Download App</h3>
              <div className="flex space-x-4">
                <img
                  src="/images/app-btn.svg"
                  alt="App Store"
                  className="h-10"
                />
                <img
                  src="/images/store-btn.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:hidden md:justify-start  lg:md:justify-start xl:justify-start  justify-center gap-3">
            <ul className="flex gap-3">
              {[
                {
                  icon: FaFacebookF,
                  link: " https://www.facebook.com/innovartan/",
                },
                { icon: FaXTwitter, link: " https://x.com/innovartan" },
                {
                  icon: FaLinkedinIn,
                  link: " https://www.linkedin.com/company/innovartan",
                },
                {
                  icon: FaInstagram,
                  link: ": https://www.instagram.com/innovartan",
                },
                {
                  icon: FaYoutube,
                  link: " https://www.youtube.com/@Innovartanlearning",
                },
              ].map(({ icon: Icon, link }, idx) => (
                <li
                  key={idx}
                  className="bg-[#073278] rounded-lg p-3 text-center flex justify-center items-center"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-base md:text-lg text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link to="/students-parents" className="hover:underline">
                    Students / Parents
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="hover:underline">
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className="hover:underline">
                    Schools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link to="/mission" className="hover:underline">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/investors" className="hover:underline">
                    Our Investors
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">More</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="hover:underline">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:hidden">
          <h3 className="text-lg font-semibold mb-2">Download App</h3>
          <div className="flex space-x-4">
            <img src="/images/app-btn.svg" alt="App Store" className="h-10" />
            <img
              src="/images/store-btn.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
        <h1 className=" hidden sm:flex text-lg md:text-xl font-bold mt-8">
          Follow us
        </h1>
        <div className="hidden sm:flex sm:flex-wrap justify-between items-center gap-4 pt-1">
          <div className="hidden sm:flex sm:flex-wrap justify-start gap-3 mb-4 md:mb-0">
            <ul className="flex gap-3">
              {[
                {
                  icon: FaFacebookF,
                  link: " https://www.facebook.com/innovartan/",
                },
                { icon: FaXTwitter, link: " https://x.com/innovartan" },
                {
                  icon: FaLinkedinIn,
                  link: " https://www.linkedin.com/company/innovartan",
                },
                {
                  icon: FaInstagram,
                  link: ": https://www.instagram.com/innovartan",
                },
                {
                  icon: FaYoutube,
                  link: " https://www.youtube.com/@Innovartanlearning",
                },
              ].map(({ icon: Icon, link }, idx) => (
                <li
                  key={idx}
                  className="bg-[#073278] rounded-lg p-3 text-center flex justify-center items-center"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-base md:text-lg text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap justify-start gap-3">
            <div className="flex items-center bg-white bg-opacity-10 rounded-full gap-2 px-4 py-2">
              <FaPhoneVolume className="text-3xl bg-[#073278] p-2 rounded-full" />
              <a
                href="tel:+919319888783"
                className="text-sm md:text-base font-medium text-inherit"
              >
                Call: +91 9319 888 783
              </a>
            </div>

            <div className="flex items-center bg-white bg-opacity-10 rounded-full gap-2 px-4 py-2">
              <MdEmail className="text-3xl bg-[#073278] p-2 rounded-full" />
              <a
                href="mailto:info@innovartan.com"
                className="text-sm md:text-base font-medium"
              >
                Email: info@innovartan.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00122E] px-4 py-4 text-center text-sm">
        Copyright © {new Date().getFullYear()} Innovartan Learning Solutions Pvt
        Ltd | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
