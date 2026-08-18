import { LegalPage, legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata(
  "Disputes/Arbitration",
  "How Trail Waste Disposal handles billing and service disputes.",
);

export default function DisputesPage() {
  return (
    <LegalPage
      title="Disputes/Arbitration"
      description="To start a dispute, email info@trailwaste.ca or call 403-253-2155."
      body="If you have a concern about billing or service, contact us first so we can review your account and work toward a resolution. We prefer to settle issues directly and promptly. If a dispute cannot be resolved that way, it may proceed through mediation or arbitration in Alberta."
    />
  );
}
