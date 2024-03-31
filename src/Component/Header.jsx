import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-xl">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex-shrink-0">
            <a href="#" className="text-lg font-bold text-white font-para">Medmaster<span className='text-blue-400 font-robot'>.</span></a>
          </div>
        
          <div className="hidden md:block">
            <div className="flex items-baseline m-1 ml-10 space-x-4 ">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white  font-para hover:rounded-[10px] hover:underline ">Home</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white  font-para hover:rounded-[10px] hover:underline">About</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white font-para hover:rounded-[10px] hover:underline">Services</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white font-para hover:rounded-[10px] hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
