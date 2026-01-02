import ProjectDescription from "@/app/components/ProjectDescription";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import MoreServices from "@/app/sections/development-page/MoreServices";
import MediaSection from "@/app/sections/single-page/MediaSection";
import { CONSTRUCTION_PROJECTS } from "@/app/utils/common";
import { notFound } from "next/navigation";

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
const getProjectBySlug = (slug: string) => {
  return CONSTRUCTION_PROJECTS.find(
    (project) => `${createSlug(project.location)}-${createSlug(project.title)}` === slug
  );
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CONSTRUCTION_PROJECTS.map((project) => ({
    slug: `${createSlug(project.location)}-${createSlug(project.title)}`,
  }));
}

const ConstructionSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
    console.log(project, "project", slug);
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
        details={project.keyDetails}
        photos={project.projectPhotos ?? []}
        title={project.title}
        location={project.location}
      />

      <MediaSection videos={project.projectVideos ?? []} />

      <MoreServices />
    </div>
  );
};

export default ConstructionSlugPage;
