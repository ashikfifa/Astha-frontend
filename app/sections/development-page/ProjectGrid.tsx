import ProjectCardForDevelopment from "@/app/components/ProjectCardForDevelopment";
import { ProjectCardProps } from "@/app/utils/type";

// Figma asset URLs (valid for 7 days - download for production)
const PROJECT_IMAGES = {
  dhaka: "https://www.figma.com/api/mcp/asset/70ec8061-b4cc-4e79-98de-e705e5bab2b0",
  khulna: "https://www.figma.com/api/mcp/asset/645c4fbe-80ac-417c-9500-7ee3377d87c2",
  uttara: "https://www.figma.com/api/mcp/asset/04e9fdfe-1ce7-4cd4-8255-a3e26f0b3fd2",
  mirpurDohs: "https://www.figma.com/api/mcp/asset/f29ad8ec-443a-4c4d-b4e5-d01fdeffba07",
  dhanmondi: "https://www.figma.com/api/mcp/asset/4bd9bab9-9e3f-46e5-bb55-08c757248229",
  cumilla: "https://www.figma.com/api/mcp/asset/2a1db72d-0e1a-48eb-ba5d-d13df10eee4a",
  sylhet: "https://www.figma.com/api/mcp/asset/f5dc5f86-0887-4b09-8973-e86a7778ddb2",
  uttara2: "https://www.figma.com/api/mcp/asset/1fa1b73e-ee3c-40ea-8b76-3290030e2568",
  mirpur1: "https://www.figma.com/api/mcp/asset/21992b1e-7ef6-4f56-b914-e74d75789240",
};

// Default project data
const DEFAULT_PROJECTS: ProjectCardProps[] = [
  {
    image: PROJECT_IMAGES.dhaka,
    location: "Dhaka",
    title: "Mixed Use Development",
    href: "/projects/dhaka",
  },
  {
    image: PROJECT_IMAGES.khulna,
    location: "Khulna",
    title: "Mixed Use Development",
    href: "/projects/khulna",
  },
  {
    image: PROJECT_IMAGES.uttara,
    location: "Uttara",
    title: "Mixed Use Development",
    href: "/projects/uttara",
  },
  {
    image: PROJECT_IMAGES.mirpurDohs,
    location: "Mirpur DOHS",
    title: "Mixed Use Development",
    href: "/projects/mirpur-dohs",
  },
  {
    image: PROJECT_IMAGES.dhanmondi,
    location: "Dhanmondi",
    title: "Mixed Use Development",
    href: "/projects/dhanmondi",
  },
  {
    image: PROJECT_IMAGES.cumilla,
    location: "Cumilla",
    title: "Mixed Use Development",
    href: "/projects/cumilla",
  },
  {
    image: PROJECT_IMAGES.sylhet,
    location: "Sylhet",
    title: "Mixed Use Development",
    href: "/projects/sylhet",
  },
  {
    image: PROJECT_IMAGES.uttara2,
    location: "Uttara",
    title: "Mixed Use Development",
    href: "/projects/uttara-2",
  },
  {
    image: PROJECT_IMAGES.mirpur1,
    location: "Mirpur 1",
    title: "Mixed Use Development",
    href: "/projects/mirpur-1",
  },
];

interface ProjectGridProps {
  projects?: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects = DEFAULT_PROJECTS,
}) => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCardForDevelopment
              key={index}
              image={project.image}
              location={project.location}
              title={project.title}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;