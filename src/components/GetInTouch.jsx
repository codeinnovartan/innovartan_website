
import { useState } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import axios from "axios";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    owner_name: "",
    owner_number: "",
    email: "",
    role: "",
    enquiry_message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    owner_name: "",
    owner_number: "",
    email: "",
    role: "",
    enquiry_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.owner_name) formErrors.owner_name = "Full Name is required.";
    if (!formData.owner_number) formErrors.owner_number = "Mobile Number is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.role || formData.role === "select") formErrors.role = "Please select your role.";
    if (!formData.enquiry_message) formErrors.enquiry_message = "Message is required.";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://qa.edvanz.com/api/mobile/affiliation/create-web-lead",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          owner_name: "",
          owner_number: "",
          email: "",
          role: "",
          enquiry_message: "",
        });
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ general: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-12 font-metropolis lg:px-36 bg-[#E7EDF6] lg:bg-transparent mt-5 lg:-mt-10">
      <div id="talk-to-us" className="grid lg:grid-cols-2 gap-8 items-center mb-3">
        <div className="hidden sm:block relative">
          <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] -z-10 px-6" />
          <img
            src="/images/teacher2.svg"
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
        <div className="lg:pl-8">
          <h2 className="text-xl text-center sm:text-start sm:text-5xl font-bold mb-2 lg:text-[40px] lg:leading-[48px]">
            Get In <span className="text-[#F36421]">Touch</span>
          </h2>
          <p className="text-base text-center sm:text-start sm:text-xl font-medium mb-8">
            Connect with Us to Start Your Journey in Education Excellence
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#0743A3]">
            <h3 className="text-[#0743A3] text-xl sm:text-3xl font-bold mb-6 lg:text-3xl">
              Let Us Know How We Can we help?
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {errors.general && (
                <div className="text-red-500 text-sm mb-4">{errors.general}</div>
              )}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-base font-medium mb-2">Full Name</label>
                  <input
                    name="owner_name"
                    value={formData.owner_name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="w-full rounded-2xl py-2 px-4 border-spacing-y-4 border-2 border-[#E7EDF6]"
                   
                  />
                  {errors.owner_name && <div className="text-red-500 text-sm">{errors.owner_name}</div>}
                </div>
                <div>
                  <label className="block text-base font-medium mb-2">Mobile Number</label>
                  <input
                    type="text"
                    name="owner_number"
                    value={formData.owner_number}
                    onChange={handleChange}
                    placeholder="Enter your Mobile No."
                    className="w-full rounded-2xl py-2 px-4 border-2 text-[#494949] border-[#E7EDF6]"
                 
                  />
                  {errors.owner_number && <div className="text-red-500 text-sm">{errors.owner_number}</div>}
                </div>
                <div>
                  <label className="block text-base font-medium mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full rounded-2xl py-2 px-4 border-2 text-[#494949] border-[#E7EDF6]"
                  
                  />
                  {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2">Are you?</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-2xl py-2 px-4 border-2 text-[#494949] border-[#E7EDF6] text-left"
               
                  >
                    <option value="select" >
                      Select
                    </option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Parent">Parent</option>
                    <option value="School">School</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <div className="text-red-500 text-sm">{errors.role}</div>}
                </div>
              </div>
              <div className="w-full">
                <label className="text-base font-medium">Message</label>
                <textarea
                  name="enquiry_message"
                  value={formData.enquiry_message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  className="w-full rounded-2xl py-2 mt-2 px-4 border-2 text-[#494949] border-[#E7EDF6]"
                 
                ></textarea>
                {errors.enquiry_message && (
                  <div className="text-red-500 text-sm">{errors.enquiry_message}</div>
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
            <a href="tel:+919319888781" className="text-[#0743A3]">
              Call:+919319888781
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
  );
}
