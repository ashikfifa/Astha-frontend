import { Metadata } from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import VideoSection from "../sections/landing-page/VideoSection";
import ProjectGridClient from "./ProjectGridClient";


export const metadata: Metadata = {
    title: "Real Estate Development",
    description:
        "Explore Aastha's real estate development projects. We specialize in building quality residential and commercial properties with modern design and sustainable practices.",
    openGraph: {
        title: "Real Estate Development | Aastha",
        description:
            "Explore Aastha's real estate development projects. Quality residential and commercial properties.",
    },
};

export default function DevelopmentPage() {
  return (
    <div>
      <HeroBanner
        title="Development"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Development" }]}
        backgroundImage="/assets/development/development-image.jpeg"
      />

      <MotoSection title="Take a brief look at some of the development services" />
      <ProjectGridClient />
      <VideoSection />
      <MoreServices />
    </div>
  );
}
