"use client";

import { useEffect, useId, useRef, useState } from "react";

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

type ScrollThumb = {
  height: number;
  top: number;
};

function measureThumb(list: HTMLUListElement): ScrollThumb | null {
  const { scrollTop, scrollHeight, clientHeight } = list;
  const overflow = scrollHeight - clientHeight;
  if (overflow <= 1) {
    return null;
  }

  const height = Math.max(28, (clientHeight / scrollHeight) * clientHeight);
  const top = ((clientHeight - height) * scrollTop) / overflow;
  return { height, top };
}

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
  const listRef = useRef<HTMLUListElement>(null);
  const [thumb, setThumb] = useState<ScrollThumb | null>(null);

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

  useEffect(() => {
    if (!open) {
      setThumb(null);
      return;
    }

    const list = listRef.current;
    if (!list) {
      return;
    }

    function syncThumb() {
      if (!listRef.current) {
        return;
      }
      setThumb(measureThumb(listRef.current));
    }

    syncThumb();
    const frame = requestAnimationFrame(syncThumb);
    list.addEventListener("scroll", syncThumb, { passive: true });
    const observer = new ResizeObserver(syncThumb);
    observer.observe(list);

    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("scroll", syncThumb);
      observer.disconnect();
    };
  }, [open, options]);

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
        className={`absolute top-full right-0 left-0 z-20 origin-top pt-1 transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-xl border border-line bg-white shadow-[0_8px_24px_rgba(23,20,17,0.08)]">
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            className="select-scroll max-h-56 py-1"
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
          {open && thumb ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-1 w-1"
            >
              <div
                className="absolute right-0 left-0 rounded-full bg-forest/55"
                style={{
                  height: thumb.height,
                  transform: `translateY(${thumb.top}px)`,
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
