import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import VideoSection from "../sections/landing-page/VideoSection";
import { CONSTRUCTION_PROJECTS } from "../utils/common";

export default function ConstructionPage() {
  return (
    <div>
      <HeroBanner
        title="Construction"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Construction" }]}
        backgroundImage="/assets/development/development-image.jpeg"
      />

      <MotoSection title="Take a brief look at some of the construction services" />
      <ProjectGrid projects={CONSTRUCTION_PROJECTS} basePath="/construction" />
      <VideoSection />
      <MoreServices />
    </div>
  );
}
