import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Faq } from "@/components/Faq";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20"
      >
        <div>
          <h1 className="font-display text-[2.35rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
            Calgary & Cochrane Waste Disposal Services
          </h1>
          <p className="mt-5 max-w-lg font-display text-2xl leading-snug text-forest sm:text-3xl">
            Show us your bill and we’ll beat your current price.
          </p>
          <p className="mt-6 max-w-md text-base leading-7 text-stone sm:text-lg">
            Commercial trash, garbage, and recycling dumpsters for businesses
            and multi-unit properties.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-white transition hover:bg-forest-deep sm:inline-flex sm:w-auto"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center rounded-3xl bg-cream px-4 py-8 sm:px-6 sm:py-10">
            <Image
              src="/images/truck.png"
              alt="Front-load garbage truck for commercial waste collection in Calgary"
              width={555}
              height={346}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line bg-cream/70"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            How it works
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            How Calgary Waste, Trash & Garbage Collection Works
          </h2>
          <ol className="mt-8 max-w-3xl space-y-5">
            <li className="flex items-baseline gap-3">
              <span className="font-display text-2xl leading-snug text-ink">
                1.
              </span>
              <p className="font-display text-2xl font-medium leading-snug text-forest">
                Tell us about your waste collection needs
              </p>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="font-display text-2xl leading-snug text-ink">
                2.
              </span>
              <p className="font-display text-2xl font-medium leading-snug text-forest">
                We’ll review your trash, dumpster, and pickup requirements
              </p>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="font-display text-2xl leading-snug text-ink">
                3.
              </span>
              <p className="font-display text-2xl font-medium leading-snug text-forest">
                Once we confirm availability, we’ll set a garbage pickup
                schedule that fits your property
              </p>
            </li>
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-8 text-stone sm:text-lg">
            Whether you manage a business, apartment complex, or multi-unit
            property in Calgary, Cochrane, or the surrounding areas, our team
            collects your waste, trash, and garbage on time, every time. We
            guarantee no disruptions, no missed pickups, and no hidden fees.
            We’re small enough to care, and experienced enough to get the job
            done right.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-white px-5 py-6 sm:flex-row sm:items-center sm:gap-10 sm:px-8 sm:py-8">
            <a
              href={site.sisterCompany.href}
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              <Image
                src="/images/trail-bottle-logo.png"
                alt="Trail Bottle Depot Calgary bottle recycling services"
                width={191}
                height={96}
                className="h-[4.75rem] w-auto"
              />
            </a>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
                Calgary bottle recycling
              </p>
              <p className="mt-3 text-base leading-7 text-stone sm:text-lg">
                If you need bottle recycling or beverage container return
                services in Calgary, please visit{" "}
                <a
                  href={site.sisterCompany.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-forest underline decoration-line underline-offset-4 hover:decoration-forest"
                >
                  {site.sisterCompany.name}
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ContactSection />
      <Faq />
    </>
  );
}
