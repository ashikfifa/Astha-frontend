import ServiceCard from "../components/ServiceCard";

const servicesData = [
  {
    id: 1,
    image: "https://www.figma.com/api/mcp/asset/de5c3f82-e391-48dd-bd33-dbb9d763cc72",
    title: "Real Estate Development",
    description:
      "Building a real estate development is a complicated task requiring both deep understanding…",
  },
  {
    id: 2,
    image: "https://www.figma.com/api/mcp/asset/a0104521-059a-44e4-9ee2-fbdcaf865de6",
    title: "Construction",
    description:
      "Building a real estate development is a complicated task requiring both deep understanding…",
  },
  {
    id: 3,
    image: "https://www.figma.com/api/mcp/asset/6d6f4024-455c-4234-911c-ebf905f1b94d",
    title: "Interior Design",
    description:
      "Building a real estate development is a complicated task requiring both deep understanding…",
  },
];

const OurServices = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Background Image - only covers top portion */}
      <div className="absolute top-0 left-0 right-0 h-[65%] sm:h-[60%] md:h-[72%]">
        <img
          src="https://www.figma.com/api/mcp/asset/90bd4647-c18c-4919-9a45-b8f66135365d"
          alt="Our Services Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-bold text-white text-xs md:text-sm mb-1">
            What we offer
          </p>
          <h2 className="font-extrabold text-white text-xl sm:text-2xl md:text-3xl">
            Our Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;