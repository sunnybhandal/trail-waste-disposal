import { LegalPage, legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata(
  "Service Terms & Conditions",
  "Terms that apply to Trail Waste Disposal collection service.",
);

export default function ServiceTermsPage() {
  return (
    <LegalPage
      title="Service Terms & Conditions"
      description="For account-specific terms, call 403-253-2155 and speak with someone who knows your account."
      body="Front-load dumpster service is provided on an agreed schedule, with transparent pricing and no hidden fees. Customers are responsible for keeping bins accessible on pickup day and for placing only accepted materials in the container. Missed pickups caused by blocked access may be rescheduled. We will confirm rates, bin size, and frequency before service begins."
    />
  );
}
