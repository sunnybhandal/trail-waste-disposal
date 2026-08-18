import { LegalPage, legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata(
  "Terms of Use",
  "Terms for using the Trail Waste Disposal website.",
);

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Questions about these terms can be sent to info@trailwaste.ca."
      body="By using trailwastedisposal.ca, you agree to use the site for lawful purposes related to our waste disposal services. Content on this site is provided for general information. Quotes submitted through the form are requests for service and are subject to confirmation by our team."
    />
  );
}
