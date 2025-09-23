import React from "react";

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

function PhotoGallery() {
  return (
    <section className="flex flex-col items-center pb-10 lg:pt-10 lg:pb-15 px-4 max-w-[1440px] mx-auto lg:px-10 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full  ">
        {GalleryImages.map((src, index) => (
          <div key={index} className="rounded-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover hover:scale-105 hover:transition-all duration-300"
            />
          </div>
        ))}
      </div>
      <button className="mt-12 bg-[#7A38FC] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 transition-colors cursor-pointer">
        View All Gallery
      </button>
    </section>
  );
}

export default PhotoGallery;
