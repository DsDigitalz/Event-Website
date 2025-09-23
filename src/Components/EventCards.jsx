import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    image: "eventcard1.png",
    category: "MEMORABLE EXPERIENCE",
    title: "Unforgettable Moments at Eventive 2025",
  },
  {
    image: "eventcard2.png",
    category: "SKILLED SPEAKERS",
    title: "Storytelling Festival",
  },
  {
    image: "eventcard3.png",
    category: "COMMUNITY BUILD",
    title: "Build Networking",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of each card
      delayChildren: 0.2, // Optional: delay the start of the first card's animation
    },
  },
};

const cardVariants = {
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

function EventCards() {
  return (
    <div className="bg-white pt-3 pb-15 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-[1440px] lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            variants={cardVariants}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-300">
                {event.category}
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                {event.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default EventCards;
