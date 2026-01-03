import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/app/utils/config";

// Prefer server-only env var; otherwise use the shared config base
const BASE = process.env.EXTERNAL_API_BASE_URL || API_BASE_URL;

export async function GET() {
  try {
    const url = `${BASE.replace(/\/$/, "")}/development`;
    const res = await fetch(url, {
      // Cache upstream for an hour; adjust as needed
      next: { revalidate: 3600 },
      // Headers are optional; uncomment if your API requires JSON accept
      // headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      // Forward upstream status while keeping a helpful message
      return NextResponse.json(
        { error: `Upstream error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    // On network error, return empty array so callers can gracefully fallback
    return NextResponse.json([], { status: 200 });
  }
}
