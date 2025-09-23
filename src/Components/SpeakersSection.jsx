import React from "react";

function SpeakersSection() {
  return (
    <section className="relative bg-[#171717] text-white py-10 lg:pb-20  px-4 ">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 justify-between lg:px-10 ">
        {/* Left Side: Image and Speaker Details */}
        <img
          src="herovector1.png"
          alt=""
          className="hidden lg:block absolute bottom-10 left-20"
        />
        <div className="">
          <img src="speakerimg.png" alt="Main speaker" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left">
          <h2 className="text-center text-2xl md:text-4xl lg: font-bold leading-tight mb-6">
            The event boasts our top creative influencers
          </h2>
          <p className="text-center text-gray-300 mb-10">
            The event features renowned influencers and innovators shaping
            trends and driving creativity across various industries.
          </p>

          {/* Speakers List */}
          <div className="flex flex-col justify-center md:flex-row space-y-8 md:space-y-0 md:space-x-20">
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
        <img
          src="speakericon1.png"
          alt=""
          className="hidden lg:block absolute right-20 top-10"
        />
        <div className="">
          <img
            src="speakerimg2.png"
            alt="Audience member"
            className="lg:mt-20"
          />
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;
