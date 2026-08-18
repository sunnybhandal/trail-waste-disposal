import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-stone">
            Family-owned front-load dumpster service for Calgary, Cochrane, and
            nearby communities.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-sage">
            Contact
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-stone">
            <p>{site.name}</p>
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={site.phoneHref} className="hover:text-forest">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.emailHref} className="hover:text-forest">
                {site.email}
              </a>
            </p>
          </address>
          <p className="mt-4 text-sm text-stone">
            Sister Company:{" "}
            <a
              href={site.sisterCompany.href}
              className="text-forest underline decoration-line underline-offset-4 hover:decoration-forest"
              target="_blank"
              rel="noreferrer"
            >
              {site.sisterCompany.name}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-stone sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
