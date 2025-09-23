import React from "react";

function CallToAction() {
  return (
    <section className=" bg-[#fdfceb] py-10 lg:py-20">
      <div className="relative max-w-[1440px] lg:px-10 mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center justify-between pt-10 px-10 lg:py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Let's join the tech achievement
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Let's join the tech achievement: innovate, collaborate, and
              revolutionize the future with cutting-edge technology and
              groundbreaking advancements.
            </p>
            <button className="mt-8 px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">
              Buy Tickets
            </button>
          </div>

        <img
          src="cta-img.png" // Replace with your speaker image
          alt="Speaker"
          className="lg:hidden "
          // Adjust for the specific image layout
        />
          {/* Image */}
          {/* <div className="flex justify-center lg:justify-end z-0"> */}
          {/* </div> */}
        </div>
          <img
            src="cta-img.png" // Replace with your speaker image
            alt="Speaker"
            className="hidden lg:block lg:absolute lg:right-20 lg:bottom-0  lg:w-auto "
            // Adjust for the specific image layout
          />
      </div>
    </section>
  );
}

export default CallToAction;
