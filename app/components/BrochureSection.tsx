"use client";

interface BrochureSectionProps {
  pdfPath: string;
  title?: string;
}

const BrochureSection: React.FC<BrochureSectionProps> = ({
  pdfPath,
  title = "Download Brochure",
}) => {
  const handlePreview = () => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop() || "brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black">
              {title}
            </h2>
          </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Preview Button */}
          <button
            onClick={handlePreview}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm sm:text-base font-medium">Preview</span>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="text-sm sm:text-base font-medium">Download</span>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
