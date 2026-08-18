"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest";

export function CareersForm() {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        Resume or cover letter
        <span className="mt-2 flex min-h-28 flex-col items-center justify-center rounded-xl border border-dashed border-line bg-cream/60 px-4 py-6 text-center">
          <input
            name="document"
            type="file"
            required
            accept=".pdf,.doc,.docx,.txt"
            className="w-full text-sm text-stone file:mr-3 file:rounded-full file:border-0 file:bg-forest file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
            onChange={(event) => {
              setFileName(event.target.files?.[0]?.name ?? "");
            }}
          />
          {fileName ? (
            <span className="mt-3 text-sm text-sage">{fileName}</span>
          ) : (
            <span className="mt-3 text-sm text-stone">
              PDF, DOC, or DOCX up to 5MB
            </span>
          )}
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep disabled:opacity-70 sm:w-auto sm:px-8"
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
