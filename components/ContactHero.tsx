// components/AboutHero.tsx
import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[50vh] bg-cover bg-center mt-20"
      style={{ backgroundImage: "url('/contact.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Me Contacter</h1>
      </div>
    </section>
  );
};

export default ContactHero;
