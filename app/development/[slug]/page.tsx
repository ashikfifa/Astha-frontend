import BrochureSection from "@/app/components/BrochureSection";
import ProjectDescription from "@/app/components/ProjectDescription";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import MoreServices from "@/app/sections/development-page/MoreServices";
import MediaSection from "@/app/sections/single-page/MediaSection";
import { DEFAULT_PROJECTS } from "@/app/utils/common";
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

// Find project by slug (using location-title format)
const getProjectBySlug = (slug: string) => {
  return DEFAULT_PROJECTS.find(
    (project) =>
      `${createSlug(project.location)}-${createSlug(project.title)}` === slug
  );
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DevelopmentSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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

      {project.title === "Dreams Mansion" && (
        <BrochureSection pdfPath="/assets/file/DREAMS MANSION BROCHURE_AASTHA 06.03.2024.pdf" />
      )}

      <MoreServices />
    </div>
  );
};

export default DevelopmentSlugPage;
