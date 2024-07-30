import React from "react";
import carImage from "../assets/Porsche.png"; // Ensure the correct path to the image

function CarLoader() {
  return (
    <div className="relative w-64 h-32 overflow-hidden">
      <div className="absolute bottom-1 left-0 w-full animate-car-ride flex items-center">
        <img src={carImage} alt="Race Car" className="w-32 h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <div className="h-full bg-yellow-500 animate-progress"></div>
      </div>
    </div>
  );
}

export default CarLoader;
