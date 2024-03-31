import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WelcomeSlider = () => {
  const sliderItems = [
    {
      imageUrl: 'https://i.postimg.cc/qMKyxdMv/doctor-and-patient-in-black-background.jpg',
      title: 'Empowering Pharmacies, Enhancing Care',
      description: " Your Comprehensive Pharmacy Management Solution.",
     
      
    },
    {
      imageUrl: 'https://i.postimg.cc/k5pCfzfT/pharmacist-in-black-background-1.jpg',
      title: 'Efficiency Meets Convenience',
      description: 
      "Simplifying Pharmacy Operations, One Click at a Time.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <Slider {...settings} className='w-full p-6 duration-[1000ms] bg-black'>
      {sliderItems.map((item, index) => (
        <div key={index} className="relative ">
          <img src={item.imageUrl} alt={item.title} /> 
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full text-center bg-black bg-opacity-50 mtext-white">
            <h2 className="text-3xl font-bold text-white font-para">{item.title}</h2>
            <p className="text-lg text-white ">{item.description}</p>
            <br/>
            <div className='space-x-2 transition-all'>
            <button className='p-3 bg-[#5356FF]  rounded-full hover:bg-white  hover:text-[#5356FF] hover:outline-[#5356FF] hover:outline hover:outline-3 font-para' >Register now</button>
            <button className='p-3 bg-[#5356FF]  rounded-full hover:bg-white  hover:text-[#5356FF] hover:outline-[#5356FF] hover:outline hover:outline-3 font-para' >Sign in</button>
          </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default WelcomeSlider;


