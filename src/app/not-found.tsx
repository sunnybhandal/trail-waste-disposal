import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
      <h1 className="font-display text-5xl text-ink">Page not found</h1>
      <p className="mt-4 text-stone">
        That page does not exist. Head back home or request a quote.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-forest px-6 text-sm font-medium text-white"
      >
        Back home
      </Link>
    </section>
  );
}
