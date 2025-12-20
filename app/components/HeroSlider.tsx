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
      "/assets/heroImg.jpeg",
    title: ["Defining the", "standards of real", "estate development"],
  },
  {
    id: 2,
    image:
      "/assets/heroImg.jpeg",
    title: ["Building dreams", "into reality with", "excellence"],
  },
  {
    id: 3,
    image:
      "/assets/heroImg.jpeg",
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
    <section className="relative w-full h-100 sm:h-122.5 md:h-145 lg:h-screen overflow-hidden">
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

          
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full px-4 sm:px-6">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
            {/* First div - empty spacer */}
            <div></div>

            {/* Second div - text with left alignment */}
            <div className="flex flex-col items-start">
              {/* Title */}
              <div
                className={`transform transition-all duration-500 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <p className="text-white font-bold leading-tight text-left">
                  {slides[currentSlide].title.map((line, index) => (
                    <span
                      key={index}
                      className="block text-3xl sm:text-4xl md:text-4xl lg:text-7xl xl:text-7xl"
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
                className={`mt-8 lg:mt-20 transform transition-all duration-500 delay-300 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5
                     bg-[#00b4b4]/20 hoover:bg-transparent
                    border-2 border-[#00b4b4]
                    rounded-full
                    text-white text-sm md:text-sm font-semibold
                    transition-all duration-300"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4">
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
