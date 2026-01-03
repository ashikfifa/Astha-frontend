import {Metadata} from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MoreServices from "../sections/development-page/MoreServices";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import VideoSection from "../sections/landing-page/VideoSection";
import {INTERIOR_PROJECTS} from "../utils/common";
import InteriorMoreServices from "@/app/sections/interior-page/MoreServices";
import {ENDPOINTS} from "@/app/utils/config";
import {ProjectCardProps} from "@/app/utils/type";

export const dynamic = 'force-dynamic';

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

async function fetchInteriorProjects(): Promise<ProjectCardProps[]> {
    try {
        const res = await fetch(ENDPOINTS.interior, {cache: "force-cache"});
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected API shape");

        const mapped: ProjectCardProps[] = data.map((item: any): ProjectCardProps => ({
            image: item.image || "/assets/development/development-image.jpeg",
            coverImage: item.coverImage || undefined,
            location: item.location || "",
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
    } catch {
        return INTERIOR_PROJECTS;
    }
}

export default async function InteriorPage() {
    const projects = await fetchInteriorProjects();
    return (
        <div>
            <HeroBanner
                title="Interior"
                breadcrumbs={[{label: "Home", href: "/"}, {label: "Interior"}]}
                backgroundImage="/assets/development/development-image.jpeg"
            />

            <MotoSection title="Take a brief look at some of the interior design services"/>
            <ProjectGrid projects={projects} basePath="/interior"/>
            {/*<VideoSection />*/}
            <InteriorMoreServices/>
        </div>
    );
}
