import { ENDPOINTS } from "@/app/utils/config";
import { DEFAULT_PROJECTS } from "@/app/utils/common";
import SlugClient from "./SlugClient";
import type { Metadata } from "next";

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

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  // Safe defaults
  let title = "Development Project";
  let location = "";
  let images: string[] = [];

  try {
    const res = await fetch(`${ENDPOINTS.development}/${encodeURIComponent(slug)}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (res.ok) {
      const data = await res.json();
      title = data?.title || title;
      location = data?.location || "";
      const imgs: any[] = Array.isArray(data?.images) ? data.images : [];
      images = imgs.filter((i) => !!i?.image_url).map((i) => String(i.image_url));
    }
  } catch {
    // Ignore and use defaults
  }

  const fullTitle = location ? `${title} – ${location} | Aastha Development` : `${title} | Aastha Development`;
  const description = location
    ? `${title} in ${location}. Explore photos, videos, and details of this development project by Aastha.`
    : `${title}. Explore photos, videos, and details of this development project by Aastha.`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: `/development/${slug}` },
    openGraph: {
      title: fullTitle,
      description,
      type: "article",
      images: images.length
        ? images.slice(0, 4).map((url) => ({ url }))
        : undefined,
    },
  };
}

interface PageProps { params: Promise<{ slug: string }> }

const DevelopmentSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <SlugClient slug={slug} />;
};

export default DevelopmentSlugPage;
