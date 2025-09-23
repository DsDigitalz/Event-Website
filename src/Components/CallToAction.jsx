import React from "react";
import { motion } from "framer-motion";

// Variants for the overall content container
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants for the button
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for the large image
const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function CallToAction() {
  return (
    <section className="bg-[#fdfceb] py-10 lg:py-20 overflow-hidden">
      <div className="relative max-w-[1440px] lg:px-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="relative bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center justify-between pt-10 px-10 lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 z-10"
            variants={contentVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Let's join the tech achievement
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Let's join the tech achievement: innovate, collaborate, and
              revolutionize the future with cutting-edge technology and
              groundbreaking advancements.
            </p>
            <motion.button
              className="mt-8 px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"
              variants={buttonVariants}
            >
              Buy Tickets
            </motion.button>
          </motion.div>

          {/* Image */}
          <img src="cta-img.png" alt="Speaker" className="lg:hidden" />
        </motion.div>
        <motion.img
          src="cta-img.png"
          alt="Speaker"
          className="hidden lg:block lg:absolute lg:right-20 lg:bottom-0 lg:w-auto"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
    </section>
  );
}

export default CallToAction;
