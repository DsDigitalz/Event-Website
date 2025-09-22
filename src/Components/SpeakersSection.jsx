import React from "react";

function SpeakersSection() {
  return (
    <div className="relative bg-[#171717] text-white py-20 px-4 overflow-hidden">
      <div className="absolute top-0 right-1/4 transform -translate-x-1/2 rotate-45 text-yellow-300 text-6xl">
        <span role="img" aria-label="sparks">
          ✨
        </span>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-12 text-blue-400 text-8xl">
        <span role="img" aria-label="swirl">
          🌀
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Side: Image and Speaker Details */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1596541223130-5d31a73f919f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main speaker"
            className="w-full lg:w-[48rem] rounded-full object-cover aspect-square border-8 border-[#3F3C3D]"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The event boasts our top creative influencers
          </h2>
          <p className="text-base text-gray-300 mb-10">
            The event features renowned influencers and innovators shaping
            trends and driving creativity across various industries.
          </p>

          {/* Speakers List */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
            {/* Speaker 1 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-semibold mb-2">Sarah Johnson</span>
              <span className="text-lg text-gray-400">December 15, 2025</span>
              <span className="text-lg text-gray-400">10:00 AM - 11:30 AM</span>
            </div>

            {/* Speaker 2 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-semibold mb-2">
                Christopher Wilson
              </span>
              <span className="text-lg text-gray-400">December 17, 2025</span>
              <span className="text-lg text-gray-400">12:00 PM - 2:00 PM</span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block absolute right-[-10rem] top-1/2 transform -translate-y-1/2">
          <img
            src="https://images.unsplash.com/photo-1534531173874-9786a3d9029a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Audience member"
            className="w-[28rem] h-[36rem] object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SpeakersSection;
