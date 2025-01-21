// components/Presentation.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface PresentationProps {
  businessName: string;
  profession: string;
  location: string;
}

const Presentation: React.FC<PresentationProps> = ({ businessName, profession, location }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/slider1.png', '/slider2.png', '/slider3.png'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full py-8 md:py-16 px-6 md:px-20 gap-10 mt-10 mb-10">
      {/* Text Section */}
      <div className="md:w-1/2 max-w-[600px] mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
          {businessName}, {profession} avec plus de 10 ans d&apos;expérience
        </h2>
        <p className="text-green text-lg md:text-xl font-semibold mb-6">Sublimer votre espace extérieur</p>
        <p className="text-gray-700 text-sm md:text-lg">
          Situé à {location}, je suis un {profession} passionné par la transformation d&apos;espaces extérieurs en
          véritables œuvres d&apos;art. Avec plus de 10 ans d&apos;expérience, je m&apos;efforce de créer des jardins uniques et
          adaptés à vos envies et besoins.
        </p>
      </div>

      {/* Slider Section for larger screens */}
      <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
        <div className="w-full h-48 md:h-[500px] max-w- relative">
          <Image
            src={images[currentIndex]}
            alt={`Slider image ${currentIndex + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 md:left-4 bg-white rounded-full p-2 shadow-md text-black hover:bg-gray-200"
          onClick={handlePrev}
        >
          <FaArrowLeft size={20} />
        </button>

        <button
          className="absolute right-2 md:right-4 bg-white rounded-full p-2 shadow-md text-black hover:bg-gray-200"
          onClick={handleNext}
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Static Image for small screens */}
      <div className="md:hidden w-full h-48 relative">
        <Image
          src="/slider1.png"
          alt="Static slider image for small screens"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Presentation;
