import { Metadata } from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import { INTERIOR_PROJECTS } from "../utils/common";
import InteriorMoreServices from "@/app/sections/interior-page/MoreServices";
import API_ENDPOINT from "@/app/config/api";

export const dynamic = "force-dynamic";

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

type InteriorItem = {
    id: number;
    title: string;
    slug: string;
    location: string;
    image: string;
    image_url: string;
};

async function getInteriors() {
    try {
        const res = await fetch(`${API_ENDPOINT}/interior`, {
            // Adjust caching as needed for your deployment
            // next: { revalidate: 60 },
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch developments: ${res.status}`);
        }

        const data: InteriorItem[] = await res.json();

        return data.map((item) => ({
            image: item.image_url || item.image,
            location: item.location,
            title: item.title,
            href: `/interior/${item.slug}`,
            projectDescription: "",
            keyDetails: "",
        }));
    } catch (e) {
        // On failure, return empty list so page still renders
        return [] as any[];
    }
}

export default async function InteriorPage() {
    const projects = await getInteriors();

    return (
    <div>
      <HeroBanner
        title="Interior"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Interior" }]}
        backgroundImage="/assets/development/development-image.jpeg"
      />

      <MotoSection title="Take a brief look at some of the interior design projects" />
      <ProjectGrid projects={projects} basePath="/interior" />
      {/*<VideoSection />*/}
      <InteriorMoreServices />
    </div>
  );
}
