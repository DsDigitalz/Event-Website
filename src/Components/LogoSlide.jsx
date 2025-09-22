import React from "react";

function LogoSlide() {
  return (
    <section className=" bg-[#E7E2C9] py-7 ">
      <div className="max-w-[1440px] mx-auto text-lg gap-20 lg:text-2xl grid justify-items-center grid-cols-3  sm:grid-cols-5 text-[#3F3C3D] ">
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

export default LogoSlide;
