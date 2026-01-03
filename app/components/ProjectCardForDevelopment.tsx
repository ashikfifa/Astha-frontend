import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "../utils/type";

// Map icon from Figma
const MAP_ICON = "/assets/map-icon.png";

// Helper function to convert text to slug
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

interface ProjectCardForDevelopmentProps extends ProjectCardProps {
  basePath?: string;
}

const ProjectCardForDevelopment: React.FC<ProjectCardForDevelopmentProps> = ({
  image,
  imageUrl,
  location,
  title,
  href,
  slug,
  basePath = "/development",
}) => {
  const link = href || (slug ? `${basePath}/${slug}` : `${basePath}/${createSlug(location)}-${createSlug(title)}`);

  return (
    <Link
      href={link}
      className="group block bg-white border border-[#cbcbcb] rounded-[10px] overflow-hidden hover:shadow-lg hover:border-gray-400 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="p-1.5">
        <div className="relative w-full aspect-4/3 overflow-hidden rounded-[10px]">
          <Image
            src={imageUrl || image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-4 pt-2">
        {/* Location */}
        <div className="flex items-center gap-1.5 mb-1">
          <Image
            src={MAP_ICON}
            alt="Location"
            width={12}
            height={12}
            className="opacity-70"
            loading="lazy"
          />
          <span className="text-xs sm:text-sm text-gray-700">{location}</span>
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-bold text-black leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCardForDevelopment;
