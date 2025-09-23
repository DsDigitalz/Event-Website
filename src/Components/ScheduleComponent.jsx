import React from "react";

function ScheduleComponent() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white">
      <div className="relative flex items-center justify-center w-full max-w-4xl px-4">
        {/* Left Sparkle */}
        <div className="absolute left-0 lg:left-10">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0L28.18 15.82L44 20L28.18 24.18L24 40L19.82 24.18L4 20L19.82 15.82L24 0Z"
              fill="#F86B4A"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center text-center max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Browse all the schedule
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Explore the complete event schedule to find sessions, speakers, and
            activities that match your interests and needs.
          </p>
        </div>

        {/* Right Sparkle */}
        <div className="absolute right-0 lg:right-10 transform rotate-45">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0L35.225 19.775L55 25L35.225 30.225L30 50L24.775 30.225L5 25L24.775 19.775L30 0Z"
              fill="#8B5CF6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ScheduleComponent;
