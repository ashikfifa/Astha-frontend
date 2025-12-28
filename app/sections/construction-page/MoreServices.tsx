import MoreServiceCard from "@/app/components/MoreServiceCard";
import {CONSTRUCTION_SERVICES} from "@/app/utils/common";
import { MoreServiceCardProps } from "@/app/utils/type";

interface MoreServicesProps {
  title?: string;
  services?: MoreServiceCardProps[];
  viewAllHref?: string;
  showViewAll?: boolean;
}

const ConstructionMoreServices: React.FC<MoreServicesProps> = ({
  title = "More Services",
  services = CONSTRUCTION_SERVICES,
  viewAllHref = "/services",
  showViewAll = true,
}) => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-48 lg:px-80">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            {title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-10">
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

export default ConstructionMoreServices;
