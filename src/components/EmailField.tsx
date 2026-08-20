"use client";

import { useState } from "react";

type EmailFieldProps = {
  id?: string;
  name?: string;
  required?: boolean;
  dataStep?: string;
  value: string;
  onChange: (value: string) => void;
};

export function hasEmailFormat(value: string) {
  return value.includes("@");
}

const baseClass =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition";

export function EmailField({
  id = "email",
  name = "email",
  required = false,
  dataStep,
  value,
  onChange,
}: EmailFieldProps) {
  const [showError, setShowError] = useState(false);
  const invalid = value.length > 0 && !hasEmailFormat(value);
  const highlightError = showError && invalid;
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        Email
      </label>
      <input
        id={id}
        name={name}
        type="email"
        required={required}
        autoComplete="email"
        value={value}
        aria-invalid={highlightError}
        aria-describedby={highlightError ? errorId : undefined}
        {...(dataStep ? { "data-step": dataStep } : {})}
        onChange={(event) => {
          setShowError(false);
          onChange(event.target.value);
        }}
        onBlur={() => {
          setShowError(invalid);
        }}
        onInvalid={(event) => {
          if (invalid) {
            event.preventDefault();
            setShowError(true);
          }
        }}
        className={`${baseClass} ${
          highlightError
            ? "border-red-500 focus:border-red-500"
            : "border-line focus:border-forest"
        }`}
      />
      {highlightError ? (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-600">
          Enter a valid email address.
        </p>
      ) : null}
    </div>
  );
}
