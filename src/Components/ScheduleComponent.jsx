import React from "react";

function ScheduleComponent() {
  return (
    <section className="relative py-10 bg-white">
      {/* Note: Absolute positioning with fixed values can be problematic for responsiveness. */}
      {/* You may want to use a different approach or adjust these for various screen sizes. */}
      <img src="herovector2.png" alt="" className="hidden md:block absolute md:left-10 lg:left-30 top-32" />
      <img src="scheduleicon.png" alt="" className="hidden w-20 md:block absolute md:right-10 lg:right-30 top-32" />
      <div className="max-w-[1440px] px-4 md:px-10 mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
          Browse all the schedule
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-lg">
          Explore the complete event schedule to find sessions, speakers, and
          activities that match your interests and needs.
        </p>
      </div>
    </section>
  );
}

export default ScheduleComponent;