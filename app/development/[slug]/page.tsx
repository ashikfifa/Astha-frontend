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
    (project) => `${createSlug(project.location)}-${createSlug(project.title)}` === slug
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
        title={project.title}
        backgroundImage={project.coverImage || project.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Development", href: "/development" },
          { label: project.title },
        ]}
        isSlugPage
      />

      <ProjectDescription
        description={project.projectDescription}
        details={project.keyDetails}
        featuredImage={project.image}
        photos={project.projectPhotos ?? []}
        title={project.title}
        location={project.location}
      />

      <MediaSection videos={project.projectVideos ?? []} />

      <MoreServices />
    </div>
  );
};

export default DevelopmentSlugPage;
