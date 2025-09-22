import React from "react";

function SpeakersHeading() {
  return (
    <section className="bg-[#E7E2C9] py-16">
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
          <div className="relative h-12 w-12 hidden md:block">
            <svg
              className="absolute top-0 left-0 w-full h-full text-yellow-500"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.40578 48.9774C3.80578 47.9774 2.80578 48.9774 1.80578 50.9774C0.805781 52.9774 1.80578 53.9774 3.80578 54.9774C5.80578 55.9774 6.80578 54.9774 7.80578 52.9774C8.80578 50.9774 7.80578 49.9774 5.40578 48.9774Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M10.4058 48.9774C8.80578 47.9774 7.80578 48.9774 6.80578 50.9774C5.80578 52.9774 6.80578 53.9774 8.80578 54.9774C10.8058 55.9774 11.8058 54.9774 12.8058 52.9774C13.8058 50.9774 12.8058 49.9774 10.4058 48.9774Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M15.4058 48.9774C13.8058 47.9774 12.8058 48.9774 11.8058 50.9774C10.8058 52.9774 11.8058 53.9774 13.8058 54.9774C15.8058 55.9774 16.8058 54.9774 17.8058 52.9774C18.8058 50.9774 17.8058 49.9774 15.4058 48.9774Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <button className="bg-[#7A38FC] text-white font-semibold py-4 px-8 rounded-full shadow-lg  hover:bg-[#5900ff] hover:scale-105   hover:transition-all duration-500 cursor-pointer  ">
          View All Speakers
        </button>
      </div>
    </section>
  );
}

export default SpeakersHeading;
