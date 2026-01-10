"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import API_ENDPOINT from "@/app/config/api";
import {VideoItem} from "@/app/utils/type";

const SLIDE_INTERVAL = 5000;

const mapIcon = "/assets/map-icon.png";
const playIcon = "/assets/play-button.png";

// CALL API
async function getVideosFromApi(): Promise<VideoItem[]> {
    try {
        const res = await fetch(`${API_ENDPOINT}/home-videos`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error("Failed to fetch videos:", res.status);
            return [];
        }

        const raw = await res.json();
        return Array.isArray(raw) ? raw : raw?.data ?? [];
    } catch (error) {
        console.error("Video API error:", error);
        return [];
    }
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string {
    if (!url) return "";

    if (url.length === 11 && !url.includes("/")) return url;

    const shortsMatch = url.match(/youtube\.com\/shorts\/([^#&?]+)/);
    if (shortsMatch) return shortsMatch[1];

    const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[7] && match[7].length === 11) return match[7];

    return url;
}

const VideoSection = () => {
    const [videosData, setVideosData] = useState<VideoItem[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Fetch API data
    useEffect(() => {
        (async () => {
            const data = await getVideosFromApi();
            if (data) setVideosData(data);
        })();
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const nextSlide = useCallback(() => {
        if (!videosData.length) return;
        setCurrentSlide((prev) => (prev + 1) % videosData.length);
    }, [videosData]);

    // Auto-slide effect
    useEffect(() => {
        if (!videosData.length) return;
        const interval = setInterval(nextSlide, SLIDE_INTERVAL);
        return () => clearInterval(interval);
    }, [nextSlide, videosData]);

    const openVideoModal = (youtubeId: string) => {
        setActiveVideo(getYouTubeVideoId(youtubeId));
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeVideoModal = () => {
        setIsModalOpen(false);
        setActiveVideo(null);
        document.body.style.overflow = "auto";
    };

    if (!videosData.length) return null;

    const currentVideo = videosData[currentSlide];

    return (
        <>
            <section className="relative w-full">
                <div className="relative w-full h-[350px] sm:h-[480px] md:h-[580px] lg:h-[620px] overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {videosData.map((video, index) => (
                            <div key={video.id} className="relative w-full h-full flex-shrink-0">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                            </div>
                        ))}
                    </div>

                    {/* Play Button */}
                    <button
                        onClick={() => openVideoModal(currentVideo.youtubeId)}
                        className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-25 h-25 sm:w-35 sm:h-35 md:w-45 md:h-45 lg:w-55 lg:h-55 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 z-10"
                        aria-label="Play video"
                    >
                        <Image
                            src={playIcon}
                            alt="Play"
                            fill
                            className="object-contain"
                        />
                    </button>

                    {/* Info Bar */}
                    <div className="absolute bottom-12 sm:bottom-14 left-4 sm:left-6 z-10">
                        <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-sm shadow-md">
                            <h3 className="font-bold text-black text-sm sm:text-base md:text-lg">
                                {currentVideo.title}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1">
                                <Image
                                    src={mapIcon}
                                    alt="Location"
                                    width={9}
                                    height={9}
                                />
                                <span className="text-xs text-black/80">
                  {currentVideo.location}
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Indicators */}
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
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isModalOpen && activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={closeVideoModal}
                >
                    <button
                        onClick={closeVideoModal}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                    >
                        ✕
                    </button>

                    <div
                        className="relative w-full max-w-4xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                            allow="autoplay; encrypted-media"
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
