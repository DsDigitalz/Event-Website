import React from "react";
import { motion } from "framer-motion";

// Variants for the main text content
const textVariants = {
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

function ScheduleComponent() {
  return (
    <section className="relative py-10 md:py-15 bg-white overflow-hidden">
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
      <div className="max-w-[1440px] px-4 md:px-10 mx-auto flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Browse all the schedule
        </motion.h1>
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-lg"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Explore the complete event schedule to find sessions, speakers, and
          activities that match your interests and needs.
        </motion.p>
      </div>
    </section>
  );
}

export default ScheduleComponent;