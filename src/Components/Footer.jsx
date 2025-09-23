import React from "react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-l from-[#0F0B0C] to-[#1d0600] text-gray-300 py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] lg:px-10 mx-auto">
        {/* Newsletter Section */}
        <div className="relative text-center lg:py-16 px-4 mb-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Never miss a single news
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Stay informed with all the latest updates and news about our events.
            Never miss a moment of our exciting and innovative gatherings in the
            world of technology and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white sm:w-80 px-5 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-colors">
              Subscribe
            </button>
          </div>
          {/* Decorative SVG elements (optional) */}
          <img src="herovector1.png" alt="" className="absolute hidden lg:block" />
          <img src="speakericon1.png" alt="" className="absolute right-0 top-10 hidden lg:block" />
        </div>

        {/* Footer Navigation and Social Icons */}
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          {/* Logo and Links */}

          <span className="text-2xl font-bold text-white md:mb-0">
            Eventive
          </span>

          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 text-sm">
            {[
              "About",
              "Tickets",
              "Speakers",
              "Gallery",
              "Pricing",
              "FAQ",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              {/* Twitter Icon */}
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.531A8.37 8.37 0 0022 5.305a8.14 8.14 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996 4.103 4.103 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.276 4.103 4.103 0 001.27 5.475 4.073 4.073 0 01-1.85-.515v.052a4.105 4.105 0 003.292 4.02 4.04 4.04 0 01-1.85.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.25c.575 0 1.13-.034 1.68-.098a11.53 11.53 0 004.61-1.25z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              {/* Facebook Icon */}
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.873V14.894h-3.284v-2.89h3.284v-2.08c0-3.23 1.956-5.006 4.846-5.006 1.391 0 2.454.104 2.784.15v3.13h-1.859c-1.467 0-1.75.698-1.75 1.72v2.26h3.491l-.547 2.89H15.64V22c4.781-.745 8.438-4.882 8.438-9.873z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              {/* LinkedIn Icon */}
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.766 1.75-1.766 1.75.79 1.75 1.766-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              {/* Vimeo Icon (using a placeholder SVG) */}
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.718 6.551a3.524 3.524 0 00-3.418-2.63c-1.899.041-3.613 1.144-4.57 2.946l-2.035 3.521a.767.767 0 00-.03.738l.681 1.182c.162.28.471.442.8.442h.384l1.107 1.918a.78.78 0 00.677.382l2.365-.01a.795.795 0 00.757-.59l.995-2.735h.053l2.253 2.735c.23.279.57.44.92.441h.512c.34.004.664-.15.869-.419l.799-1.258a.746.746 0 00.082-.727l-1.07-1.704a.792.792 0 00-.737-.417H15.11a.748.748 0 01-.692-.416l-.888-1.42a.793.793 0 00-.738-.415z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright and Legal Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8">
          <p className="mb-2 md:mb-0">
            Copyright © Designmonks All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
