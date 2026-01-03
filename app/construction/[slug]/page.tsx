import { ENDPOINTS } from "@/app/utils/config";
import { CONSTRUCTION_PROJECTS } from "@/app/utils/common";
import SlugClient from "./SlugClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = new Set<string>();
  const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  try {
    const res = await fetch(ENDPOINTS.construction, { cache: 'force-cache' });
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
  // Always include local fallbacks so export succeeds
  for (const p of CONSTRUCTION_PROJECTS) {
    slugs.add(`${slugify(p.location)}-${slugify(p.title)}`);
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}

interface PageProps { params: Promise<{ slug: string }> }

const ConstructionSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <SlugClient slug={slug} />;
};

export default ConstructionSlugPage;
