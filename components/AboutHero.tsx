// components/AboutHero.tsx
import React from 'react';

interface AboutHeroProps {
  businessName: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ businessName }) => {
  return (
    <section
      className="relative w-full h-[50vh] bg-cover bg-center mt-20"
      style={{ backgroundImage: "url('/slider1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">À propos {businessName}</h1>

        <button
          className="mt-8 px-6 py-3 text-lg font-semibold border border-white rounded-tl-md rounded-br-md hover:bg-primary-100 transition-all"
        >
          Me Contacter
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
