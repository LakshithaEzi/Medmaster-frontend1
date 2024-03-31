import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WelcomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <Slider {...settings} className='m-[20px] rounded-sm'>
      <div>
        <img src="https://i.postimg.cc/HskZ2RcH/imants-kaziluns-k2ojxtdasl-Q-unsplash.jpg" alt="Welcome 1" className="w-full " />
      </div>
      <div>
        <img src="https://i.postimg.cc/HskZ2RcH/imants-kaziluns-k2ojxtdasl-Q-unsplash.jpg" alt="Welcome 2" className="w-full" />
      </div>
      <div>
        <img src="https://i.postimg.cc/HskZ2RcH/imants-kaziluns-k2ojxtdasl-Q-unsplash.jpg" alt="Welcome 3" className="w-full" />
      </div>
    </Slider>
  );
};

export default WelcomeSlider;
