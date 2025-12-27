"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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

// Close Icon
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Play Icon for video thumbnails
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  // Handle YouTube Shorts URLs
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^#&?]+)/);
  if (shortsMatch) return shortsMatch[1];
  
  // Handle standard YouTube URLs
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/@[^/]+\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[8] && match[8].length === 11 ? match[8] : null;
}

// Helper function to get YouTube thumbnail
function getYouTubeThumbnail(url: string): string {
  const videoId = getYouTubeVideoId(url);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return url;
}

export default function MediaCarousel({ items }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Hide slider arrows when there are 3 or fewer items
  const showSliderArrows = items.length > 3;

  const isPopupOpen = popupIndex !== null;

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

  // Popup navigation
  const handlePopupPrev = useCallback(() => {
    if (popupIndex !== null) {
      const newIndex = popupIndex > 0 ? popupIndex - 1 : items.length - 1;
      setPopupIndex(newIndex);
    }
  }, [popupIndex, items.length]);

  const handlePopupNext = useCallback(() => {
    if (popupIndex !== null) {
      const newIndex = popupIndex < items.length - 1 ? popupIndex + 1 : 0;
      setPopupIndex(newIndex);
    }
  }, [popupIndex, items.length]);

  const closePopup = useCallback(() => {
    setPopupIndex(null);
  }, []);

  const openPopup = (index: number) => {
    setPopupIndex(index);
  };

  // Keyboard navigation for popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPopupOpen) return;

      switch (e.key) {
        case "Escape":
          closePopup();
          break;
        case "ArrowLeft":
          handlePopupPrev();
          break;
        case "ArrowRight":
          handlePopupNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPopupOpen, closePopup, handlePopupPrev, handlePopupNext]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        No media available
      </div>
    );
  }

  const currentPopupItem = popupIndex !== null ? items[popupIndex] : null;

  return (
    <>
      <div className="relative flex items-center gap-2 md:gap-4">
        {/* Left Arrow - only show when more than 3 items */}
        {showSliderArrows && (
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[#06ecff] hover:text-[#05d4e6] transition-colors"
            aria-label="Previous image"
          >
            <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
          </button>
        )}

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[calc(33.333%-8px)] min-w-[120px] md:min-w-[150px] snap-start cursor-pointer"
              onClick={() => openPopup(index)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                {item.type === "video" ? (
                  <>
                    <Image
                      src={item.videoUrl ? getYouTubeThumbnail(item.videoUrl) : item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                    {/* Play button overlay for videos */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center">
                        <PlayIcon className="w-6 h-6 md:w-8 md:h-8 text-[#06ecff] ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow - only show when more than 3 items */}
        {showSliderArrows && (
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[#06ecff] hover:text-[#05d4e6] transition-colors"
            aria-label="Next image"
          >
            <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
          </button>
        )}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && currentPopupItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closePopup}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute  top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-[#06ecff] transition-colors"
            aria-label="Close popup"
          >
            <CloseIcon className="w-8 h-8 cursor-pointer" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePopupPrev();
            }}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#06ecff] bg-black/50 hover:bg-black/70 rounded-full transition-all"
            aria-label="Previous"
          >
            <ArrowLeftIcon className="w-8 h-8 cursor-pointer md:w-10 md:h-10" />
          </button>

          {/* Media Content */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {currentPopupItem.type === "video" ? (
              <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentPopupItem.videoUrl || currentPopupItem.src)}?autoplay=1&rel=0`}
                  title={currentPopupItem.alt}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative">
                <Image
                  src={currentPopupItem.src}
                  alt={currentPopupItem.alt}
                  width={1200}
                  height={800}
                  className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            )}
          </div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePopupNext();
            }}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#06ecff] bg-black/50 hover:bg-black/70 rounded-full transition-all"
            aria-label="Next"
          >
            <ArrowRightIcon className="w-8 h-8 cursor-pointer md:w-10 md:h-10" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setPopupIndex(index);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === popupIndex
                    ? "bg-[#06ecff] scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
