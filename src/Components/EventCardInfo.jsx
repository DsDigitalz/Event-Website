import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    image: "eventcard4.png",
    title: "Friendship Club",
    views: "50K VIEWS",
  },
  {
    image: "eventcard5.png",
    title: "Business Confer...",
    views: "24K VIEWS",
  },
  {
    image: "eventcard6.png",
    title: "Holi Festival",
    views: "26K VIEWS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    title: "Next-gen Marketing",
    views: "50K VIEWS",
  },
];

// Variants for the overall grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of each card
      delayChildren: 0.1, // Delay the start of the first card's animation
    },
  },
};

// Variants for each individual event card
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

function EventCardInfo() {
  return (
    <section className="flex flex-wrap justify-center pb-10 px-4 md:pb-20 bg-[#FFF5D9]">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1440px] lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of the container is visible
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl" // Removed hover:scale-105 to avoid conflict with Framer Motion
            variants={cardVariants}
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-120 object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-semibold leading-tight">
                {event.title}
              </h3>
              <p className="text-sm mt-1">{event.views}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default EventCardInfo;
