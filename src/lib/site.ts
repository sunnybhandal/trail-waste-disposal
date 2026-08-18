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
  sisterCompany: {
    name: "Trail Bottle Depot",
    href: "https://www.trailbottledepot.ca",
  },
  serviceArea: "Calgary, Cochrane, and surrounding areas",
} as const;

export const navLinks = [
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
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
    question: "What areas do you serve?",
    answer:
      "We provide front-load dumpster service in Calgary, Cochrane, and surrounding communities. If you’re just outside the city, call us and we’ll let you know if we can add you to a nearby route.",
  },
  {
    question: "Do you only offer front-load dumpsters?",
    answer:
      "Yes. We specialize in front-load dumpsters so we can keep service consistent and reliable. We’ll help you choose a bin size that fits your property, from smaller retail bins to larger commercial containers.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send us your name, phone, email, address, and business type through the contact form — or call 403-253-2155. Show us your current bill and we’ll beat the price.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No. We started Trail Waste Disposal because extra fees and surprise charges are too common in this industry. Your quote is the price you pay, with clear terms and a real person on your account.",
  },
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "We collect for retail stores, restaurants, office buildings, warehouses, commercial property managers, apartment complexes, and other small businesses across the Calgary area.",
  },
] as const;
