import React from "react";
import { motion } from "framer-motion";

// Variants for the main text content container
const textContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger animation for the h1 and p
    },
  },
};

// Variants for individual text elements
const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for the decorative images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function PhotoText() {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      <motion.img
        src="herovector2.png"
        alt=""
        className="hidden md:block absolute md:left-10 lg:left-30 top-32"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      />
      <motion.img
        src="scheduleicon.png"
        alt=""
        className="hidden w-20 md:block absolute md:right-10 lg:right-30 top-32"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      />
      <motion.div
        className="max-w-[1440px] px-4 md:px-10 mx-auto flex flex-col justify-center items-center text-center"
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl"
          variants={textItemVariants}
        >
          Check our latest gallery
        </motion.h1>
        <motion.p
          className="mt-4 text-[16px] sm:text-base md:text-lg text-gray-600 max-w-lg"
          variants={textItemVariants}
        >
          Team with all the tools they need to streamline your event planning
          process. Some top artists have gained global
        </motion.p>
      </motion.div>
    </section>
  );
}

export default PhotoText;


