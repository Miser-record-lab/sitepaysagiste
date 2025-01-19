
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SliderProps {
  media: string[];
}

const Slider: React.FC<SliderProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-600 transition-transform z-10 border border-white"
        onClick={handlePrev}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-600 transition-transform z-10 border border-white"
        onClick={handleNext}
      >
        <FaArrowRight size={20} />
      </button>

      {/* Slider Content */}
      <div className="relative flex items-center justify-center h-60 sm:h-80">
        {media.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.match(/\.(mp4|webm|ogg)$/) ? (
                <video
                  controls
                  className="w-full h-full max-h-80 object-contain rounded-lg border border-gray-300"
                >
                  <source src={item} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item}
                  alt={`Media ${index}`}
                  className="w-full h-full object-contain rounded-lg border border-gray-300"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {media.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex
                ? "bg-gray-800 scale-110"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
