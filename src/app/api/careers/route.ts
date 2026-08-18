import { NextResponse } from "next/server";

const allowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
]);

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const document = formData.get("document");

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const file = document instanceof File ? document : null;

  if (!name || !phone || !emailOk || !file || file.size === 0) {
    return NextResponse.json({ error: "Invalid application" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large" }, { status: 400 });
  }

  if (file.type && !allowedTypes.has(file.type)) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
