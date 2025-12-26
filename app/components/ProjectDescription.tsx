"use client";

import Image from "next/image";
import { MediaItem } from "@/app/utils/type";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

interface ProjectDescriptionProps {
  description: string;
  details: string;
  featuredImage: string;
  photos?: MediaItem[];
  title?: string;
  location?: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
  details,
  featuredImage,
  photos = [],
  title,
  location,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // Get all images
  const allImages = [
    { id: "featured", src: featuredImage, alt: title || "Featured Image", type: "photos" as const },
    ...photos.filter((photo) => photo.src !== featuredImage),
  ];

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
      quote: detailTexts[index % detailTexts.length],
      author: keyDetailsList[(index - 1) % keyDetailsList.length]?.label || "",
      subtitle: keyDetailsList[(index - 1) % keyDetailsList.length]?.value || "",
    };
  };

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
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

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (trackRef.current) {
        trackRef.current.style.cursor = "grab";
      }
    }
  }, [isDragging]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate panels on load
      gsap.from(".slide-panel", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] -mt-8 sm:-mt-10 md:-mt-12 z-20"
    >
      {/* Drag hint */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-gray-400 text-xs">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
        <span>Drag to explore</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Horizontal Scroll Track - Drag only */}
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex overflow-x-auto overflow-y-hidden py-8 md:py-12 cursor-grab select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Slides */}
        {allImages.map((image, index) => {
          const textContent = getTextForImage(index);
          return (
            <div
              key={image.id}
              className="slide-panel flex-shrink-0 flex items-center gap-6 md:gap-8 px-4 md:px-6 first:pl-8 md:first:pl-12 last:pr-8 md:last:pr-12"
            >
              {/* Image - Always Left */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 450px"
                  priority={index === 0}
                  draggable={false}
                />
              </div>

              {/* Text - Always Right */}
              <div className="w-[250px] sm:w-[280px] md:w-[320px] lg:w-[380px] flex-shrink-0 py-4">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 font-light mb-4 md:mb-6">
                  &ldquo;{textContent.quote}&rdquo;
                </p>
                {(textContent.author || textContent.subtitle) && (
                  <div className="text-xs md:text-sm text-gray-500">
                    {textContent.author && (
                      <span className="uppercase tracking-wider font-medium block">
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

        {/* End spacer */}
        <div className="flex-shrink-0 w-8 md:w-12" />
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 pb-6 md:pb-8">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (trackRef.current) {
                const slideWidth = trackRef.current.scrollWidth / allImages.length;
                trackRef.current.scrollTo({
                  left: slideWidth * index,
                  behavior: "smooth",
                });
              }
            }}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
