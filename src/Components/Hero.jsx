import React from "react";
import { motion } from "framer-motion";

// Variants for the main text content (subtitle, title, paragraph)
const textContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

// Variants for the buttons
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

// Variants for the images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5, // Start image animation slightly later
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F0B0C] to-[#1d0600] pt-30 pb-20 md:pt-50 md:pb-10 text-white">
      <div className="max-w-[1440px] container mx-auto flex flex-col items-center justify-between gap-12 px-4 md:flex-row lg:px-10">
        {/* Left Content Section */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="mb-2 text-sm font-semibold text-gray-400"
            variants={textItemVariants}
          >
            15-17 December National IT Hall
          </motion.p>
          <motion.h2
            className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
            variants={textItemVariants}
          >
            Tech Innovation Event 2025
          </motion.h2>
          <motion.p
            className="mb-8 text-base text-gray-300"
            variants={textItemVariants}
          >
            Tech Innovation Event 2025: Unveiling breakthrough technologies and
            networking opportunities for industry pioneers.
          </motion.p>
          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
            variants={buttonVariants}
          >
            <motion.button className="rounded-lg border-2 border-purple-600 hover:bg-purple-600 active:bg-purple-600 text-purple-600 px-8 py-3 font-semibold transition-colors duration-300 cursor-pointer hover:text-white active:text-white">
              Buy Tickets
            </motion.button>
            <motion.button className="rounded-lg border-2 border-purple-600 px-8 py-3 font-semibold text-purple-600 transition-colors duration-300 cursor-pointer hover:bg-purple-600 active:bg-purple-600 hover:text-white active:text-white">
              See Schedule
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-20 hidden md:block"
            variants={imageVariants}
          >
            <img src="herovector1.png" alt="" />
          </motion.div>
        </motion.div>

        {/* Right Image Collage Section */}
        <motion.div
          className="hidden md:block"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src="herovector2.png" alt="" />
        </motion.div>
        <motion.div variants={imageVariants} initial="hidden" animate="visible">
          <img src="heroimg.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
}
