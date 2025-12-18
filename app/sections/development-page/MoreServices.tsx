import MoreServiceCard from "@/app/components/MoreServiceCard";
import { MoreServiceCardProps } from "@/app/utils/type";

const SERVICE_IMAGES = {
  construction: "https://www.figma.com/api/mcp/asset/04e9fdfe-1ce7-4cd4-8255-a3e26f0b3fd2",
  interior: "https://www.figma.com/api/mcp/asset/1fa1b73e-ee3c-40ea-8b76-3290030e2568",
};

// Default services data
const DEFAULT_SERVICES: MoreServiceCardProps[] = [
  {
    image: SERVICE_IMAGES.construction,
    title: "Construction",
    href: "/services/construction",
  },
  {
    image: SERVICE_IMAGES.interior,
    title: "Interior",
    href: "/services/interior",
  },
];

interface MoreServicesProps {
  title?: string;
  services?: MoreServiceCardProps[];
  viewAllHref?: string;
  showViewAll?: boolean;
}

const MoreServices: React.FC<MoreServicesProps> = ({
  title = "More Services",
  services = DEFAULT_SERVICES,
  viewAllHref = "/services",
  showViewAll = true,
}) => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              {title}
            </h2>

            {showViewAll && (
              <a
                href={viewAllHref}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-white bg-[#e01e26] hover:bg-[#c41a21] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors"
              >
                View All
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <MoreServiceCard
                key={index}
                image={service.image}
                title={service.title}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServices;

// Export service images for external use
export { SERVICE_IMAGES, DEFAULT_SERVICES };