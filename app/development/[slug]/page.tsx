import { ENDPOINTS } from "@/app/utils/config";
import { DEFAULT_PROJECTS } from "@/app/utils/common";
import SlugClient from "./SlugClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = new Set<string>();
  const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  try {
    // Use no-store to ensure fresh data during build
    const res = await fetch(ENDPOINTS.development, { 
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    if (res.ok) {
      const list = await res.json();
      console.log('[Build] Development API returned:', JSON.stringify(list, null, 2));
      if (Array.isArray(list)) {
        for (const item of list) {
          const s = (item && (item.slug || `${slugify(item.location || '')}-${slugify(item.title || '')}`)) as string;
          if (s) {
            slugs.add(s);
            console.log('[Build] Added development slug:', s);
          }
        }
      }
    } else {
      console.error('[Build] Development API failed with status:', res.status);
    }
  } catch (error) {
    console.error('[Build] Development API error:', error);
  }
  for (const p of DEFAULT_PROJECTS) {
    slugs.add(`${slugify(p.location)}-${slugify(p.title)}`);
  }
  console.log('[Build] Final development slugs:', Array.from(slugs));
  return Array.from(slugs).map((slug) => ({ slug }));
}

interface PageProps { params: Promise<{ slug: string }> }

const DevelopmentSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <SlugClient slug={slug} />;
};

export default DevelopmentSlugPage;
