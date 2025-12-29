"use client";

import Image from "next/image";
import { MediaItem } from "@/app/utils/type";
import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

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
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const slidePanelsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Handle expand on click
  const handleExpandGallery = useCallback(() => {
    if (isExpanded || isAnimating) return;
    
    setIsAnimating(true);
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsExpanded(true);
        setIsAnimating(false);
      }
    });

    // Animate the container height
    tl.to(trackRef.current, {
      height: "75vh",
      duration: 0.8,
      ease: "power3.out"
    });

    // Animate each slide panel
    slidePanelsRef.current.forEach((panel, index) => {
      if (panel) {
        tl.to(panel, {
          height: "70vh",
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.7");

        // Animate the image container within each panel
        const imageContainer = panel.querySelector('.image-container');
        if (imageContainer) {
          // Use full width for mobile/tablet, 50vw for desktop
          const isMobile = window.innerWidth < 1024;
          tl.to(imageContainer, {
            width: isMobile ? "calc(100vw - 2rem)" : "50vw",
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.6");
        }

        // Animate text opacity
        const textContainer = panel.querySelector('.text-container');
        if (textContainer) {
          tl.to(textContainer, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
          }, "-=0.4");
        }
      }
    });

  }, [isExpanded, isAnimating]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    
    // If not expanded, trigger expansion instead of dragging
    if (!isExpanded && !isAnimating) {
      handleExpandGallery();
      return;
    }
    
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, [isExpanded, isAnimating, handleExpandGallery]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isExpanded || !isDragging || !trackRef.current) return;
      const x = e.touches[0].pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      trackRef.current.scrollLeft = scrollLeft - walk;
    },
    [isExpanded, isDragging, startX, scrollLeft]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  // Initial setup for collapsed state
  useEffect(() => {
    if (!isExpanded && slidePanelsRef.current.length > 0) {
      slidePanelsRef.current.forEach((panel) => {
        if (panel) {
          const textContainer = panel.querySelector('.text-container');
          if (textContainer) {
            gsap.set(textContainer, { opacity: 0.7, x: 20 });
          }
        }
      });
    }
  }, [isExpanded, photos]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] -mt-8 sm:-mt-10 md:-mt-12 z-20"
    >
      <div className="container mx-auto px-4 py-4 md:py-8 lg:py-8">
        {/* Gallery */}
        <div ref={galleryRef} onClick={handleExpandGallery} className={!isExpanded ? "cursor-pointer" : ""}>
          {/* Click hint for collapsed state */}
          {!isExpanded && (
            <div className="text-center mb-4">
              <span className="text-sm text-gray-400 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Click to expand gallery
              </span>
            </div>
          )}
          {/* Marquee Container */}
          <div
            ref={trackRef}
            onMouseDown={isExpanded ? handleMouseDown : undefined}
            onMouseUp={isExpanded ? handleMouseUp : undefined}
            onMouseMove={isExpanded ? handleMouseMove : undefined}
            onMouseEnter={isExpanded ? handleMouseEnter : undefined}
            onMouseLeave={isExpanded ? handleMouseLeaveTrack : undefined}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`overflow-y-visible py-4 select-none scrollbar-hide -mx-4 transition-all duration-300 ${isExpanded ? 'overflow-x-auto cursor-grab' : 'overflow-x-hidden'}`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              height: isExpanded ? "auto" : "45vh",
            }}
          >
            {/* Marquee Track */}
            <div
              ref={marqueeTrackRef}
              className="flex"
              style={{
                animation: isExpanded && !isPaused ? "marquee 180s linear infinite" : "none",
                width: "fit-content",
              }}
            >
              {/* First set of slides - Image and Text as separate slides on mobile/tablet */}
              {allImages.map((image, index) => {
                const textContent = getTextForImage(index);
                return (
                  <>
                    {/* Image Slide */}
                    <div
                      key={`first-img-${image.id}`}
                      ref={(el) => { slidePanelsRef.current[index] = el; }}
                      className="slide-panel shrink-0 flex items-center pr-4 md:pr-6 lg:pr-12 pl-4"
                      style={{ height: isExpanded ? "70vh" : "40vh" }}
                    >
                      <div 
                        className={`image-container relative shrink-0 rounded-xl overflow-hidden transition-all duration-500 h-full ${isExpanded ? 'w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[50vw]' : 'w-[85vw] md:w-[75vw] lg:w-[30vw]'}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          priority={index === 0}
                          draggable={false}
                        />
                        {/* Overlay for collapsed state */}
                        {!isExpanded && (
                          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 hover:bg-black/5" />
                        )}
                      </div>
                    </div>

                    {/* Text Slide */}
                    <div
                      key={`first-txt-${image.id}`}
                      className="slide-panel shrink-0 flex items-center pr-4 md:pr-6 lg:pr-12 pl-4"
                      style={{ height: isExpanded ? "70vh" : "40vh" }}
                    >
                      <div className={`text-container shrink-0 flex flex-col justify-center h-full ${isExpanded ? 'w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[400px]' : 'w-[92vw] md:w-[85vw] lg:w-[400px]'}`}>
                        <p className={`leading-relaxed text-gray-600 font-light mb-4 transition-all duration-500 ${isExpanded ? 'text-lg md:text-xl lg:text-2xl' : 'text-base md:text-lg'}`}>
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

              {/* Duplicate set for seamless loop - only render when expanded */}
              {isExpanded && allImages.map((image, index) => {
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
