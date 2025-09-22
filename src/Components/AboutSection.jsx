import React from "react";

function AboutSection() {
  return (
    <section className="relative bg-white px-4 py-20">
      <img src="aboutimg2.png" alt="" className="absolute left-0 bottom-5 w-20" />
      <img src="aboutimg.png" alt="" className="absolute right-0 top-0" />
      <div className="px-4 lg:px-10 max-w-[1440px] mx-auto flex flex-col items-center justify-between space-y-4 md:space-y-4 lg:flex-row ">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#111111]">
          About the event
        </h2>
        <p className="text-center lg:w-[50%] lg:text-start text-[#111111] leading-relaxed">
          <span className="text-[#7A38FC] font-semibold">Tech Event 2025 </span>
          showcases groundbreaking innovations, featuring keynote talks,
          interactive workshops, and networking sessions for tech enthusiasts
          and industry leaders.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
