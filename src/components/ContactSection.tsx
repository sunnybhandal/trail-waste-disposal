import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-cream/70">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Get a Free Quote for Calgary Trash & Waste Disposal
          </h2>
          <address className="mt-8 space-y-1 text-base not-italic leading-7 text-stone">
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={site.phoneHref} className="text-forest hover:underline">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.emailHref} className="text-forest hover:underline">
                {site.email}
              </a>
            </p>
          </address>
          <p className="mt-8 max-w-md text-sm leading-6 text-stone">
            By providing your phone number and email address in the form, you agree to receive emails and calls from Trail
            Waste Disposal about its services. Consent is not a condition of
            purchase. You may unsubscribe at any time. You also agree to our{" "}
            <Link href="/privacy-policy" className="text-forest underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and the website{" "}
            <Link href="/terms-of-use" className="text-forest underline underline-offset-2">
              Terms of Use
            </Link>
            .
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
