"use client";

import { FormEvent, useEffect, useState } from "react";
import { EmailField, hasEmailFormat } from "@/components/EmailField";
import { DumpsterSizeGuide } from "@/components/DumpsterSizeGuide";
import { SelectField } from "@/components/SelectField";
import { formatPhone } from "@/lib/phone";
import {
  businessTypes,
  dumpsterSizes,
  pickupDays,
  pickupFrequencies,
  quantities,
  serviceTypes,
} from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-forest sm:text-base";

export function ContactFormSingle() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState<string>("Retail");
  const [serviceType, setServiceType] = useState<string>(serviceTypes[0]);
  const [dumpsterSize, setDumpsterSize] = useState<string>(dumpsterSizes[0]);
  const [quantity, setQuantity] = useState<string>(quantities[0]);
  const [pickupFrequency, setPickupFrequency] = useState<string>(
    pickupFrequencies[0],
  );
  const [pickupDay, setPickupDay] = useState<string>(pickupDays[0]);
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleSelect(name: string, open: boolean) {
    setOpenSelect(open ? name : null);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.length > 0 && !hasEmailFormat(email)) {
      return;
    }

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setPhone("");
      setEmail("");
      setBusinessType("Retail");
      setServiceType(serviceTypes[0]);
      setDumpsterSize(dumpsterSizes[0]);
      setQuantity(quantities[0]);
      setPickupFrequency(pickupFrequencies[0]);
      setPickupDay(pickupDays[0]);
      setOpenSelect(null);
      setStatus("success");
      setMessage("Thanks — we’ll be in touch shortly.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or try again.");
    }
  }

  if (!mounted) {
    return <div className="min-h-[24rem]" aria-hidden="true" />;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <label className="block min-w-0 text-sm font-medium text-ink">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block min-w-0 text-sm font-medium text-ink">
          Phone
          <input
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            suppressHydrationWarning
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Use the format ###-###-####"
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
            className={fieldClass}
          />
        </label>
        <div className="col-span-2 lg:col-span-1">
          <EmailField
            id="contact-single-email"
            required
            value={email}
            onChange={setEmail}
          />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <label className="block min-w-0 text-sm font-medium text-ink">
          Address
          <input
            name="address"
            type="text"
            required
            autoComplete="street-address"
            className={fieldClass}
          />
        </label>
        <div className="block min-w-0 text-sm font-medium text-ink">
          Business Type
          <SelectField
            name="businessType"
            required
            value={businessType}
            options={businessTypes}
            placeholder="Select a business type"
            open={openSelect === "businessType"}
            onOpenChange={(open) => toggleSelect("businessType", open)}
            onChange={setBusinessType}
          />
        </div>
        <div className="block min-w-0 text-sm font-medium text-ink">
          Service Type
          <SelectField
            name="serviceType"
            required
            value={serviceType}
            options={serviceTypes}
            open={openSelect === "serviceType"}
            onOpenChange={(open) => toggleSelect("serviceType", open)}
            onChange={setServiceType}
          />
        </div>
      </div>
      <div className="block text-sm font-medium text-ink">
        <span className="inline-flex items-center gap-2">
          Dumpster Size
          <DumpsterSizeGuide />
        </span>
        <SelectField
          name="dumpsterSize"
          required
          value={dumpsterSize}
          options={dumpsterSizes}
          open={openSelect === "dumpsterSize"}
          onOpenChange={(open) => toggleSelect("dumpsterSize", open)}
          onChange={setDumpsterSize}
        />
      </div>
      <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 lg:grid-cols-[7rem_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="block min-w-0 text-sm font-medium text-ink">
          Quantity
          <SelectField
            name="quantity"
            required
            value={quantity}
            options={quantities}
            open={openSelect === "quantity"}
            onOpenChange={(open) => toggleSelect("quantity", open)}
            onChange={setQuantity}
          />
        </div>
        <div className="block min-w-0 text-sm font-medium text-ink">
          Pickup Frequency
          <SelectField
            name="pickupFrequency"
            required
            value={pickupFrequency}
            options={pickupFrequencies}
            open={openSelect === "pickupFrequency"}
            onOpenChange={(open) => toggleSelect("pickupFrequency", open)}
            onChange={setPickupFrequency}
          />
        </div>
        <div className="col-span-2 block min-w-0 text-sm font-medium text-ink lg:col-span-1">
          Pickup Day
          <SelectField
            name="pickupDay"
            required
            value={pickupDay}
            options={pickupDays}
            open={openSelect === "pickupDay"}
            onOpenChange={(open) => toggleSelect("pickupDay", open)}
            onChange={setPickupDay}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep disabled:opacity-70 sm:w-auto sm:px-8"
        >
          {status === "sending" ? "Sending…" : "Get a Quote"}
        </button>
        {message ? (
          <p
            role="status"
            className={`mt-3 text-sm ${status === "error" ? "text-red-700" : "text-sage"}`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
