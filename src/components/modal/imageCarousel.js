// components/ImageCarousel.js
import React, { useState } from "react";

const ImageCarousel = ({ imageUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === 0 ? imageUrls.length - 1 : prevActiveIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === imageUrls.length - 1 ? 0 : prevActiveIndex + 1
    );
  };

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      <div className="relative  h-[60vw] sm:h-[30vw] mb-6 mx-6 overflow-hidden flex justify-center items-center">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "inline-block" : "hidden"
            } duration-700 ease-in-out flex justify-center items-center`}
          >
            <img src={imageUrl} alt="project" />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent  bg-bgLight ring-4 ring-customGreen hover:ring-green-900 outline-none">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-customGreen hover:text-green-900 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent  bg-bgLight ring-4 ring-customGreen hover:ring-green-900  outline-none">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-customGreen  hover:text-green-900  "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
