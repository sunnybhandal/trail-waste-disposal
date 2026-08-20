"use client";

import { FormEvent, useRef, useState } from "react";
import { EmailField, hasEmailFormat } from "@/components/EmailField";
import { formatPhone } from "@/lib/phone";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest";

export function CareersForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.length > 0 && !hasEmailFormat(email)) {
      return;
    }
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setFileName("");
      setPhone("");
      setEmail("");
      setStatus("success");
      setMessage("Application received. We’ll be in touch if there’s a fit.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us your resume instead.");
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
        Phone
        <input
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          autoComplete="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Use the format ###-###-####"
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
          className={fieldClass}
        />
      </label>
      <EmailField
        id="careers-email"
        required
        value={email}
        onChange={setEmail}
      />
      <div>
        <p className="text-sm font-medium text-ink">Resume</p>
        <div className="mt-2 flex min-h-28 flex-col items-center justify-center rounded-xl border border-dashed border-line bg-cream/60 px-4 py-6 text-center">
          <input
            ref={fileInputRef}
            name="document"
            type="file"
            required
            accept=".pdf,.doc,.docx,.txt"
            className="sr-only"
            onChange={(event) => {
              setFileName(event.target.files?.[0]?.name ?? "");
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer rounded-full bg-forest px-4 py-2 text-sm font-medium text-white transition hover:bg-forest-deep"
          >
            Choose File
          </button>
          {fileName ? (
            <p className="mt-3 text-sm text-sage">{fileName}</p>
          ) : (
            <p className="mt-3 text-sm text-stone">
              PDF, DOC, or DOCX up to 5MB
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Sending…" : "Submit application"}
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
