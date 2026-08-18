import { NextResponse } from "next/server";
import { businessTypes } from "@/lib/site";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const address = String(body.address ?? "").trim();
  const businessType = String(body.businessType ?? "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const typeOk = (businessTypes as readonly string[]).includes(businessType);

  if (!name || !phone || !emailOk || !address || !typeOk) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
