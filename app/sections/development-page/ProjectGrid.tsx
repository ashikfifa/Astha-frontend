import ProjectCardForDevelopment from "@/app/components/ProjectCardForDevelopment";
import { DEFAULT_PROJECTS } from "@/app/utils/common";
import { ProjectCardProps } from "@/app/utils/type";

// Figma asset URLs (valid for 7 days - download for production)


interface ProjectGridProps {
  projects?: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects = DEFAULT_PROJECTS,
}) => {
  return (
    <section className="w-full bg-white pb-8 sm:pb-12 md:pb-16">
      <div className="container mx-auto px-10 sm:px-12 lg:px-20">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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