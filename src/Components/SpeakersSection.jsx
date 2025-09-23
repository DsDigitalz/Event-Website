import React from "react";
import { motion } from "framer-motion";

// Variants for left-side image
const mainImageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants for decorative vector images
const vectorVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for the right-side content container
const contentContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2, // Delay the start of the content animations
      staggerChildren: 0.2, // Stagger children elements within this container
    },
  },
};

// Variants for individual content items (heading, paragraph)
const contentItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for speaker details
const speakerDetailVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function SpeakersSection() {
  return (
    <section className="relative bg-[#171717] text-white py-10 lg:pb-20 px-4 overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <motion.div
        className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 justify-between lg:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of the section is visible
      >
        {/* Left Side: Image and Speaker Details */}
        <motion.img
          src="herovector1.png"
          alt=""
          className="hidden lg:block absolute bottom-10 left-20"
          variants={vectorVariants}
        />
        <motion.div variants={mainImageVariants}>
          <img src="speakerimg.png" alt="Main speaker" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left"
          variants={contentContainerVariants}
        >
          <motion.h2
            className="text-center text-2xl md:text-4xl lg: font-bold leading-tight mb-6"
            variants={contentItemVariants}
          >
            The event boasts our top creative influencers
          </motion.h2>
          <motion.p
            className="text-center text-gray-300 mb-10"
            variants={contentItemVariants}
          >
            The event features renowned influencers and innovators shaping
            trends and driving creativity across various industries.
          </motion.p>

          {/* Speakers List */}
          <motion.div className="flex flex-col justify-center md:flex-row space-y-8 md:space-y-0 md:space-x-20">
            {/* Speaker 1 */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              variants={speakerDetailVariants}
            >
              <span className="text-2xl font-semibold mb-2">Sarah Johnson</span>
              <span className="text-lg text-gray-400">December 15, 2025</span>
              <span className="text-lg text-gray-400">10:00 AM - 11:30 AM</span>
            </motion.div>

            {/* Speaker 2 */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              variants={speakerDetailVariants}
            >
              <span className="text-2xl font-semibold mb-2">
                Christopher Wilson
              </span>
              <span className="text-lg text-gray-400">December 17, 2025</span>
              <span className="text-lg text-gray-400">12:00 PM - 2:00 PM</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.img
          src="speakericon1.png"
          alt=""
          className="hidden lg:block absolute right-20 top-10"
          variants={vectorVariants}
        />
        <motion.div variants={mainImageVariants}>
          <img
            src="speakerimg2.png"
            alt="Audience member"
            className="lg:mt-20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SpeakersSection;
