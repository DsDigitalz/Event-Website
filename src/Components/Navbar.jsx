import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Variants for the initial navbar entrance
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Variants for each nav link item
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Variants for the desktop button
  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f0b0cb1] backdrop-blur-md bg-opacity-80"
          : "bg-[#0F0B0C] bg-opacity-100"
      }`}
    >
      <motion.div
        className="max-w-[1440px] container mx-auto flex items-center justify-between lg:px-10"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={linkVariants}>
          <h1 className="text-xl md:text-3xl font-bold text-white">
            Monks Event
          </h1>
        </motion.div>
        <motion.ul
          className="hidden space-x-8 lg:flex"
          variants={navbarVariants}
        >
          {["Home", "About", "Speakers", "Gallery", "Contact"].map(
            (item, index) => (
              <motion.li key={index} variants={linkVariants}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </motion.ul>
        <motion.div className="hidden lg:block" variants={buttonVariants}>
          <button className="rounded-lg border-2 border-purple-600 px-6 py-2 text-gray-100 transition-colors duration-300 hover:bg-purple-600 cursor-pointer hover:text-white">
            Get Started
          </button>
        </motion.div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
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
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-[#0F0B0C] bg-opacity-95 shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {["Home", "About", "Speakers", "Gallery", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <button className="rounded-lg border-2 border-purple-600 px-6 py-2 text-gray-100 transition-colors duration-300 hover:bg-purple-600 cursor-pointer hover:text-white">
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
