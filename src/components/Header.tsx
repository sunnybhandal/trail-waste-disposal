"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link href="/" aria-label="Trail Waste Disposal home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex h-10 items-center rounded-full bg-forest px-4 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
          <Link
            href="/login"
            aria-label="Client account login"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-forest transition-colors hover:border-forest hover:bg-cream"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="3.25" />
              <path d="M5.5 19.2c.8-3.1 3.3-5.2 6.5-5.2s5.7 2.1 6.5 5.2" />
            </svg>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-white px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg text-ink hover:bg-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-lg text-ink hover:bg-cream"
            >
              Client login
            </Link>
            <a
              href={site.phoneHref}
              className="mt-3 rounded-xl bg-forest px-3 py-3 text-center text-lg text-white"
            >
              Call {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
