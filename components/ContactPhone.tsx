// components/ContactPhone.tsx
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactPhone: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full pt-16">
      <div className="flex items-center text-center justify-center gap-2 text-primary-100">
        <FaPhoneAlt size={20} />
        <p className="text-2xl font-semibold text-primary-100">+33 7 86 25 68 29</p>
      </div>
      <p className="text-gray-700 text-lg font-medium">hugo@authenlink.com</p>
    </div>
  );
};

export default ContactPhone;