"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function ImageCarousel({ images, title, description, url }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95">
      {/* Carousel with Peek Effect */}
      <div className="relative h-96 overflow-hidden perspective">
        {/* Container for carousel slides */}
        <div className="relative h-full flex items-center justify-center border rounded-lg shadow-lg bg-white">
          {/* Previous Image */}
          {images.length > 2 && (
            <div className="absolute left-0 h-full w-1/3 overflow-hidden">
              <Image
                src={images[(currentIndex - 1 + images.length) % images.length] || "https://placehold.co/300x350"}
                fill
                alt="Previous slide"
                className="object-cover blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-white/20" />
            </div>
          )}

          {/* Current Image */}
          <div className="absolute left-1/2 top-1/2 h-4/5 w-2/3 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl transition-all duration-500 ease-out">
            <Image
              src={images[currentIndex] || "https://placehold.co/300x350"}
              alt="Current slide"
              fill
              className="object-cover"
            />
          </div>

          {/* Next Image */}
          {images.length > 2 && (
            <div className="absolute right-0 h-full w-1/3 overflow-hidden">
              <Image
                src={images[(currentIndex + 1) % images.length] || "https://placehold.co/300x350"}
                fill
                alt="Next slide"
                className="object-cover blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-white/20" />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 hover:bg-white transition-all hover:scale-110 shadow-lg"
          aria-label="Previous image"
        >
          <FaChevronLeft className="h-6 w-6 text-slate-900" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 hover:bg-white transition-all hover:scale-110 shadow-lg"
          aria-label="Next image"
        >
          <FaChevronRight className="h-6 w-6 text-slate-900" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-black"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
