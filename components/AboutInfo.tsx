// components/AboutInfo.tsx
import React from 'react'

const AboutInfo: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full py-16 md:py-[200px] px-4 md:px-8 bg-gray-100">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left px-4 md:px-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-100">
          Conception, Installation et Entretien Paysager d&apos;Expert
        </h2>
        <p className="text-green-700 text-lg md:text-xl font-semibold mb-6">Fondé en 2005</p>
        <p className="text-gray-700 text-base md:text-lg">
          Je connais parfaitement la région de Cannes et ses environs. J’ai eu le privilège de travailler dans de
          nombreux lieux magnifiques, transformant des espaces extérieurs en véritables havres de paix adaptés à vos envies.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex items-center justify-center relative">
        <div className="relative flex">
          <div
            className="w-48 h-48 md:w-72 md:h-72 bg-cover bg-center transform rotate-45 overflow-hidden border border-white"
            style={{ backgroundImage: "url('/slider2.png')" }}
          ></div>
          <div
            className="w-48 h-48 md:w-72 md:h-72 bg-cover bg-center transform rotate-45 overflow-hidden -ml-8 md:-ml-16 border border-white"
            style={{ backgroundImage: "url('/slider3.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
