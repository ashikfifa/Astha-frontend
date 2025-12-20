export interface ProjectCardProps {
  image: string;
  location: string;
  title: string;
  href?: string;
  projectDescription: string;
  keyDetails: string;
  projectPhotos?: MediaItem[];
  projectVideos?: MediaItem[];
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
}

export interface MediaSectionProps {
  photos: MediaItem[];
  videos: MediaItem[];
}