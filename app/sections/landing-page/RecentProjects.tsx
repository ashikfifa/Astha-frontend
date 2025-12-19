import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

// Projects data from Figma design
const projectsData = [
  {
    id: 1,
    image:
      "/assets/mixed-use-development.jpeg",
    location: "Dhaka",
    title: "Mixed Use Development",
  },
  {
    id: 2,
    image:
      "/assets/greenview-apartments.jpeg",
    location: "Sylhet",
    title: "Greenview Apartments",
  },
  {
    id: 3,
    image:
      "/assets/premier-office-tower.jpeg",
    location: "Khulna",
    title: "Premier Office Tower",
  },
  {
    id: 4,
    image:
      "/assets/urban-heights-residence.jpeg",
    location: "Chittagong",
    title: "Urban Heights Residence",
  },
];

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
