import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#0F0B0C] p-4 text-white">
      <div className="max-w-[1440px] container mx-auto flex items-center justify-between lg:px-10">
        <div>
          <h1 className="text-3xl font-bold">Monks Event</h1>
        </div>

        <ul className="hidden space-x-8 lg:flex">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <a href="#" className="hidden lg:block">
          <button className="rounded-lg border-2 border-purple-600 px-6 py-2 text-gray-100 transition-colors duration-300 hover:bg-purple-600 hover:text-white">
            Get Started
          </button>
        </a>

        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
