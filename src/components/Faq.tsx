"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink sm:text-lg"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-forest transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3.5 6 8 10.5 12.5 6" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={`max-w-2xl pb-5 text-base leading-7 text-stone transition-opacity duration-300 ease-out ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
