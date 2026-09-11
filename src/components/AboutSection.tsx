import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Who are we?
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            A Local Calgary Waste Company You Can Trust
          </h2>
          <p className="mt-5 font-display text-xl leading-snug text-forest sm:text-2xl">
            We’re small enough to care, and experienced enough to get the job
            done right.
          </p>
          <p className="mt-8 text-base leading-8 text-stone sm:text-lg">
            For more than 20 years, we owned and operated Trail Bottle Depot
            in Calgary. Built on hard work, honest service, and treating
            customers the way they deserve to be treated. We started Trail
            Waste Disposal after seeing how common missed pickups, extra fees,
            and poor customer service had become in commercial waste
            collection. We built this company to be the opposite: reliable,
            transparent, fairly priced, and backed by a team who truly cares.
          </p>
        </FadeIn>

        <FadeIn delay={140} className="overflow-hidden rounded-xl bg-cream">
          <Image
            src="/images/truckSideClose.jpg"
            alt="Trail Waste Disposal truck branding and contact details"
            width={1400}
            height={933}
            className="h-auto w-full object-contain"
          />
        </FadeIn>
      </div>
    </section>
  );
}
