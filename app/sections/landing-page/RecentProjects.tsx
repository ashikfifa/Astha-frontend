import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

// Projects data from Figma design
const projectsData = [
  {
    id: 1,
    image: "https://www.figma.com/api/mcp/asset/de5c3f82-e391-48dd-bd33-dbb9d763cc72",
    location: "Dhaka",
    title: "Mixed Use Development",
  },
  {
    id: 2,
    image: "https://www.figma.com/api/mcp/asset/95ef01d7-064a-495c-8790-86eb5a00d4ea",
    location: "Sylhet",
    title: "Greenview Apartments",
  },
  {
    id: 3,
    image: "https://www.figma.com/api/mcp/asset/de86cbdf-748f-460d-9f1d-61dc8a889e2a",
    location: "Khulna",
    title: "Premier Office Tower",
  },
  {
    id: 4,
    image: "https://www.figma.com/api/mcp/asset/6754b421-731a-4e66-82c0-7fdc78c61598",
    location: "Chittagong",
    title: "Urban Heights Residence",
  },
];

const RecentProjects = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
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

        {/* View All Link - Mobile */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Link
            href="/projects"
            className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded hover:bg-[#e01e26] transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;