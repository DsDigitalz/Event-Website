import React from "react";

function SpeakersHeading() {
  return (
    <section className=" bg-[#FFF5D9] py-10 md:py-15">
      <div className="max-w-[1440px] mx-auto lg:px-10  px-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className=" flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#171717] text-center md:text-left">
            Meet the top <br className="hidden md:block" /> incredible{" "}
            <span
              className="underline"
              style={{ textDecorationColor: "#F5CC00" }}
            >
              speakers
            </span>
          </h2>
            <img src="teamicon.png" alt="" className="hidden md:block" />
        </div>
        <button className="bg-[#7A38FC] text-white font-semibold py-4 px-8 rounded-lg shadow-lg  hover:bg-purple-600 hover:scale-105   hover:transition-all duration-500 cursor-pointer  ">
          View All Speakers
        </button>
      </div>
    </section>
  );
}

export default SpeakersHeading;
