import React from 'react';

const TopicWithImage = () => {
  return (
    <div className="container flex flex-col items-center px-4 py-12 mx-auto bg-black rounded-3xl lg:flex-row lg:items-start">
      <div className="mb-8 lg:w-1/2 lg:mr-8 lg:mb-0 ">
        <h2 className="mb-4 text-3xl font-bold text-white font-para">Solution</h2>
        <p className="text-lg font-thin text-center text-white font-para">Implementing an online pharmacy management system addresses these challenges by automating prescription handling processes, reducing the risk of errors, and enhancing overall efficiency. By integrating digital prescription management, online chatbot support for immediate assistance, and a pharmacy map list for easy location access</p>
        <br/><br/><p className="text-lg font-thin text-center text-white font-para">the system streamlines operations, improves patient experience, and ensures better medication management and customer service. Additionally, it enables greater accessibility, allowing patients to access pharmaceutical services from anywhere, anytime, leading to enhanced convenience and satisfaction.<span className='hover:text-blue-700'> <a href=''>Lern more..</a> </span>





</p>
      </div>
      <div className="lg:w-1/2">
        <img src="https://i.postimg.cc/Nj2568sq/pharmacist-in-black-background.jpg" alt="Topic Image" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default TopicWithImage;
