import React from "react";
import { motion } from "framer-motion";

// Variants for the heading container
const headingContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Stagger animation for children (h2, img)
      delayChildren: 0.1,
    },
  },
};

// Variants for individual heading elements (text and image inside heading div)
const headingItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Variants for the button
const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5, // Delay button animation slightly
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function SpeakersHeading() {
  return (
    <section className="bg-[#FFF5D9] py-10 md:py-15 overflow-hidden" id="speakers">
      {" "}
      {/* Added overflow-hidden */}
      <div className="max-w-[1440px] mx-auto lg:px-10 px-4 flex flex-col items-center md:flex-row md:justify-between">
        <motion.div
          className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-0"
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }} // Trigger when 60% of the element is visible
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-[#171717] text-center md:text-left"
            variants={headingItemVariants}
          >
            Meet the top <br className="hidden md:block" /> incredible{" "}
            <span
              className="underline"
              style={{ textDecorationColor: "#F5CC00" }}
            >
              speakers
            </span>
          </motion.h2>
          <motion.img
            src="teamicon.png"
            alt=""
            className="hidden md:block"
            variants={headingItemVariants}
          />
        </motion.div>
        <motion.button
          className="bg-[#7A38FC] text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-purple-600 hover:scale-105 hover:transition-all duration-500 cursor-pointer"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} // Button can animate a bit later
        >
          View All Speakers
        </motion.button>
      </div>
    </section>
  );
}

export default SpeakersHeading;
