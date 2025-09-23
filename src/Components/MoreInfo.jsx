import React from "react";

function MoreInfo() {
  return (
    <section className=" bg-[#FFF5D9] py-16">
      <div className="max-w-[1440px] mx-auto lg:px-10  px-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className=" flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#171717] text-center md:text-left">
            More from Monks Event
          </h2>
          {/* <img src="teamicon.png" alt="" className="hidden md:block" /> */}
        </div>
        <button className="border border-[#7A38FC] font-semibold py-4 px-8 rounded-lg shadow-lg  hover:bg-purple-600 hover:scale-105 hover:text-white text-black  hover:transition-all duration-500 cursor-pointer  ">
          Follow on Instagram
        </button>
      </div>
    </section>
  );
}

export default MoreInfo;
