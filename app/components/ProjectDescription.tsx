import Image from "next/image";

interface ProjectDescriptionProps {
  description: string;
  details: string;
  featuredImage: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
  details,
  featuredImage,
}) => {
  return (
    <section className="relative w-full bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] -mt-8 sm:-mt-10 md:-mt-12 z-20">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-16 lg:py-20">
        {/* Featured Image */}
        <div className="w-full max-w-4xl mx-auto mb-10 md:mb-14 lg:mb-16">
          <div className="relative aspect-531/308 w-full rounded-2xl md:rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src={featuredImage}
              alt="Project Featured Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              priority
            />
          </div>
        </div>

        {/* Description and Key Details */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
            {/* Project Description */}
            <div className="lg:pr-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black">
                  Project Description
                </h2>
                <div className="text-sm md:text-base leading-relaxed text-black whitespace-pre-line">
                  {description}
                </div>
              </div>
            </div>

            {/* Key Details */}
            <div className="lg:pl-4">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black">
                  Key Details
                </h2>
                <dl className="flex flex-col gap-2">
                  {details}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto mt-10 md:mt-14 lg:mt-16">
          <hr className="border-t border-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
