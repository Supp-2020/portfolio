"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fit, setFit] = useState("object-cover");

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-full overflow-hidden animate-in fade-in zoom-in-95">
      {/* Carousel with Peek Effect */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 max-w-full overflow-hidden perspective rounded-lg">
        {/* Container for carousel slides */}
        <div className="relative h-full flex items-center justify-center border rounded-lg shadow-lg bg-white">
          <div className="absolute inset-0 overflow-hidden rounded-lg shadow-2xl transition-all duration-500 ease-out">
            <Image
              src={images[currentIndex] || "https://placehold.co/300x350"}
              alt="carousel image"
              fill
              onLoadingComplete={(img) => {
                if (img.naturalHeight > img.naturalWidth) {
                  setFit("object-contain");
                } else {
                  setFit("object-cover");
                }
              }}
              className={`${fit} bg-black`}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 md:p-2 hover:bg-white cursor-pointer transition-all hover:scale-110 shadow-lg"
          aria-label="Previous image"
        >
          <FaChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 md:p-2 hover:bg-white cursor-pointer transition-all hover:scale-110 shadow-lg"
          aria-label="Next image"
        >
          <FaChevronRight className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex
                ? "w-6 md:w-8 bg-black"
                : "w-1.5 md:w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
