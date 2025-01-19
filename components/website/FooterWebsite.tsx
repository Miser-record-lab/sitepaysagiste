'use client';

import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt, FaCopyright } from 'react-icons/fa';

const FooterWebsite: React.FC = () => {
  return (
    <footer className="bg-[#000319] text-white py-8 px-4 md:px-20 flex flex-col md:flex-row md:justify-between items-center md:items-start border-t border-white">
      {/* Logo Section */}
      <div className="mb-6 md:mb-0">
            <Image src="/authenlink.png" alt="Logo" width={76} height={76} />
      </div>

      {/* Contact Information Section */}
      <div className="text-center flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+33 7 86 25 68 29</span>
        </div>
        <div>
          <a href="mailto:hugo@authenlink.com" className="hover:underline">
            hugo@authenlink.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaCopyright />
          <span>Copyright 2025 @authenlink</span>
        </div>
      </div>

      {/* Empty Right Section */}
      <div className="hidden md:block w-32"></div>
    </footer>
  );
};

export default FooterWebsite;
