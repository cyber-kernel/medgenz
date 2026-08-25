"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ConfigurationImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ConfigurationImageSlider({ images, alt, className }: ConfigurationImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const moveSlide = (direction: number) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + images.length) % images.length);
  };

  return (
    <div className={`relative w-full h-56 sm:h-72 lg:h-80 bg-gray-100 rounded-xl shadow-md border border-gray-200 overflow-hidden group/slider ${className ?? ''}`}>
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image} className="relative w-full h-full shrink-0">
            <Image src={image} alt={`${alt} ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => moveSlide(-1)}
            aria-label={`Previous ${alt} image`}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-600 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-md z-10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={() => moveSlide(1)}
            aria-label={`Next ${alt} image`}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-600 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-md z-10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}
    </div>
  );
}