"use client";

import { FormEvent, useState } from "react";
import { businessTypes } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      setStatus("success");
      setMessage("Thanks — we’ll be in touch shortly.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block text-sm font-medium text-ink">
        Name
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        Phone number
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        Email
        <input
          name="email"
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
          type="text"
          required
          autoComplete="street-address"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        Business type
        <select name="businessType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a business type
          </option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Sending…" : "Request a quote"}
      </button>
      {message ? (
        <p
          role="status"
          className={status === "error" ? "text-sm text-red-700" : "text-sm text-sage"}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
