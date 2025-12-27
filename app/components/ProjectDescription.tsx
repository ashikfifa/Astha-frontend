"use client";

import Image from "next/image";
import { MediaItem } from "@/app/utils/type";
import { useRef, useState, useCallback } from "react";
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
  const previewRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const firstSlideRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  // Expand gallery with smooth animation
  const handleExpand = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsExpanded(true);
        setIsAnimating(false);
      },
    });

    // Step 1: Fade out description text
    tl.to(".preview-text", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });

    // Step 2: Animate preview image - scale and morph
    tl.to(
      previewImageRef.current,
      {
        scale: 0.85,
        borderRadius: "12px",
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.1"
    );

    // Step 3: Fade out badge
    tl.to(
      ".photo-badge",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.in",
      },
      "-=0.3"
    );

    // Step 4: Final fade to gallery
    tl.to(previewRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }, [isAnimating]);

  // Collapse gallery
  const handleCollapse = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsExpanded(false);
        setIsAnimating(false);

        // Reset and animate preview back in
        gsap.set(previewRef.current, { opacity: 1 });
        gsap.set(previewImageRef.current, { scale: 1, borderRadius: "16px" });
        gsap.set(".preview-text", { opacity: 1, y: 0 });
        gsap.set(".photo-badge", { opacity: 1, scale: 1 });

        gsap.from(previewRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });

    tl.to(galleryRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
    });
  }, [isAnimating]);

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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] -mt-8 sm:-mt-10 md:-mt-12 z-20"
    >
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Preview State - Single Image */}
        {!isExpanded && (
          <div ref={previewRef} className="max-w-4xl mx-auto">
            <div onClick={handleExpand} className="relative cursor-pointer group">
              {/* Preview Image */}
              <div
                ref={previewImageRef}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={featuredImage}
                  alt={title || "Project Featured Image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      View Gallery ({allImages.length})
                    </span>
                  </div>
                </div>
              </div>

              {/* Image count badge */}
              <div className="photo-badge absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {allImages.length} Photos
              </div>
            </div>

            {/* Description below preview */}
            <div className="preview-text mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Project Description
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">{description}</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Key Details</h2>
                <div className="space-y-3">
                  {location && (
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gray-400 block">
                        Location
                      </span>
                      <span className="text-sm text-gray-700">{location}</span>
                    </div>
                  )}
                  {keyDetailsList.map((detail, index) => (
                    <div key={index}>
                      <span className="text-xs uppercase tracking-wider text-gray-400 block">
                        {detail.label}
                      </span>
                      <span className="text-sm text-gray-700">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Gallery State */}
        {isExpanded && (
          <div
            ref={galleryRef}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">Gallery</h2>
                <span className="text-sm text-gray-400">({allImages.length} photos)</span>
              </div>
              <button
                onClick={handleCollapse}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close
              </button>
            </div>

            {/* Drag hint */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-6">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Drag to explore</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Horizontal Scroll Track */}
            <div
              ref={trackRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex overflow-x-auto overflow-y-hidden py-4 cursor-grab select-none scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >

              {/* Slides */}
              {allImages.map((image, index) => {
                const textContent = getTextForImage(index);
                return (
                  <div
                    key={image.id}
                    ref={index === 0 ? firstSlideRef : null}
                    className="slide-panel flex-shrink-0 flex items-start gap-4 md:gap-6 pr-8 md:pr-10 first:pl-0"
                    style={{
                      animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[350px] sm:h-[400px] md:h-[470px] lg:h-[520px] rounded-xl overflow-hidden flex-shrink-0 shadow-xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                        priority={index === 0}
                        draggable={false}
                      />
                    </div>

                    {/* Text */}
                    <div className="w-[220px] sm:w-[240px] md:w-[280px] lg:w-[320px] flex-shrink-0 py-4">
                      <p className="text-sm md:text-base leading-relaxed text-gray-600 font-light mb-4">
                        &ldquo;{textContent.quote}&rdquo;
                      </p>
                      {(textContent.author || textContent.subtitle) && (
                        <div className="text-xs text-gray-500 border-l-2 border-gray-200 pl-3">
                          {textContent.author && (
                            <span className="uppercase tracking-wider font-medium block text-gray-700">
                              {textContent.author}
                            </span>
                          )}
                          {textContent.subtitle && (
                            <span className="text-gray-400 block mt-0.5">{textContent.subtitle}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* End spacer */}
              <div className="flex-shrink-0 w-8" />
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 pt-8">
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
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 transition-all hover:scale-125"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4 mt-4">
        <div className="max-w-4xl mx-auto">
          <hr className="border-t border-gray-200" />
        </div>
      </div>

      {/* Keyframes for slide animation */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectDescription;
