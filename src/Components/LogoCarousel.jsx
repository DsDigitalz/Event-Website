import React from "react";
// import './Carousel.css'; // Import the new CSS file

const logos = [
  { name: "TechNova", icon: "🚀" },
  { name: "CodeConnect", icon: "💻" },
  { name: "InnovateX", icon: "💡" },
  { name: "DataSphere", icon: "📊" },
  { name: "CyberCon", icon: "🔒" },
];

const duplicatedLogos = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <section className="bg-[#FFF5D9] py-7 md:py-10">
      <div className=" px-4 lg:px-10 text-xl lg:text-3xl mx-auto overflow-hidden">
        <div className="flex carousel-animate">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0 px-5 gap-2"
            >
              <span role="img" aria-label="logo-icon">
                {logo.icon}
              </span>
              <span className="font-semibold text-[#3F3C3D]">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}