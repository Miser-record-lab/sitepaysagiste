// components/HeaderWebsite.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const HeaderWebsite: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed bg-[#000319] top-0 z-50 flex items-center justify-between px-4 md:px-10 h-20 md:h-24 border-b border-gray-200">
      {/* Logo */}
      <div className="md:flex items-center hidden">
        <Image src="/authenlink.png" alt="Authenlink Logo" width={50} height={50} />
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex gap-8">
        {['À propos', 'Collaboration', 'Prix', 'Contact'].map((section) => (
          <Link
            key={section}
            href={`#${section.toLowerCase()}`}
            className="text-white font-semibold py-2 px-4 hover:border hover:border-white hover:rounded-md transition"
          >
            {section}
          </Link>
        ))}
      </nav>

      {/* Contact Button for larger screens */}
      <div className="hidden md:block">
        <Link href="#contact">
          <button className="flex items-center gap-2 white font-semibold px-4 py-2 rounded-tl-md rounded-br-md border border-gray hover:bg-[#232d35] hover:text-white transition">
            <FaPhoneAlt />
            CONTACT
          </button>
        </Link>
      </div>

      {/* Small Screen - Toggle Button and Contact Button */}
      <div className="flex md:hidden items-center justify-between w-full">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
        <Link href="#contact">
          <button className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-tl-md rounded-br-md border border-gray hover:bg-[#232d35] hover:text-white transition">
            <FaPhoneAlt />
            CONTACT
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#000319] z-40 flex flex-col items-center  p-8 pt-40">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 left-6 text-white text-3xl focus:outline-none"
          >
            <FaTimes />
          </button>
          <div className="mb-8">
            <Image src="/authenlink.png" alt="Authenlink Logo" width={60} height={60} />
          </div>
          <nav className="flex flex-col gap-6 text-center">
            {['À propos', 'Collaboration', 'Prix', 'Contact'].map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-white font-semibold text-xl hover:text-black transition"
                onClick={() => setMenuOpen(false)}
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderWebsite;
