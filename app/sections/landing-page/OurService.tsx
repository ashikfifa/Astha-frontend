import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";

const servicesData = [
  {
    id: 1,
    image: "/assets/real-estate-development.jpeg",
    title: "Real Estate Development",
    description:
      "Building a real estate development is a complicated task requiring both deep understanding…",
    href: "/development",
  },
  {
    id: 2,
    image: "/assets/construction.jpeg",
    title: "Construction",
    description:
      "Building a real estate development is a complicated task requiring both deep understanding…",
    href: "/construction",
  },
  {
    id: 3,
    image: "/assets/interior-design.jpeg",
    title: "Interior Design",
    description:
      "Building a real estate development is a complicated task requiring both deep understanding…",
    href: "/interior",
  },
];

const OurServices = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Background Image - only covers top portion */}
      <div className="absolute top-0 left-0 right-0 h-[65%] sm:h-[60%] md:h-[74%]">
        <Image
          src="/assets/whatOffer.jpeg"
          alt="Our Services Background"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
        {/* Section Header */}
        <div className="text-center mt-15 mb-8 md:mb-12">
          <p className="font-bold text-white text-xs md:text-sm">
            What we offer
          </p>
          <p className="font-extrabold text-white text-xl sm:text-2xl md:text-3xl">
            Our Services
          </p>
        </div>
{/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  */}
        {/* Service Cards Grid */}
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
