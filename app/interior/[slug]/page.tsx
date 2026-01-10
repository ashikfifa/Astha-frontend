import ProjectDescription from "@/app/components/ProjectDescription";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import MoreServices from "@/app/sections/development-page/MoreServices";
import MediaSection from "@/app/sections/single-page/MediaSection";
import {INTERIOR_PROJECTS} from "@/app/utils/common";
import API_ENDPOINT from "@/app/config/api";

export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import {MediaItem} from "@/app/utils/type";

// Helper function to convert text to slug
const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Find project by slug (using location-title format)
const getDefaultProjectBySlug = (slug: string) => {
    return (
        INTERIOR_PROJECTS.find(
            (project) =>
                `${createSlug(project.location)}-${createSlug(project.title)}` === slug
        ) ||
        INTERIOR_PROJECTS.find((project) => createSlug(project.title) === slug) ||
        null
    );
};

async function getInteriorFromApi(slug: string) {
    try {
        const res = await fetch(`${API_ENDPOINT}/interior/${slug}`, { cache: "no-store" });
        if (!res.ok) return null;
        const raw = await res.json();
        const item: any = Array.isArray(raw) ? (raw[0] ?? null) : (raw?.data ?? raw ?? null);
        if (!item) return null;
        const images: any[] = Array.isArray(item.images) ? item.images : [];
        const projectPhotos = images
            .map((img, idx) => {
                const src = img?.image_url || img?.url || img;
                if (!src || typeof src !== "string") return null;
                return {
                    id: `int-${slug}-${idx}`,
                    src,
                    alt: item.title || `Photo ${idx + 1}`,
                    type: "photos" as const,
                };
            })
            .filter(Boolean) as { id: string; src: string; alt: string; type: "photos" }[];
        const keyDetails = images
            .map((img) => (typeof img?.description === "string" ? img.description.trim() : ""))
            .filter((s) => s && s.length > 0);
        const vids: any[] = Array.isArray(item.videos) ? item.videos : [];
        const videos: MediaItem[] = vids.map((v: any, idx: number): MediaItem => {
            const videoUrl = typeof v === "string" ? v: (v.video_url || "");
            return {
                id: `int-video-${slug}-${idx}`,
                src: videoUrl,
                alt: item.title,
                type: "video",
                videoUrl
            };
        });
        const projectVideos = videos
        return {
            image: item.image_url || item.image || "",
            coverImage: item.image_url || item.image || "",
            location: item.location || "",
            title: item.title || "",
            projectDescription: "",
            keyDetails,
            projectPhotos,
            projectVideos: projectVideos,
        };
    } catch {
        return null;
    }
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

const InteriorSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
    const project = (await getInteriorFromApi(slug)) || getDefaultProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <HeroBanner
        backgroundImage={project.coverImage || project.image}
        isSlugPage
      />

        <ProjectDescription
            description={project.projectDescription}
            details=""
            keyDetails={project.keyDetails as any}
            photos={project.projectPhotos ?? []}
            title={project.title}
            location={project.location}
        />

      <MediaSection videos={project.projectVideos ?? []} />

      <MoreServices />
    </div>
  );
};

export default InteriorSlugPage;
