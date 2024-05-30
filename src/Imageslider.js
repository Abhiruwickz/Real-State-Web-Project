import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './image.css';



const ImageSlider = ({ image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slick-carousel-container">
      <Slider {...settings}>
        {image.map((image, index) => (
          <div key={index} className="slick-slide">
            <img src={image} alt={`slide-${index}`} className="slick-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
