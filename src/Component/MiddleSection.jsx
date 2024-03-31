import React from 'react';

const MiddleSection = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          
          <div className="w-full mb-4 lg:w-1/2 lg:pr-4 lg:mb-0">
            <img src="https://i.postimg.cc/XNrQNpss/32265.jpg" alt="Image" className="rounded-xl  w-[70%]"/>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-para">Problem</h2>
            <p className="mb-4 text-lg text-gray-700 font-para"> Traditional pharmacy management systems often rely heavily on manual processes, leading to inefficiencies, errors in prescription handling, and delays in patient care. Additionally, limited accessibility and lack of integration with modern technologies hinder the overall efficiency and effectiveness of pharmacy operations.</p>
            <p className="text-lg text-gray-700 font-para">More description if needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ullamcorper erat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
