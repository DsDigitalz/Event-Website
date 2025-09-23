import React from "react";
import { motion } from "framer-motion";

// Variants for the heading
const headingVariants = {
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
      delay: 0.3, // Slightly delay the button animation
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function MoreInfo() {
  return (
    <section className="bg-[#FFF5D9] md:py-15 py-10 overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="max-w-[1440px] mx-auto lg:px-10 px-4 flex flex-col items-center md:flex-row md:justify-between">
        <motion.div
          className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-0"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }} // Trigger when 60% of the heading div is visible
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-[#171717] text-center md:text-left"
            variants={headingVariants} // Using same variants for h2 as its parent for simplicity
          >
            More from Monks Event
          </motion.h2>
          {/* <img src="teamicon.png" alt="" className="hidden md:block" /> */}
        </motion.div>
        <motion.button
          className="border border-[#7A38FC] font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-purple-600 hover:scale-105 hover:text-white text-black hover:transition-all duration-500 cursor-pointer"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} // Trigger when 80% of the button is visible
        >
          Follow on Instagram
        </motion.button>
      </div>
    </section>
  );
}

export default MoreInfo;
