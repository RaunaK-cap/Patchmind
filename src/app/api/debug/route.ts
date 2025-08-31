// src/app/api/debug/route.ts (Next.js App Router)
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ? "✅ set" : "❌ missing",
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  });
}
