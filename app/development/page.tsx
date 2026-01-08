import { Metadata } from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import VideoSection from "../sections/landing-page/VideoSection";
import API_ENDPOINT from "@/app/config/api";

export const dynamic = "force-dynamic";

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

type DevelopmentItem = {
  id: number;
  title: string;
  slug: string;
  location: string;
  image: string;
  image_url: string;
};

async function getDevelopments() {
  try {
    const res = await fetch(`${API_ENDPOINT}/development`, {
      // Adjust caching as needed for your deployment
      // next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch developments: ${res.status}`);
    }

    const data: DevelopmentItem[] = await res.json();

    return data.map((item) => ({
      image: item.image_url || item.image,
      location: item.location,
      title: item.title,
      href: `/development/${item.slug}`,
      projectDescription: "",
      keyDetails: "",
    }));
  } catch (e) {
    // On failure, return empty list so page still renders
    return [] as any[];
  }
}

export default async function DevelopmentPage() {
  const projects = await getDevelopments();

  return (
    <div>
      <HeroBanner
        title="Development"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Development" }]}
        backgroundImage="/assets/development/development-image.jpeg"
      />

      <MotoSection title="Take a brief look at some of the development services" />
      <ProjectGrid projects={projects} basePath="/development" />
      <VideoSection />
      <MoreServices />
    </div>
  );
}
