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
    el.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `/#${id}`);
  }

  return (
    <a href={id ? `#${id}` : href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
