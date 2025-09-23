import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F0B0C] to-[#1d0600] pt-30 pb-20 md:pt-50 md:pb-10    text-white">
      <div className="max-w-[1440px] container mx-auto flex flex-col items-center justify-between gap-12 px-4 md:flex-row lg:px-10">
        {/* Left Content Section */}
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-2 text-sm font-semibold text-gray-400">
            15-17 December National IT Hall
          </p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl ">
            Tech Innovation Event 2025
          </h2>
          <p className="mb-8 text-base text-gray-300">
            Tech Innovation Event 2025: Unveiling breakthrough technologies and
            networking opportunities for industry pioneers.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <button className="rounded-lg border-2 border-purple-600 hover:bg-purple-600 active:bg-purple-600 text-purple-600 px-8 py-3 font-semibold transition-colors duration-300 hover:text-white">
              Buy Tickets
            </button>
            <button className="rounded-lg border-2 border-purple-600 px-8 py-3 font-semibold text-purple-600 transition-colors duration-300 hover:bg-purple-600 active:bg-purple-600 hover:text-white">
              See Schedule
            </button>
          </div>
          <div className="mt-20 hidden md:block">
            <img src="herovector1.png" alt="" />
          </div>
        </div>

        {/* Right Image Collage Section */}
        <div className="hidden md:block">
          <img src="herovector2.png" alt="" />
        </div>
        <div>
          <img src="heroimg.png" alt="" />
        </div>
      </div>
    </section>
  );
}
