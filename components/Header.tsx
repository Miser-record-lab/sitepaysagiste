// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

interface HeaderProps {
  businessName: string;
  businessHref: string; // Nouvelle prop pour personnaliser les liens
}

const Header: React.FC<HeaderProps> = ({ businessName, businessHref }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary-100 w-full fixed top-0 z-50 flex items-center justify-between px-4 md:px-10 h-24 md:h-24 border-b border-white">
      {/* Logo and Name for larger screens */}
      <div className="hidden md:flex items-center">
        <Image src="/logo-paysagiste.png" alt="Logo" width={76} height={76} />
        <p className="px-6 font-bold text-md max-w-60">{businessName}</p>
      </div>

      {/* Small Screen - Toggle Button and Contact Button */}
      <div className="flex md:hidden items-center justify-between w-full px-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
        <Link href={`${businessHref}/contact`}>
          <button className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-tl-md rounded-br-md border border-white border-transparent group hover:bg-primary transition">
            <FaPhoneAlt />
            Me Contacter
          </button>
        </Link>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex gap-6">
        <Link
          href={`${businessHref}/accueil`}
          className="text-white font-semibold relative group py-2 px-4"
        >
          Accueil
          <span
            className="absolute inset-0 border border-transparent rounded-md group-hover:border-white group-hover:animate-border-animation"
          ></span>
        </Link>

        <Link
          href={`${businessHref}/services`}
          className="text-white font-semibold relative group py-2 px-4"
        >
          Services
          <span
            className="absolute inset-0 border border-transparent rounded-md group-hover:border-white group-hover:animate-border-animation"
          ></span>
        </Link>
        <Link
          href={`${businessHref}/apropos`}
          className="text-white font-semibold relative group py-2 px-4"
        >
          À propos
          <span
            className="absolute inset-0 border border-transparent rounded-md group-hover:border-white group-hover:animate-border-animation"
          ></span>
        </Link>
      </nav>

      {/* Contact Button for larger screens */}
      <div className="hidden md:block">
        <Link href={`${businessHref}/contact`}>
          <button className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-tl-md rounded-br-md border border-white border-transparent group hover:bg-primary transition">
            <FaPhoneAlt />
            Me Contacter
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-green flex flex-col items-center justify-between py-20">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 left-4 text-white text-3xl focus:outline-none"
          >
            <FaTimes />
          </button>
          <FaLeaf size={36} className="text-white" />
          <nav className="flex flex-col gap-8 text-center mt-16">
            <Link
              href={`${businessHref}/accueil`}
              className="text-white font-semibold text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href={`${businessHref}/apropos`}
              className="text-white font-semibold text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href={`${businessHref}/services`}
              className="text-white font-semibold text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href={`${businessHref}/contact`}
              className="text-white font-semibold text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <FaLeaf size={36} className="text-white" />
        </div>
      )}
    </header>
  );
};

export default Header;
