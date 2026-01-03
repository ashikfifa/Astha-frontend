import {Metadata} from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import VideoSection from "../sections/landing-page/VideoSection";
// Fetch through internal proxy to external API
import {ProjectCardProps} from "@/app/utils/type";
import {DEFAULT_PROJECTS} from "@/app/utils/common";
import {ENDPOINTS} from "@/app/utils/config";

// Ensure this page runs on the server per-request so internal API routes are available
export const dynamic = 'force-dynamic';

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

async function fetchDevelopmentProjects(): Promise<ProjectCardProps[]> {
    try {
        const res = await fetch(ENDPOINTS.development, {
            // Cache the proxy response to avoid hitting the external API on every request
            cache: "force-cache",
            // Or use ISR-style caching instead of full static: next: { revalidate: 3600 },
        });

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Unexpected API shape");

        const mapped: ProjectCardProps[] = data.map((item): ProjectCardProps => ({
            image: item.image || "/assets/development/development-image.jpeg",
            coverImage: item.coverImage || undefined,
            location: item.location || "Dhaka",
            title: item.title || "Untitled",
            slug: item.slug || undefined,
            imageUrl: item.image_url || undefined,
            href: item.href,
            projectDescription: item.projectDescription || "",
            keyDetails: item.keyDetails || "",
            projectPhotos: Array.isArray(item.projectPhotos) ? item.projectPhotos : [],
            projectVideos: Array.isArray(item.projectVideos) ? item.projectVideos : [],
            brochurePath: item.brochurePath,
        }));

        return mapped;
    } catch (err) {
        // Fallback to local defaults so the page still renders
        return DEFAULT_PROJECTS;
    }
}

export default async function DevelopmentPage() {
    const projects = await fetchDevelopmentProjects();
    return (
        <div>
            <HeroBanner
                title="Development"
                breadcrumbs={[{label: "Home", href: "/"}, {label: "Development"}]}
                backgroundImage="/assets/development/development-image.jpeg"
            />

            <MotoSection title="Take a brief look at some of the development services"/>
            <ProjectGrid projects={projects}/>
            <VideoSection/>
            <MoreServices/>
        </div>
    );
}
