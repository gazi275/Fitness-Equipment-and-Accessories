import React, { useState } from "react";

const features = [
  {
    title: "APPLE WATCH® COMPATIBLE",
    description:
      "Easily track how hard you're working with real-time feedback from your favorite devices.",
    image: "https://shop.lifefitness.com/cdn/shop/files/club-series-treadmill-update-lifestyle-1-1000x1000_f69c3280-1dc7-44c6-b4c5-b12c469cd599.jpg?v=1709238005&width=400", // Replace with your actual images.
  },
  {
    title: "ON-DEMAND CLASSES",
    description:
      "Stay motivated with instructor-led Life Fitness On Demand workout classes on compatible cardio machines.",
    image: "https://shop.lifefitness.com/cdn/shop/files/club-series-treadmill-update-lifestyle-3-1000x1000_94d9d50d-6870-458e-a9b3-e5979d706b71.jpg?v=1709238035&width=500",
  },
  {
    title: "COMPACT DESIGN",
    description: "Maximize your space with our slim and compact treadmill designs.",
    image: "https://shop.lifefitness.com/cdn/shop/files/hammer-strength-pro100-adjustable-dumbbells-lifting-1-1000x1000_58ab9903-d039-4431-a2af-678d67486e91.jpg?v=1695240292&width=500",
  },
];

const TailwindCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + features.length) % features.length
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8">
        SHOP BY FEATURE
      </h2>

      {/* Carousel Content */}
      <div className="flex items-center justify-between relative overflow-hidden">
        {/* Left Adjacent Card */}
        <div
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 opacity-30 scale-90 transition-all duration-300`}
        >
          <img
            src={features[(currentIndex - 1 + features.length) % features.length].image}
            alt="Previous feature"
            className="rounded-lg"
          />
        </div>

        {/* Main Card */}
        <div className="w-1/2 mx-auto text-center">
          <img
            src={features[currentIndex].image}
            alt={features[currentIndex].title}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-2xl font-bold mt-4">
            {features[currentIndex].title}
          </h3>
          <p className="mt-2 text-gray-600">{features[currentIndex].description}</p>
          <button className="mt-4 px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
            SHOP NOW
          </button>
        </div>

        {/* Right Adjacent Card */}
        <div
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 opacity-30 scale-90 transition-all duration-300`}
        >
          <img
            src={features[(currentIndex + 1) % features.length].image}
            alt="Next feature"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Thumbnails */}
      <div className="flex justify-center mt-6 space-x-8">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer text-center ${
              index === currentIndex
                ? "text-black font-bold underline"
                : "text-gray-400"
            }`}
          >
            {feature.title}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all"
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default TailwindCarousel;
