import React from 'react';
import Slider from 'react-slick';


const SwipperCarousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
    
  };
  return (
    <Slider {...settings}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    {/* <div className=' w-[80%]'>
      
<h1>hello</h1>
    </div>
    <div className='w-full'>
    <img 
className='w-full h-[650px]'      src="https://i.ibb.co/7X2zfQr/cover12.jpg" alt="" />
    </div>
    <div className='w-full'>
    <img 
className='w-full h-[650px]'      src="https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg" alt="" />
    </div>
    <div className='w-full'>
    <img 
className='w-full h-[650px]'      src="https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg" alt="" />
    </div>
    <div className='w-full'>
    <img 
className='w-full h-[650px]'      src="https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg" alt="" />
    </div>
    <div className='w-full'>
    <img 
className='w-full h-[650px]'      src="https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg" alt="" />
    </div> */}
  </Slider>
  );
};

export default SwipperCarousel;