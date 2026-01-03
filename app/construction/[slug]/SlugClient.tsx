"use client";

import { useEffect, useMemo, useState } from "react";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import ProjectDescription from "@/app/components/ProjectDescription";
import MediaSection from "@/app/sections/single-page/MediaSection";
import MoreServices from "@/app/sections/construction-page/MoreServices";
import { ENDPOINTS } from "@/app/utils/config";
import { MediaItem } from "@/app/utils/type";

type Props = { slug: string };

export default function SlugClient({ slug }: Props) {
  const [state, setState] = useState<{
    title: string;
    location: string;
    photos: MediaItem[];
    descriptions: string[];
    videos: MediaItem[];
    background: string;
    ready: boolean;
  }>({ title: "", location: "", photos: [], descriptions: [], videos: [], background: "/assets/construction/project1/IMG-20251215-WA0160.jpg", ready: false });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(`${ENDPOINTS.construction}/${encodeURIComponent(slug)}`, { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();

        const title: string = data.title || "Untitled";
        const location: string = data.location || "";

        const imagesArr: any[] = Array.isArray(data.images) ? data.images : [];
        const photos: MediaItem[] = imagesArr
          .filter((img) => !!img?.image_url)
          .map((img, idx) => ({ id: `img-${idx}`, src: String(img.image_url), alt: img.description || title || `Image ${idx + 1}`, type: "photos" }));
        const descriptions: string[] = imagesArr.map((img) => img?.description).filter(Boolean).map(String);

        const vids: any[] = Array.isArray(data.videos) ? data.videos : (Array.isArray(data.projectVideos) ? data.projectVideos : []);
        const videos: MediaItem[] = vids.map((v: any, idx: number): MediaItem => {
          const videoUrl = typeof v === "string" ? v : (v.video_url || v.videoUrl || v.url || v.src || "");
          return { id: `vid-${idx}`, src: videoUrl, alt: title || `Video ${idx + 1}`, type: "video", videoUrl };
        });

        const background = photos[0]?.src || "/assets/construction/project1/IMG-20251215-WA0160.jpg";

        if (mounted) setState({ title, location, photos, descriptions, videos, background, ready: true });
      } catch {
        if (mounted) setState((s) => ({ ...s, ready: true }));
      }
    })();
    return () => { mounted = false; };
  }, [slug]);

  const content = useMemo(() => {
    if (!state.ready) {
      return (
        <div className="container mx-auto px-4 py-10 text-gray-500">Loading...</div>
      );
    }

    return (
      <>
        <HeroBanner backgroundImage={state.background} isSlugPage />

        <ProjectDescription
          description={state.descriptions}
          details={""}
          photos={state.photos}
          title={state.title}
          location={state.location}
        />

        <MediaSection videos={state.videos} />
        <MoreServices />
      </>
    );
  }, [state]);

  return content;
}

