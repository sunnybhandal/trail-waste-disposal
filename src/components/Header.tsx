"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

const sectionIds = navLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.slice(2));

function linkKey(href: string) {
  return href.startsWith("/#") ? href.slice(2) : href.replace(/^\//, "");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const lockedRef = useRef<string | null>(null);
  const unlockTimer = useRef<number>(0);

  function activateLink(key: string) {
    setActive(key);
    lockedRef.current = key;
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      lockedRef.current = null;
    }, 900);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/careers") {
      setActive("careers");
      return;
    }

    if (pathname !== "/") {
      setActive("");
      return;
    }

    function updateActive() {
      if (lockedRef.current) {
        return;
      }

      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const probe = headerHeight + 24;
      const lastId = sectionIds[sectionIds.length - 1];
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );

      if (window.scrollY >= maxScroll - 64) {
        setActive(lastId);
        return;
      }

      const lastEl = document.getElementById(lastId);
      if (lastEl && lastEl.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        setActive(lastId);
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) {
          continue;
        }
        if (el.getBoundingClientRect().top <= probe) {
          current = id;
        }
      }

      setActive(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled && !open ? "shadow-[0_2px_10px_rgba(23,20,17,0.08)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          aria-label="Trail Waste Disposal home"
          onClick={(event) => {
            setOpen(false);
            setActive("");
            if (pathname === "/") {
              event.preventDefault();
              window.history.replaceState(null, "", "/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === linkKey(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => activateLink(linkKey(link.href))}
                className={`relative pb-0.5 text-[15px] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-forest after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                  isActive ? "text-forest" : "text-stone hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden h-10 cursor-pointer items-center rounded-full border border-forest bg-forest px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-forest lg:inline-flex"
          >
            {site.phone}
          </a>
          <a
            href={site.customerPortalHref}
            className="hidden h-10 cursor-pointer items-center rounded-full border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-forest hover:text-forest lg:inline-flex"
          >
            Account Login
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-[21px] w-8">
              <span
                className={`absolute top-0 left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                  open ? "translate-y-[9px] rotate-45" : "translate-y-0 rotate-0"
                }`}
              />
              <span
                className={`absolute top-[9px] left-0 h-[3px] w-8 rounded-full bg-current transition-[opacity,transform] duration-300 ease-in-out ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute top-[18px] left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                  open ? "-translate-y-[9px] -rotate-45" : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`absolute top-full right-0 left-0 z-50 grid overflow-hidden bg-cream shadow-[0_16px_32px_rgba(23,20,17,0.12)] transition-[grid-template-rows] duration-[350ms] ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-line" : "pointer-events-none grid-rows-[0fr] border-t border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`flex flex-col gap-1 px-5 py-6 transition-opacity duration-[350ms] ease-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Mobile"
            aria-hidden={!open}
          >
            {navLinks.map((link) => {
              const isActive = active === linkKey(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    activateLink(linkKey(link.href));
                    setOpen(false);
                  }}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-lg font-medium transition-colors ${
                    isActive ? "bg-white text-forest" : "text-ink hover:bg-line"
                  }`}
                  tabIndex={open ? undefined : -1}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-forest bg-forest text-base font-medium text-white transition-colors hover:bg-white hover:text-forest"
                tabIndex={open ? undefined : -1}
              >
                {site.phone}
              </a>
              <a
                href={site.customerPortalHref}
                onClick={() => setOpen(false)}
                className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-base font-medium text-ink"
                tabIndex={open ? undefined : -1}
              >
                Account Login
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
