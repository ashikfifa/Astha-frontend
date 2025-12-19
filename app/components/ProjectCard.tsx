interface ProjectCardProps {
  image: string;
  location: string;
  title: string;
}

const mapIcon = "https://www.figma.com/api/mcp/asset/4d102edf-b465-4ed0-9eb3-eb54d72dd9d7";

const ProjectCard = ({ image, location, title }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer w-full">
      {/* Project Image */}
      <div className="relative w-full h-[220px] sm:h-[240px] md:h-[280px] overflow-hidden rounded-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Project Info */}
      <div className="mt-3">
        {/* Location with Map Icon */}
        <div className="flex items-center gap-1.5 mb-1">
          <img
            src={mapIcon}
            alt="Location"
            className="w-[10px] h-[10px] object-contain"
          />
          <span className="text-xs text-black/80">{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-black text-sm sm:text-base md:text-lg leading-tight group-hover:text-[#e01e26] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;