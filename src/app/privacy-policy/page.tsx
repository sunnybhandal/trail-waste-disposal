import { LegalPage, legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata(
  "Privacy Policy",
  "How Trail Waste Disposal collects and uses personal information.",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="If you have questions about this policy, contact us at info@trailwaste.ca or 403-253-2155."
      body="Trail Waste Disposal collects only the information needed to provide waste collection quotes and service — such as your name, phone number, email, and service address. We do not sell your information. We use it to respond to requests, schedule pickups, and improve our service."
    />
  );
}
