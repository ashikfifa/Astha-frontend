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
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full pt-20">
          {/* Title */}
          <div
            className={`transform transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-white font-bold leading-tight">
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
            </h1>
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
              className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 
                bg-cyan-400/25 hover:bg-cyan-400/40 
                border border-cyan-400 
                rounded-full 
                text-white text-sm md:text-base font-bold
                transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              View All Projects
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative h-2 transition-all duration-300 rounded-full overflow-hidden ${
              index === currentSlide
                ? "w-8 bg-cyan-400"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          >
            {index === currentSlide && (
              <span
                className="absolute inset-0 bg-cyan-300 animate-progress"
                style={{
                  animation: `progress ${SLIDE_INTERVAL}ms linear`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation Arrows (Desktop) */}
      <div className="hidden lg:flex absolute inset-y-0 left-4 right-4 z-30 items-center justify-between pointer-events-none">
        <button
          onClick={() =>
            goToSlide((currentSlide - 1 + slides.length) % slides.length)
          }
          className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-20" />
    </section>
  );
};

export default HeroSlider;
