"use client";

import { useEffect, useState } from "react";
import ProjectGrid from "../sections/development-page/ProjectGrid";
import { ENDPOINTS } from "@/app/utils/config";
import { CONSTRUCTION_PROJECTS } from "@/app/utils/common";
import { ProjectCardProps } from "@/app/utils/type";

export default function ProjectGridClient() {
  const [projects, setProjects] = useState<ProjectCardProps[]>(CONSTRUCTION_PROJECTS);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(ENDPOINTS.construction, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (!Array.isArray(data)) return;
        const mapped: ProjectCardProps[] = data.map((item: any): ProjectCardProps => ({
          image: item.image || "/assets/construction/project1/IMG-20251215-WA0160.jpg",
          coverImage: item.coverImage || undefined,
          location: item.location || "",
          title: item.title || "Untitled",
          slug: item.slug || undefined,
          href: item.href || (item.slug ? `/construction/${item.slug}` : undefined),
          projectDescription: item.projectDescription || "",
          keyDetails: item.keyDetails || "",
          projectPhotos: Array.isArray(item.projectPhotos) ? item.projectPhotos : [],
          projectVideos: Array.isArray(item.projectVideos) ? item.projectVideos : [],
          brochurePath: item.brochurePath,
        }));
        if (mounted) setProjects(mapped);
      } catch {
        // keep defaults
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return <ProjectGrid projects={projects} basePath="/construction" />;
}
