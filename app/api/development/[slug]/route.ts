import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/app/utils/config";

const BASE = process.env.EXTERNAL_API_BASE_URL || API_BASE_URL;

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slug: string }> }
) {
  const { slug } = await ctx.params;
  const upstream = `${BASE.replace(/\/$/, "")}/development/${encodeURIComponent(slug)}`;

  try {
    const res = await fetch(upstream, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${res.status}` },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Network error" },
      { status: 502 }
    );
  }
}

