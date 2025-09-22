import React from "react";

export default function LogoCarousel() {
  return (
    <section className=" bg-[#f4f0d8] py-7 md:py-10 ">
      <div className="max-w-[1440px] px-4 lg:px-10 text-lg overflow-x-hidden gap-5  lg:text-2xl mx-auto flex justify-between text-[#3F3C3D] ">
        <div className="flex items-center ">
          <span role="img" aria-label="sparks">
            ✨
          </span>
          <span className="font-semibold ">Logoipsum</span>
        </div>
        <div className="flex items-center">
          <span role="img" aria-label="sparks">
            ✨
          </span>
          <span className="font-semibold ">logoipsum</span>
        </div>
        <div className="flex items-center ">
          <span role="img" aria-label="logo-icon">
            📱
          </span>
          <span className="font-semibold ">logoipsum</span>
        </div>
        <div className="flex items-center ">
          <span role="img" aria-label="logo-icon">
            🪖
          </span>
          <span className="font-semibold ">Logoipsum</span>
        </div>
        <div className="flex items-center ">
          <span role="img" aria-label="logo-icon">
            👁️
          </span>
          <span className="font-semibold ">logoipsum</span>
        </div>
      </div>
    </section>
  );
}
