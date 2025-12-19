import ProjectCardForDevelopment from "@/app/components/ProjectCardForDevelopment";
import { ProjectCardProps } from "@/app/utils/type";

// Figma asset URLs (valid for 7 days - download for production)
const PROJECT_IMAGES = {
  dhaka: "/assets/development/dhaka-project.jpeg",
  khulna: "/assets/development/khulna-project.jpeg",
  uttara: "/assets/development/uttara-project.jpeg",
  mirpurDohs: "/assets/development/mirpur-dohs-project.jpeg",
  dhanmondi: "/assets/development/dhanmondi-project.jpeg",
  cumilla: "/assets/development/cumilla-project.jpeg",
  sylhet: "/assets/development/sylhet-project.jpeg",
  uttara2: "/assets/development/uttara-2-project.jpeg",
  mirpur1: "/assets/development/mirpur-1-project.jpeg",
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
    <section className="w-full bg-white pb-8 sm:pb-12 md:pb-16">
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