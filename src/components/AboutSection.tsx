import Image from "next/image";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
          About us
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Built from 20 years of honest service.
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl">
          <Image
            src="/images/commercial.jpg"
            alt="A quiet commercial street in the communities we serve"
            width={1400}
            height={788}
            className="h-56 w-full object-cover sm:h-80"
          />
        </div>

        <div className="mt-12 max-w-3xl space-y-6 text-base leading-8 text-stone sm:text-lg">
          <p>
            After owning and operating Trail Bottle Depot for the past 20 years,
            we’ve built our business around hard work, honest service, and
            treating customers the way they deserve to be treated. We started
            Trail Waste Disposal after the firsthand experience of the poor
            service that has become all too common in the waste disposal
            industry – missed appointments, price gouging, excessive extra fees,
            and poor customer service. We strive to be everything they’re not –
            reliable, transparent, fairly priced, and built around real customer
            service.
          </p>
          <p>
            We serve customers in {site.languages.join(", ")} across{" "}
            {site.serviceArea}.
          </p>
        </div>
      </div>
    </section>
  );
}
