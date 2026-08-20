import Image from "next/image";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            About us
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            A Local Calgary Waste & Garbage Company You Can Trust
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-stone sm:text-lg">
            <p>
              After owning and operating Trail Bottle Depot for the past 20
              years, we’ve built our business around hard work, honest service,
              and treating customers the way they deserve to be treated. We
              started Trail Waste Disposal after seeing the poor service that
              has become too common in waste, trash, and garbage collection —
              missed appointments, price gouging, extra fees, and no one who
              knows your account. We strive to be everything they’re not:
              reliable, transparent, fairly priced, and built around real
              customer service.
            </p>
            <p>
              We provide commercial waste disposal and garbage pickup in{" "}
              {site.languages.join(", ")} across {site.serviceArea}.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-cream">
          <Image
            src="/images/about-pickup.jpg"
            alt="Trail Waste Disposal truck collecting commercial garbage dumpsters in Calgary"
            width={1400}
            height={788}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
