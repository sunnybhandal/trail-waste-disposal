"use client";

import { useEffect, useId, useRef } from "react";

type SelectFieldProps = {
  name: string;
  value: string;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  dataStep?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (value: string) => void;
};

export function SelectField({
  name,
  value,
  options,
  placeholder = "Select an option",
  required = false,
  dataStep,
  open,
  onOpenChange,
  onChange,
}: SelectFieldProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <div ref={rootRef} className="relative mt-2">
      <input
        type="hidden"
        name={name}
        value={value}
        {...(dataStep ? { "data-step": dataStep } : {})}
      />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => onOpenChange(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-line bg-white py-3 pl-4 pr-4 text-left text-base text-ink outline-none transition focus:border-forest"
      >
        <span className={value ? "text-ink" : "text-stone"}>{value || placeholder}</span>
        <svg
          viewBox="0 0 16 16"
          className={`h-4 w-4 shrink-0 text-stone transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3.5 6 8 10.5 12.5 6" />
        </svg>
      </button>
      <div
        className={`absolute top-full right-0 left-0 z-20 origin-top overflow-hidden pt-1 transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul
          id={listId}
          role="listbox"
          className="max-h-56 overflow-auto rounded-xl border border-line bg-white py-1 shadow-[0_8px_24px_rgba(23,20,17,0.08)]"
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <li key={option} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    onOpenChange(false);
                  }}
                  className={`flex w-full cursor-pointer px-4 py-2.5 text-left text-base ${
                    selected ? "bg-cream text-forest" : "text-ink hover:bg-cream"
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
