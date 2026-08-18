import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const account = String(body.account ?? "").trim();
  const password = String(body.password ?? "").trim();

  if (!account || !password) {
    return NextResponse.json({ error: "Invalid login" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
