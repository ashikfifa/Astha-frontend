import ProjectDescription from "@/app/components/ProjectDescription";
import HeroBanner from "@/app/sections/development-page/HeroBanner";
import MediaSection from "@/app/sections/single-page/MediaSection";
import InteriorMoreServices from "@/app/sections/interior-page/MoreServices";
import { MediaItem } from "@/app/utils/type";
import { ENDPOINTS } from "@/app/utils/config";
import { INTERIOR_PROJECTS } from "@/app/utils/common";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = new Set<string>();
  const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  try {
    const res = await fetch(ENDPOINTS.interior, { cache: 'force-cache' });
    if (res.ok) {
      const list = await res.json();
      if (Array.isArray(list)) {
        for (const item of list) {
          const s = (item && (item.slug || `${slugify(item.location || '')}-${slugify(item.title || '')}`)) as string;
          if (s) slugs.add(s);
        }
      }
    }
  } catch {}
  for (const p of INTERIOR_PROJECTS) {
    slugs.add(`${slugify(p.location)}-${slugify(p.title)}`);
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}

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

  let data: any | null = null;
  try {
    const res = await fetch(`${ENDPOINTS.interior}/${encodeURIComponent(slug)}`, { cache: 'force-cache' });
    if (res.ok) data = await res.json();
  } catch {}

  const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  const local = INTERIOR_PROJECTS.find(p => `${slugify(p.location)}-${slugify(p.title)}` === slug);

  const title: string = (data?.title) || local?.title || 'Untitled';
  const location: string = (data?.location) || local?.location || '';

  // Build photos and description arrays from images[]
  const imagesArr: any[] = Array.isArray(data?.images) ? data.images : [];
  const photos: MediaItem[] = imagesArr
    .filter((img) => !!img?.image_url)
    .map((img, idx) => ({ id: `img-${idx}`, src: String(img.image_url), alt: img.description || title || `Image ${idx + 1}`, type: 'photos' }));
  let descriptionList: string[] = imagesArr
    .map((img) => img?.description)
    .filter(Boolean)
    .map(String);

  let videos: MediaItem[] = mapVideosToMediaItems((data?.videos || data?.projectVideos || []), title);
  let backgroundImage: string = photos[0]?.src || '/assets/development/development-image.jpeg';

  if (!data && local) {
    const localPhotos: MediaItem[] = (local.projectPhotos || []).map((p, idx) => ({ ...p, id: p.id || `local-${idx}`, type: 'photos' } as MediaItem));
    if (!photos.length) localPhotos.forEach(p => photos.push(p));
    if (!descriptionList.length && local.projectDescription) descriptionList = [local.projectDescription];
    if (!videos.length) videos = (local.projectVideos || []) as MediaItem[];
    backgroundImage = local.coverImage || local.image || backgroundImage;
  }

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
