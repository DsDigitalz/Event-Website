import React from "react";
// import "./LogoCarousel.css"; // We will create this file

const logos = [
  {
    name: "TechNova",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-rocket"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.9-1.87.5-2.92-.45-1.1-.9-2.2-1.35-3.3z" />
        <path d="M13.5 15.5c1.26-1.5 5-2 5-2s-.5 3.74-2 5c-.84.71-1.87.9-2.92.5-1.1-.45-2.2-.9-3.3-1.35z" />
        <path d="M10 6.5c1.26-1.5 5-2 5-2s-.5 3.74-2 5c-.84.71-1.87.9-2.92.5-1.1-.45-2.2-.9-3.3-1.35z" />
        <path d="M22 13.5c-1.26 1.5-5 2-5 2s.5-3.74 2-5c.84-.71 1.87-.9 2.92-.5 1.1.45 2.2.9 3.3 1.35z" />
      </svg>
    ),
  },
  {
    name: "CodeConnect",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-code"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "InnovateX",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lightbulb"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    name: "DataSphere",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-database"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      </svg>
    ),
  },
  {
    name: "CyberCon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lock"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const duplicatedLogos = [...logos, ...logos, ...logos]; // Duplicate more for a smoother infinite loop

export default function LogoCarousel() {
  return (
    <section className="bg-[#FFF5D9] py-7 md:py-10">
      <div className="px-4 lg:px-10 text-xl lg:text-3xl mx-auto overflow-hidden max-w-[1440px]">
        <div className="carousel-container">
          <div className="carousel-slide">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center flex-shrink-0 px-5 gap-2"
              >
                <span role="img" aria-label="logo-icon">
                  {logo.icon}
                </span>
                <span className="font-semibold text-[#3F3C3D] whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
