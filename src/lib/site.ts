export const site = {
  name: "Trail Waste Disposal",
  tagline: "Show us your bill. We'll beat your current price.",
  phone: "403-253-2155",
  phoneHref: "tel:+14032532155",
  email: "info@trailwaste.ca",
  emailHref: "mailto:info@trailwaste.ca",
  address: "8499 Horton Rd. SW, Calgary, AB, T2V 5J3",
  addressLines: ["8499 Horton Rd. SW", "Calgary, AB T2V 5J3"],
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
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/service-terms", label: "Service Terms & Conditions" },
  { href: "/disputes", label: "Disputes/Arbitration" },
  { href: "/accessibility", label: "Accessibility" },
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
  "Auto, Salon or other Personal Services",
  "Construction & Demolition",
  "Distribution & Warehousing",
  "Healthcare & Professional Services",
  "Manufacturing & Industrial",
  "Offices & Building Management",
  "Other",
  "Real Estate, Rental & Leasing",
  "Restaurants & Hospitality",
  "Retail",
] as const;

export const serviceTypes = ["Trash", "Recycle", "Organics"] as const;

export const dumpsterSizes = [
  "3 Yard Waste Bin (5' 10\" W 4' 5\" H 3' 6\" D)",
  "4 Yard Waste Bin (5' 10\" W 5' 1\" H 4' 2\" D)",
  "6 Yard Waste Bin (6' 0\" W 5' 10\" H 5' 8\" D)",
  "8 Yard Waste Bin (6' 10\" W 6' 2\" H 6' 10\" D)",
] as const;

export const dumpsterSizeGuide = [
  {
    name: "3 Yard Dumpster",
    dimensions: ["5' 10\" W", "4' 5\" H", "3' 6\" D"],
    holds: "600 LBS, 21 GARBAGE BAGS",
    pickupFrequency: "Up to 5x a week",
    recommendedUse: "Ideal for businesses with up to 50 employees",
  },
  {
    name: "4 Yard Dumpster",
    dimensions: ["5' 10\" W", "5' 1\" H", "4' 2\" D"],
    holds: "800 LBS, 27 GARBAGE BAGS",
    pickupFrequency: "Up to 5x a week",
    recommendedUse:
      "Best for midsize restaurants and companies with up to 100 employees",
  },
  {
    name: "6 Yard Dumpster",
    dimensions: ["6' 0\" W", "5' 10\" H", "5' 8\" D"],
    holds: "1,200 LBS, 41 GARBAGE BAGS",
    pickupFrequency: "Up to 5x a week",
    recommendedUse:
      "Ideal for mid to large businesses with up to 250 employees",
  },
  {
    name: "8 Yard Dumpster",
    dimensions: ["6' 10\" W", "6' 2\" H", "6' 10\" D"],
    holds: "1,800 LBS, 54 GARBAGE BAGS",
    pickupFrequency: "Up to 5x a week",
    recommendedUse:
      "Our largest recurring size—best for large businesses with up to 500 employees",
  },
] as const;

export const quantities = ["1", "2", "3", "4", "5"] as const;

export const pickupFrequencies = ["Weekly", "Bi-weekly", "Monthly"] as const;

export const pickupDays = [
  "No Preference",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
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
    question: "What areas do you serve for waste and garbage pickup?",
    answer:
      "We provide commercial waste, trash, and garbage collection in Calgary, Cochrane, and surrounding communities. If you’re just outside the city, call us at {link} and we’ll let you know if we can add you to a nearby route.",
    link: { href: "tel:+14032532155", label: "403-253-2155" },
  },
  {
    question: "Do you offer residential trash pickup?",
    answer:
      "We don’t offer residential curbside trash pickup. We specialize in commercial front-load dumpsters for businesses, apartment complexes, and multi-unit properties, and we’ll help you choose a bin size that fits.",
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
      "We collect trash, recycling, and organics for retail stores, restaurants, office buildings, warehouses, commercial property managers, apartment complexes, and other small businesses across the Calgary area.",
  },
] as const;
