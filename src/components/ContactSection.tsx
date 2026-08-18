import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-cream/70">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Receive a free quote on waste disposal services in Calgary.
          </h2>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
