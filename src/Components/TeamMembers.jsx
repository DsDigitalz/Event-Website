import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Assuming you have react-icons installed

function TeamMembers() {
  const members = [
    {
      image:
        "team1.png",
      name: "Make Torello",
      role: "UX DESIGNER",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      image:
        "team2.png",
      name: "Templeton Peck",
      role: "DEVELOPER",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      image:
        "team3.png",
      name: "Michael Knight",
      role: "MARKETER",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      image:
        "team4.png",
      name: "Angela Bower",
      role: "ENTREPRENEUR",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="bg-[#E7E2C9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] lg:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.social.twitter}
                  className="bg-purple-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.social.facebook}
                  className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.social.linkedin}
                  className="bg-blue-700 text-white p-2 rounded-full hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#171717] mb-1">
                {member.name}
              </h3>
              <p className="text-sm uppercase tracking-wider text-gray-500">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;
