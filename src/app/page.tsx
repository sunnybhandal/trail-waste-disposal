import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FadeIn } from "@/components/FadeIn";
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
    title: "We’ll review your requirements and someone from our team will contact you",
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
        className="relative scroll-mt-24 overflow-hidden bg-white"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[72%] lg:block lg:w-[64%]">
          <Image
            src="/images/truckSide.png"
            alt="Trail Waste Disposal front-load garbage truck in Calgary"
            fill
            priority
            className="object-contain object-right"
            sizes="64vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-white lg:from-[34%] lg:via-white/55 lg:via-[56%] lg:to-transparent" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:min-h-[36rem] lg:flex-row lg:items-center lg:py-12">
          <FadeIn className="max-w-lg">
            <h1 className="font-display text-[2.35rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
              Calgary & Cochrane Waste Disposal Services
            </h1>
            <p className="mt-5 max-w-lg font-display text-2xl leading-snug text-forest sm:text-3xl">
              Show us your bill and we’ll beat your current price.
            </p>
            <p className="mt-6 max-w-md text-base leading-7 text-stone sm:text-lg">
              Commercial garbage and recycling dumpsters for businesses and
              multi-unit properties.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="flex h-12 w-full cursor-pointer items-center justify-center rounded-full border border-forest bg-forest px-6 text-base font-medium text-white transition-colors hover:bg-white hover:text-forest sm:inline-flex sm:w-auto"
              >
                Get a Free Quote
              </Link>
            </div>
          </FadeIn>

          <FadeIn
            delay={140}
            className="mt-10 w-full overflow-hidden rounded-xl bg-cream lg:hidden"
          >
            <Image
              src="/images/truckSide.png"
              alt="Trail Waste Disposal front-load garbage truck in Calgary"
              width={1600}
              height={1108}
              priority
              className="h-auto w-full object-contain"
            />
          </FadeIn>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line bg-cream/70"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
                How it Works
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Calgary Waste Collection Services
              </h2>
            </FadeIn>
            <ol className="mt-10">
              {howItWorksSteps.map((step, index) => (
                <FadeIn
                  as="li"
                  key={step.key}
                  delay={index * 180}
                  className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 sm:pb-10"
                >
                  {index !== howItWorksSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-12 bottom-0 left-6 -translate-x-1/2 border-l-2 border-dotted border-forest/40"
                    />
                  ) : null}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                    {step.icon}
                  </div>
                  <p className="pt-2 font-display text-2xl font-medium leading-snug text-forest">
                    {step.title}
                  </p>
                </FadeIn>
              ))}
            </ol>
            <FadeIn delay={80}>
              <p className="mt-8 text-base leading-8 text-stone sm:text-lg">
                Whether you manage a business, apartment complex, or multi-unit
                property in Calgary or Cochrane, our team collects your waste on
                time, every time. We guarantee no disruptions, no missed pickups,
                and no hidden fees.
              </p>
              <p className="mt-8 font-display text-xl font-medium text-ink sm:text-2xl">
                Ready to discuss your options?
              </p>
              <div className="mt-5">
                <Link
                  href="/#contact"
                  className="flex h-12 w-full cursor-pointer items-center justify-center rounded-full border border-forest bg-forest px-6 text-base font-medium text-white transition-colors hover:bg-white hover:text-forest sm:inline-flex sm:w-auto"
                >
                  Contact us
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={120} className="overflow-hidden rounded-xl bg-cream">
            <Image
              src="/images/soloDumpster.jpg"
              alt="Trail Waste Disposal commercial front-load garbage dumpster"
              width={1400}
              height={1098}
              className="h-auto w-full object-contain"
            />
          </FadeIn>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <FadeIn className="flex flex-col items-start gap-6 rounded-xl border border-line bg-white px-5 py-6 sm:flex-row sm:items-center sm:gap-10 sm:px-8 sm:py-8">
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
                Interested in bottle recycling services? Visit our sister
                company,{" "}
                <a
                  href={site.sisterCompany.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-forest underline decoration-line underline-offset-4 hover:decoration-forest"
                >
                  {site.sisterCompany.name}
                </a>
                , for fast, friendly, and reliable service.
              </p>
              <p className="mt-3 text-base leading-7 text-stone sm:text-lg">
                You can bundle your waste and recycling needs for an additional
                discount.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
      <AboutSection />
      <Faq />
    </>
  );
}
