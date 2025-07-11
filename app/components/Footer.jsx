import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black-900 text-white py-4">
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex space-x-6">
        <a
          href="mailto:maychindavong1102@gmail.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="tel:02059637018"
          className="hover:text-green-400 transition"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
  
      <p className="mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Mayly my portfolio. All rights reserved.
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
