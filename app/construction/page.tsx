import { Metadata } from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import { CONSTRUCTION_PROJECTS } from "../utils/common";
import ConstructionMoreServices from "@/app/sections/construction-page/MoreServices";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Aastha provides professional construction services for residential and commercial projects. Quality craftsmanship, timely delivery, and exceptional building standards.",
  openGraph: {
    title: "Construction Services | Aastha",
    description:
      "Professional construction services for residential and commercial projects.",
  },
};

export default function ConstructionPage() {
  return (
    <div>
      <HeroBanner
        title="Construction"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Construction" }]}
        backgroundImage="/assets/construction/project1/IMG-20251215-WA0160.jpg"
      />

      <MotoSection title="Take a brief look at some of the construction services" />
      <ProjectGrid projects={CONSTRUCTION_PROJECTS} basePath="/construction" />
      {/*<VideoSection />*/}
      <ConstructionMoreServices />
    </div>
  );
}
