import Image from "next/image";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            A Local Calgary Waste & Garbage Company You Can Trust
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-stone sm:text-lg">
            <p>
              For more than 20 years, we owned and operated Trail Bottle Depot
              in Calgary. Built on hard work, honest service, and treating
              customers the way they deserve to be treated. We started Trail
              Waste Disposal after seeing how common missed pickups, extra fees,
              and poor customer service had become in commercial waste, trash,
              and garbage collection. We built this company to be the opposite:
              reliable, transparent, fairly priced, and backed by a team
              who truly cares.
            </p>
            <p>
              Today we provide commercial waste disposal and garbage pickup
              across {site.serviceArea}. Our team serves customers in{" "}
              {site.languages.slice(0, -1).join(", ")}, and{" "}
              {site.languages[site.languages.length - 1]}.
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
