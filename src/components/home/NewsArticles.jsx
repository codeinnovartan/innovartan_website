// import { IoIosArrowForward } from "react-icons/io";
// import { IoShareSocialOutline } from "react-icons/io5";

const NewsArticles = () => {
  const articles = [
    {
      id: 1,
      image: "/images/article-img1.png",
      category: "ENTRACKR",
      date: "05 Nov 2024",
      title: "Innovartan Learning raised Rs 5 Cr in pre-seed round",
    },
    {
      id: 2,
      image: "/images/article-img2.png",
      category: "Articles",
      date: "05 Nov 2024",
      title: "Transform your school with Innovartan",
    },
    {
      id: 3,
      image: "/images/article-img3.png",
      category: "Articles",
      date: "05 Nov 2024",
      title: "Building Pathways to an Inclusive & Knowledge-Driven Future",
    },
  ];

  return (
    <section className="py-10 bg-white font-metropolis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" lg:text-[40px] lg:leading-[48px] font-bold text-center -mt-14 mb-5">
          News & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56  p-4 rounded-2xl"
              />
              <div className="p-4">
                <span
                  className={`text-sm font-semibold ${
                    article.category === "ENTRACKR"
                      ? "text-red-600"
                      : "text-[#74ae42]"
                  }`}
                >
                  {article.category}
                </span>
                <p className="text-sm text-[#494949]">{article.date}</p>
                <hr className="text-[#494949] m-2" />
                <h3 className="lg:text-xl font-semibold mt-2">
                  {article.title}
                </h3>
                {/* <div className="flex items-center mt-4 space-x-4 -bottom-0">
                  <button className="hidden md:inline-flex justify-center items-center gap-2 text-[#0743A3] mt-4 py-2 px-4 rounded-full border border-1 w-44 border-[#0743A3] font-medium text-base md:text-base">
                    <IoShareSocialOutline className="w-4 h-4 flex-shrink-0" />
                    Share
                  </button>
                  <button className="hidden md:inline-flex justify-center items-center gap-2 text-[#F36421] mt-4 py-2 px-4 rounded-full border border-1 w-44 border-[#F36421] font-medium text-base md:text-base">
                    View Details
                    <IoIosArrowForward className="w-4 h-4 flex-shrink-0" />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
{/* <div className="text-center mt-10">
          <button className="hidden md:inline-flex justify-center items-center gap-2 text-[#F36421] mt-4 py-2 px-4 rounded-full border border-1 w-64 border-[#F36421]  font-medium text-base md:text-base">
            View All
          </button>
        </div>         */}
      </div>
    </section>
  );
};

export default NewsArticles;
