import MoreServiceCard from "@/app/components/MoreServiceCard";
import { DEFAULT_SERVICES } from "@/app/utils/common";
import { MoreServiceCardProps } from "@/app/utils/type";

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
      <div className="container mx-auto px-10 sm:px-12 lg:px-32">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            {title}
          </h2>
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
    </section>
  );
};

export default MoreServices;
