import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div className="mb-2 md:mb-0">
          <p>
            Damiano Raineri
          </p>
        </div>

        <div className="text-gray-200">
          <p>&copy; {new Date().getFullYear()} Climate Data Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
