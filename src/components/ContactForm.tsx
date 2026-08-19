"use client";

import { FormEvent, useEffect, useState } from "react";
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
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest";

export function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
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

  function goToStepTwo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const stepOneFields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      "[data-step='1']",
    );

    for (const field of stepOneFields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return;
      }
    }

    setMessage("");
    setOpenSelect(null);
    setStep(2);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step !== 2) {
      goToStepTwo(event);
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
      setBusinessType("Retail");
      setServiceType(serviceTypes[0]);
      setDumpsterSize(dumpsterSizes[0]);
      setQuantity(quantities[0]);
      setPickupFrequency(pickupFrequencies[0]);
      setPickupDay(pickupDays[0]);
      setOpenSelect(null);
      setStep(1);
      setStatus("success");
      setMessage("Thanks — we’ll be in touch shortly.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or try again.");
    }
  }

  if (!mounted) {
    return <div className="min-h-[32rem]" aria-hidden="true" />;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className={step === 1 ? "space-y-5" : "hidden"}>
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            name="name"
            data-step="1"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone
          <input
            name="phone"
            data-step="1"
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
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            name="email"
            data-step="1"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Address
          <input
            name="address"
            data-step="1"
            type="text"
            required
            autoComplete="street-address"
            className={fieldClass}
          />
        </label>
        <div className="block text-sm font-medium text-ink">
          Business Type
          <SelectField
            name="businessType"
            dataStep="1"
            required
            value={businessType}
            options={businessTypes}
            placeholder="Select a business type"
            open={openSelect === "businessType"}
            onOpenChange={(open) => toggleSelect("businessType", open)}
            onChange={setBusinessType}
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep sm:w-auto sm:px-8"
        >
          Next: Service Details
        </button>
      </div>

      <div className={step === 2 ? "space-y-5" : "hidden"}>
        <div className="block text-sm font-medium text-ink">
          Service Type
          <SelectField
            name="serviceType"
            required={step === 2}
            value={serviceType}
            options={serviceTypes}
            open={openSelect === "serviceType"}
            onOpenChange={(open) => toggleSelect("serviceType", open)}
            onChange={setServiceType}
          />
        </div>
        <div className="block text-sm font-medium text-ink">
          Configure Services - Dumpster Size
          <SelectField
            name="dumpsterSize"
            required={step === 2}
            value={dumpsterSize}
            options={dumpsterSizes}
            open={openSelect === "dumpsterSize"}
            onOpenChange={(open) => toggleSelect("dumpsterSize", open)}
            onChange={setDumpsterSize}
          />
        </div>
        <div className="block text-sm font-medium text-ink">
          Quantity
          <SelectField
            name="quantity"
            required={step === 2}
            value={quantity}
            options={quantities}
            open={openSelect === "quantity"}
            onOpenChange={(open) => toggleSelect("quantity", open)}
            onChange={setQuantity}
          />
        </div>
        <div className="block text-sm font-medium text-ink">
          Pickup Frequency
          <SelectField
            name="pickupFrequency"
            required={step === 2}
            value={pickupFrequency}
            options={pickupFrequencies}
            open={openSelect === "pickupFrequency"}
            onOpenChange={(open) => toggleSelect("pickupFrequency", open)}
            onChange={setPickupFrequency}
          />
        </div>
        <div className="block text-sm font-medium text-ink">
          Pickup Day
          <SelectField
            name="pickupDay"
            required={step === 2}
            value={pickupDay}
            options={pickupDays}
            open={openSelect === "pickupDay"}
            onOpenChange={(open) => toggleSelect("pickupDay", open)}
            onChange={setPickupDay}
          />
        </div>
        <div className="flex flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              setOpenSelect(null);
              setStep(1);
            }}
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-line text-sm font-medium text-ink transition hover:border-forest hover:text-forest sm:flex-none sm:px-8"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep disabled:opacity-70 sm:flex-none sm:px-8"
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </div>
      </div>

      {message ? (
        <p
          role="status"
          className={status === "error" ? "text-sm text-red-700" : "text-sm text-sage"}
        >
          {message}
        </p>
      ) : null}

      <div className="pt-2">
        <div className="mb-2 text-xs font-medium text-stone">
          Step {step} of 2
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-forest transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>
    </form>
  );
}
