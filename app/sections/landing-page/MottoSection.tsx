import React from "react";

const MottoSection: React.FC = () => {
  return (
    <section className="relative z-10 mt-4 sm:mt-4 md:-mt-14 lg:-mt-20 -mb-8 sm:-mb-10 md:-mb-12 lg:-mb-16">
      {/* White container with rounded corners */}
      <div className="bg-white rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] px-4 sm:px-6 md:px-8 lg:px-12 pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-14 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-[#373535] font-bold leading-tight tracking-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl">
              Building Spaces that Build
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl">
              Your Future
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto">
            Quality developments designed for comfort, value, and long-term growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;