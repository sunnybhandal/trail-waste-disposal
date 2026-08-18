import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Sign in to your Trail Waste Disposal client account.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
        Client account
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
        Log in
      </h1>
      <p className="mt-4 text-base leading-7 text-stone">
        Access your Trail Waste Disposal account. Need help? Call{" "}
        <a href={site.phoneHref} className="text-forest hover:underline">
          {site.phone}
        </a>
        .
      </p>
      <div className="mt-10 rounded-3xl border border-line bg-cream/50 p-5 sm:p-8">
        <LoginForm />
      </div>
    </section>
  );
}
