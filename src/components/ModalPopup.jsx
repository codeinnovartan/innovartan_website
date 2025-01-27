import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ModalPopup = ({ isOpen, onClose }) => {
  const formRef = useRef(null);

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
   name: "",
    owner_number: "",
    school_name: "",
    role: "",
    message: "",
    user_id:"4",
  });

 
  if (!isOpen) return null;

  const roles = ["Student", "Parents", "Teacher", "Principal"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

  const nameRegex = /^[A-Za-z\s]{3,50}$/; 
  const mobileRegex = /^[6-9]\d{9}$/;

    if (!formData.name) {
      tempErrors.name = "Full Name is required.";
      isValid = false;
    }else if (!nameRegex.test(formData.name)) {
      tempErrors.name = "Enter Your name";
      isValid = false;
    }

    if (!formData.owner_number) {
      tempErrors.owner_number = "Mobile Number is required.";
      isValid = false;
    }else if (!mobileRegex.test(formData.owner_number)) {
      tempErrors.owner_number = "Enter a valid  mobile number .";
      isValid = false;
    }

    if (!formData.school_name) {
      tempErrors.school_name = "School name is required.";
      isValid = false;
    }
    if (!formData.role) {
      tempErrors.role = "Role is required.";
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = "Enquiry message is required.";
      isValid = false;
    }else if (formData.message.length < 10) {
      tempErrors.message = "Message should be at least 10 characters.";
      isValid = false;
    }
    setErrors(tempErrors);
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
          school_name: "",
          role: "",
          message: "",
          user_id:"4",
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <ToastContainer/>
      <div
        className="bg-white rounded-xl shadow-lg w-11/12 sm:w-2/3 lg:w-3/5 p-6 lg:p-4 overflow-y-auto relative max-h-[95vh] "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 "
          onClick={onClose}
        >
          <RxCross2 size={20} />
        </button>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="hidden lg:w-[40%] lg:flex items-center justify-center">
            <img
              src="/images/modal-hero.png"
              alt="Stats Section"
              className="rounded-xl h-[550px]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-base w-[80%] lg:text-xl font-bold text-center lg:text-left ml-5 lg:ml-2">
              Achieve Your Goals With Innovartan
            </h2>
            <p className="text-sm lg:text-base text-[#494949] mb-0 lg:mb-2 text-center lg:text-left ml-5 lg:ml-2">
              Share your details, our team will reach out to you shortly.
            </p>

            <form className="space-y-1" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm lg:text-base font-medium mb-1 ml-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full rounded-xl py-1 lg:py-2 px-2 lg:px-4 border-2 border-[#E7EDF6]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm lg:text-base font-medium mb-1 ml-2">
                  I am
                </label>
                <div className="flex flex-wrap gap-3 lg:gap-4">
                  {roles.map((role) => (
                    <label key={role} className="flex items-center ml-2">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      {role}
                    </label>
                  ))}
                </div>
                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role}</p>
                )}
              </div>

              <div>
                <label className="block text-sm lg:text-base font-medium mb-1 ml-2">
                  School Name
                </label>
                <input
                  type="text"
                  name="school_name"
                  value={formData.school_name}
                  onChange={handleChange}
                  placeholder="School Name"
                  className="w-full rounded-xl py-1 lg:py-2 px-2 lg:px-4 border-2 border-[#E7EDF6]"
                />
                {errors.school_name && (
                  <p className="text-red-500 text-sm">{errors.school_name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm lg:text-base font-medium mb-1 ml-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="owner_number"
                  value={formData.owner_number}
                  onChange={handleChange}
                  placeholder="Enter your Mobile No."
                  className="w-full rounded-xl py-1 lg:py-2 px-2 lg:px-4 border-2 border-[#E7EDF6]"
                />
                {errors.owner_number && (
                  <p className="text-red-500 text-sm">{errors.owner_number}</p>
                )}
              </div>

              <div>
                <label className="block text-sm lg:text-base font-medium mb-1 ml-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  className="w-full resize-none rounded-xl py-1 lg:py-2 px-2 lg:px-4 border-2 border-[#E7EDF6]"
                  rows="3"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-[100%] py-1 lg:py-2 px-2 lg:px-4 border border-transparent bg-[#F36421] text-white rounded-xl shadow-md hover:bg-transparent hover:text-[#F36421] hover:border hover:border-[#F36421] transition duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
              {errors.submit && (
                <p className="text-red-500 text-center">{errors.submit}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalPopup;
