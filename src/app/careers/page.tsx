import type { Metadata } from "next";
import { CareersForm } from "@/components/CareersForm";
import { careerPerks, careerRequirements, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers in Calgary Waste Collection",
  description:
    "Join Trail Waste Disposal for waste and garbage collection jobs in Calgary. Steady local work, competitive wages, and room to grow.",
};

export default function CareersPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-8 sm:py-20 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Careers in Calgary Waste Collection
        </h1>
        <p className="mt-6 text-base leading-8 text-stone sm:text-lg">
          Trail Waste Disposal is always looking for dependable, hardworking
          people to join our growing waste and garbage collection team in
          Calgary.
        </p>
        <div className="mt-8 rounded-2xl border border-line bg-cream/70 px-5 py-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-sage">
            What we offer
          </p>
          <ul className="mt-3 space-y-2 text-ink">
            {careerPerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-white px-5 py-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-sage">
            Basic requirements
          </p>
          <ul className="mt-3 space-y-2 text-ink">
            {careerRequirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-stone">
          Questions? Email{" "}
          <a href={site.emailHref} className="text-forest underline">
            {site.email}
          </a>
          .
        </p>
      </div>

      <div className="self-start rounded-3xl border border-line bg-white p-5 sm:p-8">
        <h2 className="mb-8 font-display text-3xl text-ink">Apply Now</h2>
        <CareersForm />
      </div>
    </section>
  );
}
