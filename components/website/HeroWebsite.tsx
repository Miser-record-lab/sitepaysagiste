// components/Hero.tsx
import React from 'react';

const HeroWebsite: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-cente border-b border-white"
      style={{ backgroundImage: "url('/backgroundHero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          De la Conception au <br /> Développement
        </h1>
        <p className="text-sm md:text-md mt-6">
          Agence spécialisée dans la création et la maintenance de site web
        </p>

        <button
          className="mt-10 px-6 py-3 text-lg font-semibold border border-white rounded-tl-md rounded-br-md 
          transition-all hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:text-white"
        >
          Me Contacter
        </button>
      </div>
    </section>
  );
};

export default HeroWebsite;
