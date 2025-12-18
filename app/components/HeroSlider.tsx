'use client';

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title: string[];
  subtitle?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://www.figma.com/api/mcp/asset/bfc33277-dc79-4c86-8196-a15c4ea23936",
    title: ["Defining the", "standards of real", "estate development"],
  },
  {
    id: 2,
    image:
      "https://www.figma.com/api/mcp/asset/bfc33277-dc79-4c86-8196-a15c4ea23936",
    title: ["Building dreams", "into reality with", "excellence"],
  },
  {
    id: 3,
    image:
      "https://www.figma.com/api/mcp/asset/bfc33277-dc79-4c86-8196-a15c4ea23936",
    title: ["Your trusted", "partner in", "construction"],
  },
];

const SLIDE_INTERVAL = 5000; // 5 seconds

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, goToSlide]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-125 sm:h-137.5 md:h-150 lg:h-175 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#011719]/80 via-[#011719]/50 to-transparent" />

          {/* Additional dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex justify-end items-center h-full pt-20 mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-24">
          {/* Content wrapper - aligns text and button on their left edge */}
          <div className="flex flex-col items-start w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
            {/* Title */}
            <div
              className={`transform transition-all duration-500 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-white font-bold leading-tight">
                {slides[currentSlide].title.map((line, index) => (
                  <span
                    key={index}
                    className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`mt-8 md:mt-10 transform transition-all duration-500 delay-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5
                  bg-transparent hover:bg-[#00b4b4]/20
                  border-2 border-[#00b4b4]
                  rounded-full
                  text-white text-sm md:text-base font-semibold
                  transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#00b4b4]"
                : "bg-[#00b4b4]/40 hover:bg-[#00b4b4]/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;
