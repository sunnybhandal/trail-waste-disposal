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
  "mt-2 w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-ink outline-none transition sm:text-base";

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
};

function inputClass(hasError: boolean) {
  return `${fieldClass} ${
    hasError ? "border-red-500 focus:border-red-500" : "border-line focus:border-forest"
  }`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
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

  function toggleSelect(selectName: string, open: boolean) {
    setOpenSelect(open ? selectName : null);
  }

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validateRequiredFields() {
    const next: FieldErrors = {};
    if (!name.trim()) {
      next.name = "Please enter your name";
    }
    if (phone.replace(/\D/g, "").length !== 10) {
      next.phone = "Please enter your phone";
    }
    if (!email.trim()) {
      next.email = "Please enter your email";
    } else if (!hasEmailFormat(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!address.trim()) {
      next.address = "Please enter your address";
    }
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateRequiredFields()) {
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
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setFieldErrors({});
      setBusinessType("Retail");
      setServiceType(serviceTypes[0]);
      setDumpsterSize(dumpsterSizes[0]);
      setQuantity(quantities[0]);
      setPickupFrequency(pickupFrequencies[0]);
      setPickupDay(pickupDays[0]);
      setOpenSelect(null);
      setStatus("success");
      setMessage("Thanks! We’ll be in touch shortly.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or try again.");
    }
  }

  if (!mounted) {
    return <div className="min-h-[24rem]" aria-hidden="true" />;
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="min-w-0">
          <label className="block text-sm font-medium text-ink">
            Name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              aria-invalid={Boolean(fieldErrors.name)}
              onChange={(event) => {
                setName(event.target.value);
                clearFieldError("name");
              }}
              className={inputClass(Boolean(fieldErrors.name))}
            />
          </label>
          {fieldErrors.name ? (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-ink">
            Phone
            <input
              name="phone"
              type="tel"
              required
              inputMode="numeric"
              autoComplete="tel"
              suppressHydrationWarning
              value={phone}
              aria-invalid={Boolean(fieldErrors.phone)}
              onChange={(event) => {
                setPhone(formatPhone(event.target.value));
                clearFieldError("phone");
              }}
              className={inputClass(Boolean(fieldErrors.phone))}
            />
          </label>
          {fieldErrors.phone ? (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <EmailField
          id="contact-email"
          required
          value={email}
          error={fieldErrors.email}
          onChange={(value) => {
            setEmail(value);
            clearFieldError("email");
          }}
        />
        <div className="min-w-0">
          <label className="block text-sm font-medium text-ink">
            Address
            <input
              name="address"
              type="text"
              required
              autoComplete="street-address"
              value={address}
              aria-invalid={Boolean(fieldErrors.address)}
              onChange={(event) => {
                setAddress(event.target.value);
                clearFieldError("address");
              }}
              className={inputClass(Boolean(fieldErrors.address))}
            />
          </label>
          {fieldErrors.address ? (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {fieldErrors.address}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
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
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-base font-medium text-white transition hover:bg-forest-deep disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Details"}
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
