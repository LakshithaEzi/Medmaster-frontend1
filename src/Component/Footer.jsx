import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/90 backdrop-blur-xl font-para">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0">
            <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
            <p className="text-[#ffffff]">Online Pharmacy Management System! </p>
          </div>
          <div className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0">
            <h2 className="mb-4 text-lg font-semibold text-white">Contact Us</h2>
            <p className="text-[#ffffff]">562/1/C Walgama , Malwana</p>
            <p className="text-[#ffffff]">lakshithasameera71@gmail.com.com</p>
            <p className="text-[#ffffff]">+94 71 342 8961</p>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-4 text-lg font-semibold text-white">Our Services</h2>
            <ul className="text-[#ffffff]">
              <li>Chatbot</li>
              <li>Digital prescription</li>
              <li>mapping</li>
            </ul>
          </div>
          
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Final year project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
