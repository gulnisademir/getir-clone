import React from 'react'
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='container mx-auto'>
    <Slider {...settings}>
      <div>
        <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" />
        <div>
        <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" />
        </div>
        <div>
          <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
        </div>
      </div>
    </Slider>
     </div>
  );
}

