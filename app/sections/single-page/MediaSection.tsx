"use client";

import MediaCarousel from "@/app/components/MediaCarousel";
import { MediaItem } from "@/app/utils/type";

interface MediaSectionProps {
  videos: MediaItem[];
}

export default function MediaSection({ videos }: MediaSectionProps) {
  // Only render if there are videos
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black">
              Videos
            </h2>
            <span className="text-sm text-gray-500">
              {videos.length} {videos.length === 1 ? "video" : "videos"}
            </span>
          </div>

          {/* Carousel */}
          <MediaCarousel items={videos} />
        </div>
      </div>
    </div>
  );
}
