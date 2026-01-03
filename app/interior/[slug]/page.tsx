import ProjectDescription from "@/app/components/ProjectDescription";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import MediaSection from "@/app/sections/single-page/MediaSection";
import InteriorMoreServices from "@/app/sections/interior-page/MoreServices";
import { MediaItem } from "@/app/utils/type";
import { API_BASE_URL } from "@/app/utils/config";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function mapVideosToMediaItems(videos: any[], title?: string): MediaItem[] {
  if (!Array.isArray(videos)) return [];
  return videos.map((v: any, idx: number): MediaItem => {
    if (typeof v === 'string') {
      return { id: `vid-${idx}`, src: v, alt: title || `Video ${idx + 1}`, type: 'video', videoUrl: v };
    }
    const videoUrl = v.video_url || v.videoUrl || v.url || v.src || '';
    return { id: `vid-${idx}`, src: videoUrl, alt: v.alt || title || `Video ${idx + 1}`, type: 'video', videoUrl };
  });
}

const InteriorSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const base = API_BASE_URL.replace(/\/$/, "");
  const res = await fetch(`${base}/interior/${encodeURIComponent(slug)}`, { cache: 'no-store' });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  const title: string = data.title || 'Untitled';
  const location: string = data.location || '';

  // Build photos and description arrays from images[]
  const imagesArr: any[] = Array.isArray(data.images) ? data.images : [];
  const photos: MediaItem[] = imagesArr
    .filter((img) => !!img?.image_url)
    .map((img, idx) => ({ id: `img-${idx}`, src: String(img.image_url), alt: img.description || title || `Image ${idx + 1}`, type: 'photos' }));
  const descriptionList: string[] = imagesArr
    .map((img) => img?.description)
    .filter(Boolean)
    .map(String);

  const videos: MediaItem[] = mapVideosToMediaItems(data.videos || data.projectVideos || [], title);
  const backgroundImage: string = photos[0]?.src || '/assets/development/development-image.jpeg';

  return (
    <div>
      <HeroBanner backgroundImage={backgroundImage} isSlugPage />

      <ProjectDescription
        description={descriptionList}
        details={''}
        photos={photos}
        title={title}
        location={location}
      />

      <MediaSection videos={videos} />
      <InteriorMoreServices />
    </div>
  );
};

export default InteriorSlugPage;
