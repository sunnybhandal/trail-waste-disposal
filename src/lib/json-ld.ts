import {
  dumpsterSizeGuide,
  faqs,
  industries,
  serviceTypes,
  site,
} from "@/lib/site";

export function faqAnswerText(item: (typeof faqs)[number]) {
  if ("link" in item && item.link) {
    return item.answer.replace(/\{link\}/g, item.link.label);
  }
  return item.answer;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "WasteManagement"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: `${site.url}/images/truckSide.png`,
    logo: `${site.url}/images/trail-waste-globe.png`,
    address: {
      "@type": "PostalAddress",
      ...site.postalAddress,
    },
    areaServed: [
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Cochrane" },
    ],
    knowsLanguage: [...site.languages],
    currenciesAccepted: "CAD",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial dumpster and waste collection services",
      itemListElement: [
        ...serviceTypes.map((serviceType) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Commercial ${serviceType.toLowerCase()} collection`,
            areaServed: site.serviceArea,
            audience: {
              "@type": "BusinessAudience",
              audienceType: industries.join(", "),
            },
          },
        })),
        ...dumpsterSizeGuide.map((size) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${size.name} front-load dumpster`,
            description: `${size.name} dumpster, ${size.dimensions.join(", ")}, holds ${size.holds}. Recommended for ${size.recommendedUse.toLowerCase()}.`,
            areaServed: site.serviceArea,
          },
        })),
      ],
    },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    url: `${site.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item),
      },
    })),
  };
}
