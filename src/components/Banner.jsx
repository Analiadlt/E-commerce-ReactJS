import React, { useState } from "react";
import {
  siegerGatos,
  siegerPerros,
  agilityPerros,
  agilityGatos,
  agilityLatas,
} from "../assets/images/index";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    siegerGatos,
    siegerPerros,
    agilityPerros,
    agilityGatos,
    agilityLatas,
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="mt-5 w-full h-auto overflow-x-hidden">
      <div className="w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-[60vh] flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt=" imagen 1"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt=" imagen 2"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt=" imagen 3"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt=" imagen 4"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[4]}
            alt=" imagen 5"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;