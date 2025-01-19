import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

interface FooterProps {
  businessName: string;
  phoneNumber: string;
  address: string; // Nouvelle prop pour l'adresse
}

const Footer: React.FC<FooterProps> = ({ businessName, phoneNumber, address }) => {
  return (
    <footer className="flex flex-wrap items-center justify-between md:justify-around w-full p-4 md:px-6 md:py-6 bg-white border-t border-primary-100">
      {/* Logo and Text */}
      <div className="flex flex-col items-center gap-2 mb-4 md:mb-0 w-full md:w-auto text-center">
        <Image src="/logo-paysagiste.png" alt="Logo" width={76} height={76} />
        <p className="font-semibold text-md max-w-40 text-primary-100">{businessName}</p>
      </div>

      {/* Phone Number and Address */}
      <div className="flex flex-col items-center justify-center md:items-start mb-4 md:mb-0 w-full md:w-auto text-center">
        <div className="flex items-center justify-center gap-2 text-primary-100 w-full">
          <FaPhoneAlt size={20} />
          <p className="text-lg font-semibold text-primary-100">{phoneNumber}</p>
        </div>
        {/* Adresse */}
        <p className="text-gray-500 mt-2 text-center w-full">{address}</p>
        {/* Copyright */}
        <p className="text-gray-500 mt-4 text-center w-full">Copyright 2025 @ {businessName}</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
        <FaFacebook size={32} className="text-primary-100 cursor-pointer" />
        <FaInstagram size={32} className="text-primary-100 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
