import BrochureSection from "@/app/components/BrochureSection";
import ProjectDescription from "@/app/components/ProjectDescription";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import MoreServices from "@/app/sections/development-page/MoreServices";
import MediaSection from "@/app/sections/single-page/MediaSection";
import { DEFAULT_PROJECTS } from "@/app/utils/common";
import API_ENDPOINT from "@/app/config/api";
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";

// Helper function to convert text to slug (same as in ProjectCardForDevelopment)
const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Find project from defaults by slug (supports both composite and title-only slugs)
const getDefaultProjectBySlug = (slug: string) => {
  return (
    DEFAULT_PROJECTS.find(
      (project) =>
        `${createSlug(project.location)}-${createSlug(project.title)}` === slug
    ) ||
    DEFAULT_PROJECTS.find((project) => createSlug(project.title) === slug) ||
    null
  );
};

type DevelopmentItem = {
  id: number;
  title: string;
  slug: string;
  location: string;
  image: string;
  image_url: string;
};

async function getDevelopmentFromApi(slug: string) {
  try {
    const res = await fetch(`${API_ENDPOINT}/development/${slug}`, { cache: "no-store" });
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
          id: `dev-${slug}-${idx}`,
          src,
          alt: item.title || `Photo ${idx + 1}`,
          type: "photos" as const,
        };
      })
      .filter(Boolean) as { id: string; src: string; alt: string; type: "photos" }[];
    const keyDetails = images
      .map((img) => (typeof img?.description === "string" ? img.description.trim() : ""))
      .filter((s) => s && s.length > 0);
    return {
      image: item.image_url || item.image || "",
      coverImage: item.image_url || item.image || "",
      location: item.location || "",
      title: item.title || "",
      projectDescription: "",
      keyDetails,
      projectPhotos,
      projectVideos: [],
    };
  } catch {
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// No static params; route is fully dynamic for SSR

const DevelopmentSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = (await getDevelopmentFromApi(slug)) || getDefaultProjectBySlug(slug);
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

      {project.title === "Dreams Mansion" && (
        <BrochureSection pdfPath="/assets/file/DREAMS MANSION BROCHURE_AASTHA 06.03.2024.pdf" />
      )}

      <MoreServices />
    </div>
  );
};

export default DevelopmentSlugPage;
