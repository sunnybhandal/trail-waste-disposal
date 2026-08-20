"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { dumpsterSizeGuide } from "@/lib/site";

export function DumpsterSizeGuide() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const cellClass = "border border-line px-4 py-4 text-left text-sm leading-6 text-ink";
  const labelClass =
    "border border-line px-4 py-4 text-left text-sm font-semibold text-ink";

  const modal =
    open && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative my-auto w-full max-w-5xl rounded-3xl bg-white p-5 shadow-[0_16px_48px_rgba(23,20,17,0.16)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                aria-label="Close dumpster size guide"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-stone transition hover:bg-cream hover:text-ink"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
              <h3
                id={titleId}
                className="pr-12 font-display text-2xl leading-tight text-ink sm:text-3xl"
              >
                Dumpster Size Guide
              </h3>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-[44rem] w-full border-collapse">
                  <thead>
                    <tr>
                      <th className={labelClass} scope="row">
                        Product
                      </th>
                      {dumpsterSizeGuide.map((size) => (
                        <th
                          key={size.name}
                          scope="col"
                          className={`${cellClass} font-semibold text-forest`}
                        >
                          {size.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className={labelClass} scope="row">
                        Dimensions
                      </th>
                      {dumpsterSizeGuide.map((size) => (
                        <td key={size.name} className={cellClass}>
                          {size.dimensions.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className={labelClass} scope="row">
                        Holds
                      </th>
                      {dumpsterSizeGuide.map((size) => (
                        <td key={size.name} className={`${cellClass} uppercase`}>
                          {size.holds}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className={labelClass} scope="row">
                        Pickup Frequency
                      </th>
                      {dumpsterSizeGuide.map((size) => (
                        <td key={size.name} className={cellClass}>
                          {size.pickupFrequency}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className={labelClass} scope="row">
                        Recommended Use
                      </th>
                      {dumpsterSizeGuide.map((size) => (
                        <td key={size.name} className={cellClass}>
                          {size.recommendedUse}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        aria-label="Dumpster size information"
        onClick={() => setOpen(true)}
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-forest text-[11px] font-semibold leading-none text-forest transition hover:bg-forest hover:text-white"
      >
        i
      </button>
      {modal}
    </>
  );
}
