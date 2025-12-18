import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import VideoSection from "../sections/landing-page/VideoSection";

export default function DevelopmentPage() {
  return (
    <div>
      <HeroBanner
        title="Development"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Development" }]}
        backgroundImage="https://www.figma.com/api/mcp/asset/4bd9bab9-9e3f-46e5-bb55-08c757248229"
      />

      <MotoSection title="Take a brief look at some of the development services" />
      <ProjectGrid />
      <VideoSection />
      <MoreServices />
    </div>
  );
}
