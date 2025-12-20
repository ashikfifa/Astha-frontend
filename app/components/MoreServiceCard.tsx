import Image from "next/image";
import { MoreServiceCardProps } from "../utils/type";


const MoreServiceCard: React.FC<MoreServiceCardProps> = ({
  image,
  title,
  href = "#",
}) => {
  return (
    <a
      href={href}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base sm:text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
        {title}
      </h3>
    </a>
  );
};

export default MoreServiceCard;