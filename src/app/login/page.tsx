import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LoginForm } from "@/components/LoginForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Portal",
  description: "Sign in to your Trail Waste Disposal customer portal.",
};

const features = [
  {
    title: "Pickup Schedules",
    description:
      "View and track your upcoming pickup dates and service details.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 9.5h17M8 3.5v3M16 3.5v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Invoices & Billing",
    description:
      "Access your invoices and manage billing information.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M7 3.5h7.5L19.5 8.5V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 3.5V8h4.5M8.5 12.5h7M8.5 16h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Account Management",
    description:
      "Update your preferences and manage your account settings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5.5 19.25c.7-2.9 3.3-4.75 6.5-4.75s5.8 1.85 6.5 4.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] satisfies {
  title: string;
  description: string;
  icon: ReactNode;
}[];

export default function LoginPage() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-20 lg:grid-cols-2">
      <div>
        <ul className="space-y-8">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-forest">
                {feature.icon}
              </div>
              <div>
                <h2 className="text-lg font-medium text-ink">{feature.title}</h2>
                <p className="mt-1 text-sm leading-6 text-stone">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
          Customer Portal
        </h1>
        <div className="mt-4 rounded-3xl border border-line bg-cream/50 p-5 sm:p-8">
          <LoginForm />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone">
          <a
            href={`mailto:${site.email}?subject=Forgot password`}
            className="hover:text-forest hover:underline"
          >
            Forgot password?
          </a>
          <a href="/#contact" className="hover:text-forest hover:underline">
            Contact support
          </a>
        </div>
      </div>
    </section>
  );
}
