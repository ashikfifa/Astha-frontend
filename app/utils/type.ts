export interface ProjectCardProps {
    image: string;
    coverImage?: string;
    location: string;
    title: string;
    slug?: string;
    imageUrl?: string;
    href?: string;
    projectDescription: string;
    keyDetails: string;
    projectPhotos?: MediaItem[];
    projectVideos?: MediaItem[];
    brochurePath?: string;
}

export interface MoreServiceCardProps {
    image: string;
    title: string;
    href?: string;
}

export type MediaTab = "photos" | "video";

export interface MediaItem {
    id: string;
    src: string;
    alt: string;
    type: MediaTab;
    videoUrl?: string;
}

export interface MediaSectionProps {
    photos: MediaItem[];
    videos: MediaItem[];
}
