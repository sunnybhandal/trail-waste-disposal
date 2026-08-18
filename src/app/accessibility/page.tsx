import { LegalPage, legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata(
  "Accessibility",
  "Trail Waste Disposal’s commitment to an accessible website.",
);

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      description="If you need information in another format, email info@trailwaste.ca or call 403-253-2155. We serve customers in English, Punjabi, and Hindi."
      body="We aim to keep trailwastedisposal.ca usable on phones and computers, with clear text, keyboard-friendly forms, and readable contrast. If you have trouble using any part of the site, let us know and we will help."
    />
  );
}
