import React from "react";

function EventCards() {
  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1538332576161-b76543b591b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "MEMORABLE EXPERIENCE",
      title: "Unforgettable Moments at Eventive 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596701802931-e44b82650022?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "SKILLED SPEAKERS",
      title: "Storytelling Festival",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531051759657-6b455b55239e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "COMMUNITY BUILD",
      title: "Build Networking",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
