import React from 'react';

const ModernSection = () => {
  return (
    <section className="py-12 duration-500 bg-white font-para">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Welcome to our Online Pharmacy Management System!</h2>
          <p className="mb-8 leading-relaxed text-gray-600">"Your one-stop solution for seamless prescription management and pharmaceutical services. Let's simplify your healthcare journey together!"</p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            <div>
            <div className="p-6 rounded-lg shadow-md hover:text-white hover:bg-black hover:shadow-lg "><a href=''>
              <h3 className="mb-2 text-xl font-bold">Digital Prescription</h3>
              <p className="text-gray-700 hover:text-white">Easily manage and access your prescriptions online, eliminating the hassle of paper-based records and ensuring accuracy and convenience in medication management.</p>
              </a>
              </div>
              </div>
              
            <div className="p-6 duration-500 bg-white rounded-lg shadow-md hover:bg-black hover:text-white">
              <h3 className="mb-2 text-xl font-bold">Online Chatbot</h3>
              <p className="text-gray-700 hover:text-white">Instantly connect with our intelligent chatbot for quick answers to your queries, assistance with medication information, and guidance on our pharmacy services, available 24/7 for your convenience.</p>
            </div>

            
            <div className="p-6 bg-white rounded-lg shadow-md hover:text-white hover:bg-black">
              <h3 className="mb-2 text-xl font-bold">Pharmacy Map List</h3>
              <p className="text-gray-700 hover:text-white">Explore our comprehensive list of pharmacy locations on an interactive map, making it simple to find the nearest pharmacy branch for your prescription needs, ensuring accessibility and convenience wherever you are.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;
