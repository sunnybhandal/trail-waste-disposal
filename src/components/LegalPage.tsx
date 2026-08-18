import type { Metadata } from "next";
import { site } from "@/lib/site";

type LegalPageProps = {
  title: string;
  description: string;
  body: string;
};

export function LegalPage({ title, description, body }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
        {site.name}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-8 text-base leading-8 text-stone">{body}</p>
      <p className="mt-6 text-base leading-8 text-stone">{description}</p>
    </article>
  );
}

export function legalMetadata(title: string, description: string): Metadata {
  return { title, description };
}
