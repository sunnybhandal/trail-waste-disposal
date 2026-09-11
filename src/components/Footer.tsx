import Link from "next/link";
import { legalLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 text-xs text-stone sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex shrink-0 items-center gap-x-2">
          {legalLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">|</span> : null}
              <Link href={link.href} className="hover:text-forest">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
