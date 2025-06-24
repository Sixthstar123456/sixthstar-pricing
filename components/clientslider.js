import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ClientSlider = () => {
  const images = [
    '/images/carousel1.jpg', // Replace with your image paths
    '/images/carousel2.jpg',
    '/images/carousel3.jpg',
  ];

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        interval={3000} 
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Slide ${index + 1}`}
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientSlider;