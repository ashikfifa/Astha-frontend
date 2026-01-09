import { Metadata } from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import { CONSTRUCTION_PROJECTS } from "../utils/common";
import ConstructionMoreServices from "@/app/sections/construction-page/MoreServices";
import API_ENDPOINT from "@/app/config/api";

export const dynamic = "force-dynamic";

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

type ConstructionItem = {
    id: number;
    title: string;
    slug: string;
    location: string;
    image: string;
    image_url: string;
};

async function getConstructions() {
    try {
        const res = await fetch(`${API_ENDPOINT}/construction`, {
            // Adjust caching as needed for your deployment
            // next: { revalidate: 60 },
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch developments: ${res.status}`);
        }

        const data: ConstructionItem[] = await res.json();

        return data.map((item) => ({
            image: item.image_url || item.image,
            location: item.location,
            title: item.title,
            href: `/construction/${item.slug}`,
            projectDescription: "",
            keyDetails: "",
        }));
    } catch (e) {
        // On failure, return empty list so page still renders
        return [] as any[];
    }
}

export default async function ConstructionPage() {
    const projects = await getConstructions();

    return (
    <div>
      <HeroBanner
        title="Construction"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Construction" }]}
        backgroundImage="/assets/construction/project1/IMG-20251215-WA0160.jpg"
      />

      <MotoSection title="Take a brief look at some of the construction services" />
      <ProjectGrid projects={projects} basePath="/construction" />
      {/*<VideoSection />*/}
      <ConstructionMoreServices />
    </div>
  );
}
