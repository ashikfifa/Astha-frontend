"use client";

import { useState } from "react";
import { MediaSectionProps, MediaTab } from "../utils/type";
import MediaTabs from "./MediaTabs";
import MediaCarousel from "./MediaCarousel";


export default function MediaSection({
  photos,
  videos = [],
}: MediaSectionProps) {
  const [activeTab, setActiveTab] = useState<MediaTab>("photos");

  const currentItems = activeTab === "photos" ? photos : videos;

  return (
    <section className={`py-8 md:py-12 lg:py-14`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black">
              Media
            </h2>
            <MediaTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Carousel */}
          <MediaCarousel items={currentItems} />
        </div>
      </div>
    </section>
  );
}