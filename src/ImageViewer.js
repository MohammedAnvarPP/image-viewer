import React, { useState } from 'react';

const ImageViewer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="preview">
        <button className="buttons" onClick={handlePrevious}>Previous</button>
        <img src={images[currentIndex]} alt="error" />
        <button onClick={handleNext}>Next </button>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
           
          <img
            key={index}
            src={image}
            alt="error"
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          />
          ))}
      </div>
      
    </div>
  );
};

export default ImageViewer;
