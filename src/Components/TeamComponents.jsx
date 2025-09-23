import React from "react";

function TeamComponents() {
  const scheduleData = [
    {
      title: "The Future of Digital Innovation",
      speaker: "Make Toretio",
      time: "10:00 AM - 11:00 AM",
      description:
        "The Future of Digital Innovation. Harnessing emerging technologies to revolutionize industries, enhance user experiences, and drive unprecedented growth in a rapidly evolving digital landscape.",
      image:
        "team1.png",
      color: "bg-yellow-50",
    },
    {
      title: "Trends AI and Machine Learning",
      speaker: "David Brown",
      time: "11:15 AM - 12:30 PM",
      description:
        "AI and Machine Learning are revolutionizing industries by enabling advanced data analysis, personalized experiences, and intelligent automation, paving the way for smarter and more efficient solutions across various sectors.",
      image:
        "team2.png",
      color: "bg-purple-50",
    },
    {
      title: "Digital Marketing for a New Era",
      speaker: "Jenifer Moore",
      time: "2:00 PM - 3:00 PM",
      description:
        "Navigate the evolving landscape of digital marketing in a new era, harnessing innovative strategies and technologies to create compelling campaigns that resonate with audiences and drive business growth.",
      image:
        "team3.png",
      color: "bg-blue-50",
    },
    {
      title: "Introduction to Blockchain",
      speaker: "Emily Davis",
      time: "3:00 PM - 4:00 PM",
      description:
        "Blockchain introduction. Decentralized ledger tech records secure, transparent, immutable transactions across networks, transforming finance and supply chain management.",
      image:
        "team4.png",
      color: "bg-red-50",
    },
  ];

  return (
    <section className="bg-white py-5 md:pt-10 md:pb-20 l max-w-[1440px] px-4 lg:px-10  mx-auto flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl    w-full border border-gray-200">
        {/* Header Section */}
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold text-lg">Day 1</span>
            <span className="ml-4 text-gray-400 text-sm md:text-base">
              Sunday, December 2025
            </span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">
            Innovation & Technology
          </span>
        </div>

          {/* Lunch Break Item */}
        {/* Schedule Items */}
        <div className="p-6 space-y-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 border-l-4 ${item.color} border-gray-200 transition-shadow hover:shadow-lg`}
            >
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.speaker}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 md:text-base">
                  By {item.speaker}
                </p>
                <p className="text-gray-500 mt-2 text-sm hidden sm:block">
                  {item.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-right md:w-32">
                <span className="font-medium text-gray-800">{item.time}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center py-6 px-4 text-center">
            <div className="border-t border-b border-gray-300 w-full flex flex-col items-center">
              <span className="text-lg font-medium text-gray-800 py-2">
                Lunch Break & Networking
              </span>
              <span className="text-gray-500 text-sm py-2">
                12:30 PM - 2:00 PM
              </span>
            </div>
          </div>


          {/* This part of the image is not covered in the data above, so it is hardcoded */}
          
        </div>

        {/* Footer Button */}
        <div className="p-7 flex justify-center border-t border-gray-200">
          <button className="bg-[#7A38FC] text-white font-semibold py-3 px-8 rounded-lg shadow-lg cursor-pointer hover:bg-purple-600 transition-colors">
            See All Schedule
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeamComponents;
