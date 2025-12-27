import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
  backgroundImage: string;
  priority?: boolean;
}

const HeroBanner: React.FC<HeroSectionProps> = ({
  title,
  breadcrumbs,
  backgroundImage,
  priority = true,
}) => {
  return (
    <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-top"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="100vw"
          quality={85}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="mt-4 sm:mt-6">
          <ul className="flex items-center gap-2 sm:gap-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2 sm:gap-3">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-xs sm:text-sm font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-xs sm:text-sm font-bold text-gray-400">
                    {crumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-400" />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeroBanner;