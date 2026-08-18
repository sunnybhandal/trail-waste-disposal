import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "").trim();

  if (!email || !password) {
    return NextResponse.json({ error: "Invalid login" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
