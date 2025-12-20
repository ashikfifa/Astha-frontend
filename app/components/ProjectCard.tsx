import Image from "next/image";

interface ProjectCardProps {
  image: string;
  location: string;
  title: string;
}

const mapIcon = "/assets/map-icon.png";

const ProjectCard = ({ image, location, title }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer w-full">
      {/* Project Image */}
      <div className="relative w-full h-[220px] sm:h-[240px] md:h-[280px] overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Project Info */}
      <div className="mt-3">
        {/* Location with Map Icon */}
        <div className="flex items-center gap-1.5 mb-1">
          <Image
            src={mapIcon}
            alt="Location"
            width={10}
            height={10}
            className="object-contain"
            loading="lazy"
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
