import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Faq } from "@/components/Faq";
import { industries, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Serving Calgary & Cochrane
          </p>
          <h1 className="mt-4 font-display text-[2.35rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
            Fast & Reliable Local Waste Disposal
            Services
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-stone sm:text-lg">
            Front-load dumpsters for businesses and multi-unit properties. Show
            us your bill and we’ll beat your current price.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-white transition hover:bg-forest-deep"
            >
              Get a quote
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-medium text-ink transition hover:border-forest hover:text-forest"
            >
              Call {site.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center rounded-3xl bg-cream px-4 py-8 sm:px-6 sm:py-10">
            <Image
              src="/images/truck.png"
              alt="White front-load garbage truck used for commercial pickup"
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
            What makes us different.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone sm:text-lg">
            Whether you manage a business, apartment complex, or multi-unit
            property in Calgary and the surrounding areas, our team ensures
            your waste is collected on time, every time. We guarantee no disruptions, no
            missed pickups, and no hidden fees. When you call us, you get a
            real person who knows your account. We’re small enough to care,
            and experienced enough to get the job done right.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone sm:text-lg">
            We handle {industries.slice(0, -1).join(", ").toLowerCase()}, and{" "}
            {industries[industries.length - 1].toLowerCase()}.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="rounded-3xl border border-line bg-white px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Bottle recycling
            </p>
            <p className="mt-3 w-full text-base leading-7 text-stone sm:text-lg">
              If you’re interested in bottle recycling services, please visit{" "}
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
      </section>

      <AboutSection />
      <ContactSection />
      <Faq />
    </>
  );
}
