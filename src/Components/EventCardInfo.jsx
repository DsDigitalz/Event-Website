import React from "react";

const events = [
  {
    image:
      "eventcard4.png",
    title: "Friendship Club",
    views: "50K VIEWS",
  },
  {
    image:
      "eventcard5.png",
    title: "Business Confer...",
    views: "24K VIEWS",
  },
  {
    image:
      "eventcard6.png",
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

function EventCardInfo() {
  return (
    <section className="flex flex-wrap justify-center pb-10 px-4 md:pb-20 bg-[#FFF5D9] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1440px] lg:px-10 ">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventCardInfo;
