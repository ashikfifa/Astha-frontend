import { projectsData } from "@/app/utils/common";
import ProjectCard from "../../components/ProjectCard";

const RecentProjects = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-5 md:mb-5">
          {/* Title */}
          <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl leading-tight">
            Explore our
            <br />
            recent project
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              location={project.location}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
