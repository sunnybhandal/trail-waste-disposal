"use client";

import type { MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

function sectionId(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : "";
}

export function SectionLink({ href, className, children }: SectionLinkProps) {
  const id = sectionId(href);

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    const el = id ? document.getElementById(id) : null;
    if (!el) {
      return;
    }

    event.preventDefault();
    const header = document.querySelector("header");
    const offset = header instanceof HTMLElement ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", `/#${id}`);
  }

  return (
    <a href={id ? `#${id}` : href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
