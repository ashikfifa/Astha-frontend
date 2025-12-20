import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="relative bg-[rgba(70,61,52,0.55)] border-[3px] border-solid border-white rounded-[15px] max-w-[232px] w-full  overflow-hidden flex flex-col">
      {/* Card Image */}
      <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] p-1">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-[12px]"
          loading="lazy"
          sizes="232px"
        />
      </div>

      {/* Card Content */}
      <div className="px-4 pb-5 flex flex-col gap-2">
        {/* Title */}
        <h3 className="font-bold text-white text-sm sm:text-base md:text-lg leading-tight min-h-[40px] flex items-end">
          {title}
        </h3>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/60" />

        {/* Description */}
        <p className="font-bold text-white text-[10px] sm:text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
