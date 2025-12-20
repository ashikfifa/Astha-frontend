"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MediaItem } from "../utils/type";


interface MediaCarouselProps {
  items: MediaItem[];
}

// Arrow Left Icon
function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow Right Icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MediaCarousel({ items }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / items.length;
      container.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        No media available
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-2 md:gap-4">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[#06ecff] hover:text-[#05d4e6] transition-colors"
        aria-label="Previous image"
      >
        <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory flex-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[calc(33.333%-8px)] min-w-[120px] md:min-w-[150px] snap-start"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[#06ecff] hover:text-[#05d4e6] transition-colors"
        aria-label="Next image"
      >
        <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
}