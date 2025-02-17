"use client"
import React, { useState, useEffect } from "react";
import Recommended from "./Recommended";  // Import your Recommended card component
import SliderComponent from "./SliderComponent";
const Slider = () => {
  // Array of Recommended cards (you can dynamically generate this array)
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of 5 Recommended products (use actual data as needed)
  const products = [
    <Recommended key={1} />,
    <Recommended key={2} />,
    <Recommended key={3} />,
    <Recommended key={4} />,
    <Recommended key={5} />,
  ];

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);  // Change every 3 seconds
    return () => clearInterval(interval);  // Cleanup the interval on component unmount
  }, []);

  // Move to next product card
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Move to previous product card
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      {/* Container for the slider */}
      <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {/* Display products as cards */}
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-[150px] my-2 md:w-[167px] lg:w-1/5 mx-2">
            {product}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
      >
        &gt;
      </button>

      {/* Dots to indicate which slide is active */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
