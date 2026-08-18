import type { Metadata } from "next";
import { CareersForm } from "@/components/CareersForm";
import { careerPerks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Trail Waste Disposal team in Calgary. Steady local work and room to grow.",
};

export default function CareersPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-8 sm:py-20 lg:grid-cols-2">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
          Careers
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
          Work that stays close to home.
        </h1>
        <p className="mt-6 text-base leading-8 text-stone sm:text-lg">
          Trail Waste Disposal is always looking for dependable, hardworking
          individuals to join our growing team in Calgary. We value safety,
          professionalism, and reliability.
        </p>
        <ul className="mt-8 space-y-3">
          {careerPerks.map((perk) => (
            <li
              key={perk}
              className="rounded-2xl border border-line bg-cream/70 px-5 py-4 text-ink"
            >
              {perk}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-stone">
          Questions? Email{" "}
          <a href={site.emailHref} className="text-forest underline">
            {site.email}
          </a>
          .
        </p>
      </div>

      <div className="rounded-3xl border border-line bg-white p-5 sm:p-8">
        <h2 className="font-display text-3xl text-ink">Apply</h2>
        <p className="mt-2 mb-8 text-sm text-stone">
          Send your details and attach a resume. We review every application.
        </p>
        <CareersForm />
      </div>
    </section>
  );
}
