"use client";

import React from "react";

interface MottoSectionProps {
  currentSlide?: number;
  totalSlides?: number;
  onSlideChange?: (index: number) => void;
}

const MottoSection: React.FC<MottoSectionProps> = ({
  currentSlide = 0,
  totalSlides = 3,
  onSlideChange,
}) => {
  return (
    <section className="relative z-10 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
      {/* White container with rounded top corners */}
      <div className="bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] px-4 sm:px-6 md:px-8 lg:px-12 pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slider Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 md:mb-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onSlideChange?.(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-6 h-3 sm:w-7 sm:h-3.5 md:w-8 md:h-4 bg-[#06ecff]"
                    : "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#06ecff]/30 hover:bg-[#06ecff]/50"
                }`}
              />
            ))}
          </div>

          {/* Main Heading */}
          <h2 className="text-[#373535] font-bold leading-tight tracking-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl">
              Building Spaces that Build
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl">
              Your Future
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto">
            Quality developments designed for comfort, value, and long-term growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;