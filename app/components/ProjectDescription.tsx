"use client";

import Image from "next/image";
import { MediaItem } from "@/app/utils/type";
import { useRef, useState, useCallback, useEffect } from "react";

interface ProjectDescriptionProps {
  description: string;
  details: string | string[];
  keyDetails?: string[];
  photos?: MediaItem[];
  title?: string;
  location?: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
  details,
  keyDetails,
  photos = [],
  title,
  location,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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

  const keyDetailsList = Array.isArray(details)
    ? details.map((d) => ({ label: "", value: d }))
    : parseKeyDetails(details);

  // Get all images from photos
  const allImages = photos.map((photo, index) => ({
    id: `photo-${index}`,
    src: photo.src,
    alt: photo.alt || title || `Photo ${index + 1}`,
    type: "photos" as const,
  }));

  // Text content for each image
  const getTextForImage = (index: number) => {
    // if (index === 0) {
    //   return {
    //     quote: description,
    //     author: title || "",
    //     subtitle: location || "",
    //   };
    // }
    const detailTexts = (keyDetails && keyDetails.length > 0)
      ? keyDetails
      : [
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
      quote: detailTexts[(index) % detailTexts.length],
      author: keyDetailsList[(index) % keyDetailsList.length]?.label || "",
      subtitle: keyDetailsList[(index) % keyDetailsList.length]?.value || "",
    };
  };

  // Marquee animation using requestAnimationFrame
  useEffect(() => {
    const marqueeTrack = marqueeTrackRef.current;
    if (!marqueeTrack) return;

    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused && !isDragging && marqueeTrack) {
        positionRef.current -= speed;
        
        // Get half width for seamless loop (we duplicate content)
        const halfWidth = marqueeTrack.scrollWidth / 2;
        
        // Reset position when we've scrolled past half
        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current = 0;
        }
        
        marqueeTrack.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

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
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX);
    if (trackRef.current) {
      trackRef.current.style.cursor = "grabbing";
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 1.5;
      positionRef.current += walk;
      setStartX(e.pageX);
      
      if (marqueeTrackRef.current) {
        marqueeTrackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
    },
    [isDragging, startX]
  );

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      const walk = (e.touches[0].pageX - startX) * 1.5;
      positionRef.current += walk;
      setStartX(e.touches[0].pageX);
      
      if (marqueeTrackRef.current) {
        marqueeTrackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
    },
    [isDragging, startX]
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
        <div>
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
            className="overflow-hidden py-4 select-none -mx-4 cursor-grab"
            style={{
              height: "75vh",
            }}
          >
            {/* Marquee Track */}
            <div
              ref={marqueeTrackRef}
              className="flex will-change-transform"
              style={{
                width: "fit-content",
              }}
            >
              {/* First set of slides - Image and Text as separate slides */}
              {allImages.map((image, index) => {
                const textContent = getTextForImage(index);
                return (
                  <>
                    {/* Image Slide */}
                    <div
                      key={`first-img-${image.id}`}
                      className="slide-panel shrink-0 flex items-center pr-4 md:pr-6 lg:pr-12 pl-4"
                      style={{ height: "70vh" }}
                    >
                      <div className="image-container relative shrink-0 rounded-xl overflow-hidden h-full w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[50vw]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          priority={index === 0}
                          draggable={false}
                        />
                      </div>
                    </div>

                    {/* Text Slide */}
                    <div
                      key={`first-txt-${image.id}`}
                      className="slide-panel shrink-0 flex items-center pr-4 md:pr-6 lg:pr-12 pl-4"
                      style={{ height: "70vh" }}
                    >
                      <div className="text-container shrink-0 flex flex-col justify-center h-full w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[400px]">
                        <p className="text-lg md:text-sm lg:text-sm leading-relaxed text-gray-600 font-light mb-4">
                          &ldquo;{textContent.quote}&rdquo;
                        </p>
                        {(textContent.author || textContent.subtitle) && (
                          <div className="text-sm text-gray-500">
                            {textContent.author && (
                              <span className="uppercase tracking-wider font-semibold block text-gray-800 text-sm md:text-base">
                                {textContent.author}
                              </span>
                            )}
                            {textContent.subtitle && (
                              <span className="text-gray-400 block mt-1 text-sm md:text-base">{textContent.subtitle}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}

              {/* Duplicate set for seamless loop */}
              {allImages.map((image, index) => {
                const textContent = getTextForImage(index);
                return (
                  <>
                    {/* Image Slide */}
                    <div
                      key={`second-img-${image.id}`}
                      className="slide-panel shrink-0 flex items-center pr-4 md:pr-6 lg:pr-12 pl-4"
                      style={{ height: "70vh" }}
                    >
                      <div className="image-container relative shrink-0 rounded-xl overflow-hidden h-full w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[50vw]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          priority={false}
                          draggable={false}
                        />
                      </div>
                    </div>

                    {/* Text Slide */}
                    <div
                      key={`second-txt-${image.id}`}
                      className="slide-panel shrink-0 flex items-center pr-4 md:pr-6 lg:pr-12 pl-4"
                      style={{ height: "70vh" }}
                    >
                      <div className="text-container w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[400px] shrink-0 flex flex-col justify-center h-full">
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 font-light mb-6">
                          &ldquo;{textContent.quote}&rdquo;
                        </p>
                        {(textContent.author || textContent.subtitle) && (
                          <div className="text-sm text-gray-500">
                            {textContent.author && (
                              <span className="uppercase tracking-wider font-semibold block text-gray-800 text-sm md:text-base">
                                {textContent.author}
                              </span>
                            )}
                            {textContent.subtitle && (
                              <span className="text-gray-400 block mt-1 text-sm md:text-base">{textContent.subtitle}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
