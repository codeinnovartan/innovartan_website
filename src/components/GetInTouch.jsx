import { useRef, useState } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    owner_number: "",
    email: "",
    role: "",
    message: "",
    user_id: "4",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      formErrors.name = "Full Name is required.";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      formErrors.name = "Enter Your name ";
      isValid = false;
    }

    if (!formData.owner_number) {
      formErrors.owner_number = "Mobile Number is required.";
      isValid = false;
    } else if (!mobileRegex.test(formData.owner_number)) {
      formErrors.owner_number = "Enter a valid mobile number ";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.role || formData.role === "select") {
      formErrors.role = "Please select your role.";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.length < 10) {
      formErrors.message = "Message should be at least 10 characters.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const apiData = {
      owner_name: formData.name,
      owner_number: formData.owner_number,
      email: formData.email,
      role: formData.role,
      enquiry_message: formData.message,
      user_id: formData.user_id,
    };

    try {
      const response = await axios.post(
        "https://app.innovartan.com/api/mobile/affiliation/create-web-lead",
        apiData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          owner_number: "",
          email: "",
          role: "",
          message: "",
          user_id: "4",
        });
        setErrors({});
        toast.success("Form submitted successfully!");
        emailjs
          .sendForm(
            "service_umf6b9d",
            "template_97n4wig",
            formRef.current,
            "nAWs11i_i9eSe5baV"
          )
          .then(
            () => {
              console.log("email send successfully");
            },
            (error) => {
              console.log("An error occurred.", error);
            }
          );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-12 font-metropolis lg:px-36 bg-[#E7EDF6] lg:bg-transparent mt-5 lg:-mt-10">
      <ToastContainer />
      <div
        id="talk-to-us"
        className="grid lg:grid-cols-2 gap-8 items-center mb-3"
      >
        <div className="hidden sm:block relative">
          <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] -z-10 px-6" />
          <img
            src="/images/innovartan_form_img.png"
            className="relative z-10 max-w-full h-auto md:-bottom-[3.75rem]"
          />
          <div className="absolute top-1/2 right-0 space-y-4 z-20">
            <div className="bg-white rounded-full py-1 px-2 shadow-lg flex items-center gap-3">
              <div className="bg-[#0743A3] p-2 rounded-full">
                <button className="p-1 rounded-full flex justify-center items-center shadow-md">
                  <MdWifiCalling3 className="w-5 h-5 text-white" />
                </button>
              </div>
              <span className="text-base font-medium text-[#0743A3]">
                <a href="tel:+919319888781" className="text-[#0743A3]">
                  Call: +91 9319 888 781
                </a>
              </span>
            </div>
            <div className="bg-white rounded-full py-1 px-2 shadow-lg flex items-center gap-3">
              <div className=" bg-[#0743A3] p-2 rounded-full">
                <button className="p-1 rounded-full flex justify-center items-center shadow-md">
                  <MdOutlineMailOutline className="w-5 h-5 text-white" />
                </button>
              </div>
              <span className="text-base font-medium">
                <a href="mailto:info@innovartan.com" className="text-[#0743A3]">
                  Email: info@innovartan.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className=" pl-0 lg:pl-8">
          <h2 className="text-base text-center sm:text-start  font-bold mb-2 lg:text-[32px] lg:leading-[40px]">
            Get In <span className="text-[#F36421]">Touch</span>
          </h2>
          <p className="text-sm text-center sm:text-start lg:text-base font-medium mb-8">
            Connect with Us to Start Your Journey in Education Excellence
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#0743A3]">
            <h3 className="text-[#0743A3] text-sm lg:text-base font-bold mb-6">
              Let Us Know How We Can we help?
            </h3>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {errors.general && (
                <div className="text-red-500 text-sm mb-4">
                  {errors.general}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-base font-medium mb-2 ml-4 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="w-full rounded-2xl py-2 px-4 border-spacing-y-4 border-2 border-[#E7EDF6]"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                  )}
                </div>
                <div>
                  <label className="block text-base font-medium mb-2 ml-4">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="owner_number"
                    value={formData.owner_number}
                    onChange={handleChange}
                    placeholder="Enter your Mobile No."
                    className="w-full rounded-2xl py-2 px-4 border-2 text-[#494949] border-[#E7EDF6]"
                  />
                  {errors.owner_number && (
                    <div className="text-red-500 text-sm">
                      {errors.owner_number}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-base font-medium mb-2 ml-4">
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full rounded-2xl py-2 px-4 border-2 text-[#494949] border-[#E7EDF6]"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2 ml-4">
                    I am
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-2xl py-2 px-4 border-2 text-[#494949] border-[#E7EDF6] text-left"
                  >
                    <option value="select">Select</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Parent">Parent</option>
                    <option value="School">School</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && (
                    <div className="text-red-500 text-sm">{errors.role}</div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label className="text-base font-medium ml-4 ">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  className="w-full rounded-2xl py-2 mt-2 px-4 border-2 text-[#494949] border-[#E7EDF6]"
                ></textarea>
                {errors.message && (
                  <div className="text-red-500 text-sm">{errors.message}</div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full lg:w-1/3 py-2 px-4 text-base font-medium border border-transparent bg-[#0743A3] text-white rounded-xl hover:text-[#0743A3] hover:border hover:border-[#0743A3] hover:bg-white ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:hidden gap-3">
        <div className="bg-white rounded-full py-1 px-2 shadow-lg flex items-center gap-3">
          <div className="bg-[#0743A3] p-2 rounded-full">
            <button className="p-1 rounded-full flex justify-center items-center shadow-md">
              <MdWifiCalling3 className="w-5 h-5 text-white" />
            </button>
          </div>
          <span className="text-base font-medium text-[#0743A3]">
            <div
              onClick={() => window.open("tel:+919319888781")}
              className="text-[#0743A3] focus:outline-none"
            >
              Call: +919319888781
            </div>
          </span>
        </div>
        <div className="bg-white rounded-full py-1 px-2 shadow-lg flex items-center gap-3">
          <div className=" bg-[#0743A3] p-2 rounded-full">
            <button className="p-1 rounded-full flex justify-center items-center shadow-md">
              <MdOutlineMailOutline className="w-5 h-5 text-white" />
            </button>
          </div>
          <span className="text-base font-medium">
            <div
              onClick={() => window.open("mailto:info@innovartan.com")}
              className="text-[#0743A3] cursor-pointer"
            >
              Email: info@innovartan.com
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
