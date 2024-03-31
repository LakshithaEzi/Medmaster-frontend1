import React from 'react';

const MiddleSection1 = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          
          <div className="w-full mb-4 lg:w-1/2 lg:pl-8 lg:mb-0">
            <img src="https://i.postimg.cc/Nj2568sq/pharmacist-in-black-background.jpg" alt="Image" className="rounded-lg shadow-md"/>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h2 className="mb-4 text-3xl font-semibold lg:text-4xl">Topic</h2>
            <p className="mb-4 text-lg text-gray-700 font-para">Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ullamcorper erat.</p>
            <p className="text-lg text-gray-700">More description if needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ullamcorper erat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection1;
