import {Metadata} from "next";
import HeroBanner from "../sections/development-page/HeroBanner";
import MotoSection from "../sections/development-page/MottoSection";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import {CONSTRUCTION_PROJECTS} from "../utils/common";
import ConstructionMoreServices from "@/app/sections/construction-page/MoreServices";
import {ENDPOINTS} from "@/app/utils/config";
import {ProjectCardProps} from "@/app/utils/type";

export const dynamic = 'force-dynamic';

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

async function fetchConstructionProjects(): Promise<ProjectCardProps[]> {
    try {
        const res = await fetch(ENDPOINTS.construction, {cache: "force-cache"});
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected API shape");

        const mapped: ProjectCardProps[] = data.map((item: any): ProjectCardProps => ({
            image: item.image || "/assets/construction/project1/IMG-20251215-WA0160.jpg",
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
        return CONSTRUCTION_PROJECTS;
    }
}

export default async function ConstructionPage() {
    const projects = await fetchConstructionProjects();
    return (
        <div>
            <HeroBanner
                title="Construction"
                breadcrumbs={[{label: "Home", href: "/"}, {label: "Construction"}]}
                backgroundImage="/assets/construction/project1/IMG-20251215-WA0160.jpg"
            />

            <MotoSection title="Take a brief look at some of the construction services"/>
            <ProjectGrid projects={projects} basePath="/construction"/>
            <ConstructionMoreServices/>
        </div>
    );
}
