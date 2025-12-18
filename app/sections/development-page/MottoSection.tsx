interface MotoSectionProps {
  title: string;
  subtitle?: string;
}

const MotoSection: React.FC<MotoSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative w-full bg-white rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] -mt-8 sm:-mt-10 md:-mt-12 z-20">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-500 mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black text-[#6e6e6e] leading-snug">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MotoSection;