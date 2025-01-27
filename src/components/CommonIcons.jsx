
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { Tooltip } from 'react-tooltip';

export const CommonIcons = () => {
  const handleEmailClick = () => {
    window.open("mailto:info@innovartan.com", "_blank")
  };

  const handleCallClick = () => {
    window.open("tel:+919319888781", "_blank")
    
  };


  const handleWhatsappClick = () => {
    window.open("https://wa.me/918130907972", "_blank")
  };

  const handleMessageClick = () => {
    window.open("sms:+91931988878", "_blank") 
  };

  return (
    <>
      <div className="fixed right-10 bottom-10 hidden sm:flex sm:flex-col space-y-4 z-50">
        <button
          onClick={handleEmailClick}
          data-tooltip-id="email-tip"
          className="bg-[#1b90bc] p-3 rounded-full shadow-lg flex justify-center items-center"
        >
          <MdOutlineMailOutline className="w-5 h-5 text-white" />
        </button>
        <Tooltip id="email-tip" place="left" content="Email Us" />

        <button
          onClick={handleCallClick}
          data-tooltip-id="call-tip"
          className="bg-[#F36421] p-3 rounded-full shadow-lg flex justify-center items-center"
        >
          <IoCall className="w-5 h-5 text-white" />
        </button>
        <Tooltip id="call-tip" place="left" content="Call Us" />

        <button
          onClick={handleWhatsappClick}
          data-tooltip-id="whatsapp-tip"
          className="bg-green-500 p-3 rounded-full shadow-lg flex justify-center items-center"
        >
          <FaWhatsapp className="w-5 h-5 text-white" />
        </button>
        <Tooltip id="whatsapp-tip" place="left" content="WhatsApp" />

        <button
          onClick={handleMessageClick}
          data-tooltip-id="message-tip"
          className="bg-[#0743a3] p-3 rounded-full shadow-lg flex justify-center items-center"
        >
          <RiMessage2Line className="w-5 h-5 text-white" />
        </button>
        <Tooltip id="message-tip" place="left" content="Chat" />
      </div>
    </>
  );
};
