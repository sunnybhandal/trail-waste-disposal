import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Faq } from "@/components/Faq";
import { site } from "@/lib/site";

const howItWorksSteps = [
  {
    key: "needs",
    title: (
      <>
        Tell us about your waste collection needs by filling out this{" "}
        <Link
          href="/#contact"
          className="underline decoration-forest/40 underline-offset-4 transition hover:text-forest-deep hover:decoration-forest-deep"
        >
          form
        </Link>
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M8 3.5h5.5L18.5 8.5V20A1.5 1.5 0 0 1 17 21.5H8A1.5 1.5 0 0 1 6.5 20V5A1.5 1.5 0 0 1 8 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 3.5V8h5M9 12.5h6M9 16h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "review",
    title: "We’ll review your requirements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M15 15.5 20 20.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "schedule",
    title:
      "Once we confirm availability, we’ll set a pickup schedule that fits your property",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 9.5h17M8 3.5v3M16 3.5v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];


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

        <div className="overflow-hidden rounded-3xl bg-cream">
          <Image
            src="/images/about-pickup.jpg"
            alt="Trail Waste Disposal truck collecting commercial garbage dumpsters in Calgary"
            width={1400}
            height={788}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line bg-cream/70"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            How Calgary Waste, Trash & Garbage Collection Works
          </h2>
          <ol className="mt-10 max-w-3xl">
            {howItWorksSteps.map((step, index) => (
              <li key={step.key} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 sm:pb-10">
                {index !== howItWorksSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-12 bottom-0 left-6 w-px bg-forest/25"
                  />
                ) : null}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                  {step.icon}
                </div>
                <p className="pt-2 font-display text-2xl font-medium leading-snug text-forest">
                  {step.title}
                </p>
              </li>
            ))}
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
              <p className="text-base leading-7 text-stone sm:text-lg">
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

      <ContactSection />
      <AboutSection />
      <Faq />
    </>
  );
}
