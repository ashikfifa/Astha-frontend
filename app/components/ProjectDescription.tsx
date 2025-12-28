"use client";

import Image from "next/image";
import { MediaItem } from "@/app/utils/type";
import { useRef, useState, useCallback } from "react";

interface ProjectDescriptionProps {
  description: string;
  details: string;
  photos?: MediaItem[];
  title?: string;
  location?: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
  details,
  photos = [],
  title,
  location,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Parse key details
  const parseKeyDetails = (detailsString: string) => {
    const items: { label: string; value: string }[] = [];
    const parts = detailsString.split(",").map((s) => s.trim());
    parts.forEach((part) => {
      const colonIndex = part.indexOf(":");
      if (colonIndex > -1) {
        items.push({
          label: part.substring(0, colonIndex).trim(),
          value: part.substring(colonIndex + 1).trim(),
        });
      }
    });
    return items;
  };

  const keyDetailsList = parseKeyDetails(details);

  // Get all images from photos
  const allImages = photos.map((photo, index) => ({
    id: `photo-${index}`,
    src: photo.src,
    alt: photo.alt || title || `Photo ${index + 1}`,
    type: "photos" as const,
  }));

  // Text content for each image
  const getTextForImage = (index: number) => {
    if (index === 0) {
      return {
        quote: description,
        author: title || "",
        subtitle: location || "",
      };
    }
    const detailTexts = [
      "Every detail has been carefully considered to create spaces that inspire and endure.",
      "Our commitment to excellence is reflected in every aspect of the design.",
      "Architecture that harmonizes with its environment while serving its purpose.",
      "Crafted with precision to meet the highest standards of quality.",
      "Designed to create lasting value and memorable experiences.",
      "Innovation meets tradition in this carefully curated space.",
      "A testament to thoughtful design and meticulous execution.",
      "Where form follows function, and beauty emerges naturally.",
    ];
    return {
      quote: detailTexts[(index - 1) % detailTexts.length],
      author: keyDetailsList[(index - 1) % keyDetailsList.length]?.label || "",
      subtitle: keyDetailsList[(index - 1) % keyDetailsList.length]?.value || "",
    };
  };

  // Pause marquee on hover
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeaveTrack = useCallback(() => {
    setIsPaused(false);
    if (isDragging) {
      setIsDragging(false);
      if (trackRef.current) {
        trackRef.current.style.cursor = "grab";
      }
    }
  }, [isDragging]);

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      e.preventDefault();
      const x = e.pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      trackRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !trackRef.current) return;
      const x = e.touches[0].pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      trackRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] -mt-8 sm:-mt-10 md:-mt-12 z-20"
    >
      <div className="container mx-auto px-4 py-4 md:py-8 lg:py-8">
        {/* Gallery */}
        <div ref={galleryRef}>
          {/* Marquee Container */}
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveTrack}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="overflow-x-auto overflow-y-visible py-4 cursor-grab select-none scrollbar-hide -mx-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Marquee Track */}
            <div
              className="flex"
              style={{
                animation: isPaused ? "none" : "marquee 180s linear infinite",
                width: "fit-content",
              }}
            >
              {/* First set of slides */}
              {allImages.map((image, index) => {
                const textContent = getTextForImage(index);
                return (
                  <div
                    key={`first-${image.id}`}
                    className="slide-panel shrink-0 flex items-stretch gap-8 md:gap-16 lg:gap-24 pr-16 md:pr-24 lg:pr-32 pl-4"
                    style={{ height: "70vh" }}
                  >
                    {/* Image */}
                    <div className="relative shrink-0 shadow-xl rounded-xl overflow-hidden h-full" style={{ width: "50vw" }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority={index === 0}
                        draggable={false}
                      />
                    </div>

                    {/* Text */}
                    <div className="w-[40vw] md:w-[35vw] shrink-0 flex flex-col justify-center">
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 font-light mb-6">
                        &ldquo;{textContent.quote}&rdquo;
                      </p>
                      {(textContent.author || textContent.subtitle) && (
                        <div className="text-sm text-gray-500">
                          {textContent.author && (
                            <span className="uppercase tracking-wider font-semibold block text-gray-800">
                              {textContent.author}
                            </span>
                          )}
                          {textContent.subtitle && (
                            <span className="text-gray-400 block mt-1">{textContent.subtitle}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Duplicate set for seamless loop */}
              {allImages.map((image, index) => {
                const textContent = getTextForImage(index);
                return (
                  <div
                    key={`second-${image.id}`}
                    className="slide-panel shrink-0 flex items-stretch gap-8 md:gap-16 lg:gap-24 pr-16 md:pr-24 lg:pr-32 pl-4"
                    style={{ height: "75vh" }}
                  >
                    {/* Image */}
                    <div className="relative shrink-0 shadow-xl rounded-xl overflow-hidden h-full" style={{ width: "50vw" }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority={false}
                        draggable={false}
                      />
                    </div>

                    {/* Text */}
                    <div className="w-[40vw] md:w-[35vw] shrink-0 flex flex-col justify-center">
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 font-light mb-6">
                        &ldquo;{textContent.quote}&rdquo;
                      </p>
                      {(textContent.author || textContent.subtitle) && (
                        <div className="text-sm text-gray-500">
                          {textContent.author && (
                            <span className="uppercase tracking-wider font-semibold block text-gray-800">
                              {textContent.author}
                            </span>
                          )}
                          {textContent.subtitle && (
                            <span className="text-gray-400 block mt-1">{textContent.subtitle}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectDescription;
