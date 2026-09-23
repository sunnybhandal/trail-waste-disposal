export const site = {
  name: "Trail Waste Disposal",
  url: "https://trailwastedisposal.ca",
  tagline: "Show us your bill. We'll beat your current price.",
  description:
    "Commercial waste, trash, and garbage collection in Calgary, Cochrane, and surrounding areas. Front-load dumpsters, reliable pickup, and no hidden fees.",
  phone: "403-253-2155",
  phoneHref: "tel:+14032532155",
  email: "info@trailwaste.ca",
  emailHref: "mailto:info@trailwaste.ca",
  address: "8499 Horton Rd. SW, Calgary, AB, T2V 5J3",
  addressLines: ["8499 Horton Rd. SW", "Calgary, AB T2V 5J3"],
  postalAddress: {
    streetAddress: "8499 Horton Rd. SW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2V 5J3",
    addressCountry: "CA",
  },
  languages: ["English", "Punjabi", "Hindi"],
  customerPortalHref: "https://customer.trailbottle.app/waste/sign-in",
  sisterCompany: {
    name: "Trail Bottle Depot",
    href: "https://www.trailbottledepot.ca",
  },
  serviceArea: "Calgary, Cochrane, and surrounding areas",
} as const;

export const navLinks = [
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#contact", label: "Contact" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms & Conditions" },
] as const;

export const industries = [
  "Retail stores",
  "Restaurants",
  "Office buildings",
  "Warehouses",
  "Commercial property managers",
  "Small businesses",
] as const;

export const businessTypes = [
  "Commercial",
  "Multi-Unit Property",
] as const;

export const serviceTypes = ["Garbage", "Recycle", "Organics"] as const;

export const dumpsterSizes = [
  "3 Yard Waste Bin (5' 10\" W 4' 5\" H 3' 6\" D)",
  "4 Yard Waste Bin (5' 10\" W 5' 1\" H 4' 2\" D)",
  "6 Yard Waste Bin (6' 0\" W 5' 10\" H 5' 8\" D)",
  "8 Yard Waste Bin (6' 10\" W 6' 2\" H 6' 10\" D)",
  "I’d like to discuss my options",
] as const;

export const dumpsterSizeGuide = [
  {
    name: "3 Yard",
    dimensions: ["5' 10\" W", "4' 5\" H", "3' 6\" D"],
    holds: "600 LBS",
    recommendedUse: "Small businesses",
  },
  {
    name: "4 Yard",
    dimensions: ["5' 10\" W", "5' 1\" H", "4' 2\" D"],
    holds: "800 LBS",
    recommendedUse: "Midsize restaurants and companies",
  },
  {
    name: "6 Yard",
    dimensions: ["6' 0\" W", "5' 10\" H", "5' 8\" D"],
    holds: "1,200 LBS",
    recommendedUse: "Mid to large businesses",
  },
  {
    name: "8 Yard",
    dimensions: ["6' 10\" W", "6' 2\" H", "6' 10\" D"],
    holds: "1,800 LBS",
    recommendedUse: "Large businesses",
  },
] as const;

export const quantities = ["1", "2", "3", "4", "5+"] as const;

export const pickupFrequencies = ["Weekly", "Bi-weekly", "Monthly"] as const;

export const pickupDays = [
  "No Preference",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const careerPerks = [
  "Competitive wages",
  "Steady, local work",
  "Supportive team environment",
  "Opportunities for long-term growth",
] as const;

export const careerRequirements = [
  "Ability to lift objects over 20+ lbs",
  "Class 3 License (with Air Brakes)",
  "Valid driver’s abstract and clean driving record",
  "Comfortable working and driving outdoors in all weather",
] as const;

export const faqs = [
  {
    question: "What areas do you serve for waste collection?",
    answer:
      "We provide commercial waste collection in Calgary and Cochrane. If you’re just outside the city, call us at {link} and we’ll let you know if we can add you to a nearby route.",
    link: { href: "tel:+14032532155", label: "403-253-2155" },
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Tell us about your business, property, and waste collection needs through our {link}. We’ll review your requirements, confirm availability, and work with you to establish a pickup schedule that fits your property.",
    link: { href: "/#contact", label: "contact form" },
  },
  {
    question: "What does your pricing structure look like?",
    answer:
      "Pricing varies depending on your needs, but fill out our {link} and we’ll be in touch.",
    link: { href: "/#contact", label: "Contact Form" },
  },
  {
    question: "What kinds of businesses do you collect waste from?",
    answer:
      "We collect garbage, recycling, and organics for retail stores, restaurants, office buildings, warehouses, commercial property managers, apartment complexes, and other small businesses across the Calgary area.",
  },
  {
    question: "What if I need to change my scheduled pickup day?",
    answer:
      "We understand that business needs can change. If you need to adjust your pickup schedule, contact us as soon as possible and we’ll do our best to accommodate your request based on route availability.",
  },
  {
    question: "What size dumpster do I need?",
    answer:
      "The right dumpster size depends on the type and volume of waste your business produces, as well as how frequently you need pickups. We’ll work with you to determine the appropriate bin size and pickup schedule for your needs. If you want any idea, see our {link}.",
    link: { href: "#dumpster-size-guide", label: "Dumpster Size Chart" },
  },
  {
    question: "Do you offer residential garbage pickup?",
    answer:
      "We don’t offer residential curbside trash pickup. We specialize in commercial front-load dumpsters for businesses, apartment complexes, and multi-unit properties, and we’ll help you choose a bin size that fits.",
  },
] as const;
