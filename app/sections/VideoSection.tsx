"use client";

import { useState, useEffect, useCallback } from "react";

const SLIDE_INTERVAL = 5000; // 5 seconds auto-change

const mapIcon =
  "https://www.figma.com/api/mcp/asset/4d102edf-b465-4ed0-9eb3-eb54d72dd9d7";
const playIcon =
  "https://www.figma.com/api/mcp/asset/35e37e1c-9ca1-41f4-ace2-b63b6bd67f46";

// Video data array - Add your YouTube video IDs here
const videosData = [
  {
    id: 1,
    thumbnail:
      "https://www.figma.com/api/mcp/asset/3fccb78b-e515-4375-b355-832deb7ef8f6",
    title: "Mixed Use Development",
    location: "Dhaka",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 2,
    thumbnail:
      "https://www.figma.com/api/mcp/asset/de5c3f82-e391-48dd-bd33-dbb9d763cc72",
    title: "Greenview Apartments",
    location: "Sylhet",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 3,
    thumbnail:
      "https://www.figma.com/api/mcp/asset/95ef01d7-064a-495c-8790-86eb5a00d4ea",
    title: "Premier Office Tower",
    location: "Khulna",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
];

const VideoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % videosData.length);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const openVideoModal = (youtubeId: string) => {
    setActiveVideo(youtubeId);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setActiveVideo(null);
    document.body.style.overflow = "auto";
  };

  const currentVideo = videosData[currentSlide];

  return (
    <>
      <section className="relative w-full">
        {/* Slider Container */}
        <div className="relative w-full h-[350px] sm:h-[480px] md:h-[580px] lg:h-[620px] overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {videosData.map((video) => (
              <div
                key={video.id}
                className="relative w-full h-full flex-shrink-0"
              >
                {/* Background Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>

          {/* Play Button - Opens YouTube Video */}
          <button
            onClick={() => openVideoModal(currentVideo.youtubeId)}
            className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-25 h-25 sm:w-35 sm:h-35 md:w-45 md:h-45 lg:w-55 lg:h-55 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 z-10"
            aria-label="Play video"
          >
            <img
              src={playIcon}
              alt="Play"
              className="w-full h-full object-contain"
            />
          </button>

          {/* Info Bar */}
          <div className="absolute bottom-12 sm:bottom-14 left-4 sm:left-6 z-10">
            <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-sm shadow-md">
              <h3 className="font-bold text-black text-sm sm:text-base md:text-lg">
                {currentVideo.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <img
                  src={mapIcon}
                  alt="Location"
                  className="w-2.25 h-2.25 object-contain"
                />
                <span className="text-xs text-black/80">
                  {currentVideo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Indicators - Bottom Center */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-4">
            {videosData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#00b4b4]"
                    : "bg-[#00b4b4]/40 hover:bg-[#00b4b4]/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeVideoModal}
        >
          {/* Close Button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            aria-label="Close video"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Container */}
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
