import Link from "next/link";
import { legalLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 text-[10px] leading-none text-stone sm:gap-4 sm:px-8 sm:text-xs">
        <p className="whitespace-nowrap">
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Legal" className="flex shrink-0 items-center gap-x-1 sm:gap-x-2">
          {legalLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-1 sm:gap-2">
              {index > 0 ? <span aria-hidden="true">|</span> : null}
              <Link href={link.href} className="whitespace-nowrap hover:text-forest">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
