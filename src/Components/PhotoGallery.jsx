import React from "react";
import { motion } from "framer-motion";

const GalleryImages = [
  "photo1.png",
  "photo2.png",
  "photo3.png",
  "photo4.png",
  "photo5.png",
  "photo6.png",
  "photo7.png",
  "photo8.png",
  "photo9.png",
  "photo10.png",
  "photo11.png",
  "photo12.png",
];

// Variants for the overall grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Variants for each individual image card
const imageVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for the button
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function PhotoGallery() {
  return (
    <section className="flex flex-col items-center pb-10 lg:pt-10 lg:pb-15 px-4 max-w-[1440px] mx-auto lg:px-10 bg-white overflow-hidden">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {GalleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden"
            variants={imageVariants}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover hover:scale-105" // Removed redundant transition class
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        className="mt-12 bg-[#7A38FC] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 transition-colors cursor-pointer" // This is fine
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        View All Gallery
      </motion.button>
    </section>
  );
}

export default PhotoGallery;
