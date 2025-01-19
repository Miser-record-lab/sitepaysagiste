// components/Hero.tsx
import React from 'react';

interface HeroProps {
  businessName: string;
}

const Hero: React.FC<HeroProps> = ({ businessName }) => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center pt-32 md:pt-24"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Cropping mask for the background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold">{businessName}</h1>
        <p className="text-lg md:text-2xl mt-4">Sublimer votre espace extérieur</p>

        {/* Contact Button */}
        <button
          className="mt-8 px-6 py-3 text-lg font-semibold border border-white rounded-tl-md rounded-br-md hover:bg-primary-100 transition-all"
        >
          Me Contacter
        </button>
      </div>
    </section>
  );
};

export default Hero;
