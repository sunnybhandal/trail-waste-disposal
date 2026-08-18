import { NextResponse } from "next/server";
import {
  businessTypes,
  dumpsterSizes,
  pickupDays,
  pickupFrequencies,
  quantities,
  serviceTypes,
} from "@/lib/site";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const address = String(body.address ?? "").trim();
  const businessType = String(body.businessType ?? "").trim();
  const serviceType = String(body.serviceType ?? "").trim();
  const dumpsterSize = String(body.dumpsterSize ?? "").trim();
  const quantity = String(body.quantity ?? "").trim();
  const pickupFrequency = String(body.pickupFrequency ?? "").trim();
  const pickupDay = String(body.pickupDay ?? "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const valid =
    name &&
    phone &&
    emailOk &&
    address &&
    (businessTypes as readonly string[]).includes(businessType) &&
    (serviceTypes as readonly string[]).includes(serviceType) &&
    (dumpsterSizes as readonly string[]).includes(dumpsterSize) &&
    (quantities as readonly string[]).includes(quantity) &&
    (pickupFrequencies as readonly string[]).includes(pickupFrequency) &&
    (pickupDays as readonly string[]).includes(pickupDay);

  if (!valid) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
