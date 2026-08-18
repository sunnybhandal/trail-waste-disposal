"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest";

export function LoginForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(new FormData(event.currentTarget).entries()),
        ),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("idle");
      setMessage("Account access is being set up. Please call us if you need help now.");
    } catch {
      setStatus("error");
      setMessage("Unable to sign in right now. Please try again or call us.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block text-sm font-medium text-ink">
        Email or account number
        <input
          name="account"
          type="text"
          required
          autoComplete="username"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        Password
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={fieldClass}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest text-sm font-medium text-white transition hover:bg-forest-deep disabled:opacity-70"
      >
        {status === "sending" ? "Signing in…" : "Sign in"}
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
