// eslint-disable-next-line react/prop-types
const MissionCard = ({ imageSrc, title, description }) => {
    return (
      <div className="bg-[#19325d] rounded-2xl lg:px-6 lg:py-4 p-2 relative font-metropolis flex justify-center items-center gap-2">
        <div className="flex gap-4 lg:flex-col">
          <img src={imageSrc} alt={title} className="w-14 h-14 object-contain" />
          <div className="flex flex-col lg:mt-2">
       <h3 className="text-white text-sm lg:text-2xl font-bold lg:mb-2">{title}</h3>
       <p className="text-white text-xs lg:text-xl font-normal">{description}</p>
       </div>
        </div>
      </div>
    );
  };
  export default MissionCard;