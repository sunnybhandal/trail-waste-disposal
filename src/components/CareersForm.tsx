"use client";

import { FormEvent, useRef, useState } from "react";
import { EmailField, hasEmailFormat } from "@/components/EmailField";
import { CAREERS_FORM_NAME, submitNetlifyForm } from "@/lib/netlify-form";
import { formatPhone } from "@/lib/phone";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest";

const maxResumeBytes = 5 * 1024 * 1024;

export function CareersForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.length > 0 && !hasEmailFormat(email)) {
      return;
    }

    const resume = fileInputRef.current?.files?.[0];
    if (!resume) {
      setFileError("Please choose a resume file");
      return;
    }
    if (resume.size > maxResumeBytes) {
      setFileError("Resume must be 5MB or smaller");
      return;
    }

    setFileError("");
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;

    try {
      await submitNetlifyForm(form, {
        formName: CAREERS_FORM_NAME,
        localEndpoint: "/api/careers",
        withFiles: true,
      });

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
    <form
      name={CAREERS_FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value={CAREERS_FORM_NAME} />
      <p className="sr-only" aria-hidden="true">
        <label>
          Don’t fill this out if you’re human:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
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
              setFileError("");
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer rounded-full border border-forest bg-forest px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cream hover:text-forest"
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
        {fileError ? (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {fileError}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full border border-forest bg-forest text-base font-medium text-white transition-colors hover:bg-white hover:text-forest disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Sending…" : "Submit Application"}
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
