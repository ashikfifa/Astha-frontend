import { Metadata } from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import VideoSection from "../sections/landing-page/VideoSection";
import { INTERIOR_PROJECTS } from "../utils/common";

export const metadata: Metadata = {
  title: "Interior Design",
  description:
    "Transform your spaces with Aastha's professional interior design services. We create beautiful, functional, and personalized interiors for homes and offices.",
  openGraph: {
    title: "Interior Design | Aastha",
    description:
      "Professional interior design services for homes and offices.",
  },
};

export default function InteriorPage() {
  return (
    <div>
      <HeroBanner
        title="Interior"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Interior" }]}
        backgroundImage="/assets/development/development-image.jpeg"
      />

      <MotoSection title="Take a brief look at some of the interior design services" />
      <ProjectGrid projects={INTERIOR_PROJECTS} basePath="/interior" />
      {/*<VideoSection />*/}
      <MoreServices />
    </div>
  );
}
