// components/ContactPhone.tsx
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

interface ContactPhoneProps {
  phoneNumber: string;
  email: string;
  address: string; // Nouvelle prop pour l'adresse
}

const ContactPhone: React.FC<ContactPhoneProps> = ({ phoneNumber, email, address }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full pt-16">
      <div className="flex items-center text-center justify-center gap-2 text-primary-100">
        <FaPhoneAlt size={20} />
        <p className="text-2xl font-semibold text-primary-100">{phoneNumber}</p>
      </div>
      <p className="text-gray-700 text-lg font-medium">{email}</p>
      <p className="text-gray-500 text-md font-normal">{address}</p>
    </div>
  );
};

export default ContactPhone;
