import type { Metadata } from "next";

type LegalPageProps = {
  title: string;
  description: string;
  body: string | readonly string[];
};

export function LegalPage({ title, description, body }: LegalPageProps) {
  const paragraphs = typeof body === "string" ? [body] : body;

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 text-left sm:px-8 sm:py-24">
      <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={`max-w-3xl text-base leading-8 text-stone ${
            index === 0 ? "mt-8" : "mt-6"
          }`}
        >
          {paragraph}
        </p>
      ))}
      <p className="mt-6 max-w-3xl text-base leading-8 text-stone">{description}</p>
    </article>
  );
}

export function legalMetadata(title: string, description: string): Metadata {
  return { title, description };
}
