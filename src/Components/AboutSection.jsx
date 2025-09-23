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

// Variants for the paragraph
const paragraphVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3, // Delay the paragraph animation slightly after the heading
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
      delay: 0.6, // Delay images to appear after text
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function AboutSection() {
  return (
    <section className="relative bg-white px-4 py-10 lg:py-20 overflow-hidden">
      {" "}
      {/* Added overflow-hidden to prevent scrollbars during animation */}
      <motion.img
        src="aboutimg2.png"
        alt=""
        className="absolute left-0 bottom-0 w-15 lg:w-20"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      />
      <motion.img
        src="aboutimg.png"
        alt=""
        className="absolute right-0 top-0 w-15 lg:w-20"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      />
      <div className="px-4 lg:px-10 max-w-[1440px] mx-auto flex flex-col gap-4 items-center justify-between space-y-4 md:space-y-4 lg:flex-row ">
        <motion.h2
          className="text-center text-3xl md:text-5xl font-extrabold mb-0 text-[#111111]"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          About the event
        </motion.h2>
        <motion.p
          className="text-center lg:w-[50%] lg:text-start text-[#111111] leading-relaxed"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <span className="text-[#7A38FC] font-semibold">Tech Event 2025 </span>
          showcases groundbreaking innovations, featuring keynote talks,
          interactive workshops, and networking sessions for tech enthusiasts
          and industry leaders.
        </motion.p>
      </div>
    </section>
  );
}

export default AboutSection;
