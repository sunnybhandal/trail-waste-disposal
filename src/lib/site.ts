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
  { href: "/#home", label: "Home" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/#faq", label: "FAQ" },
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
  "Retail",
  "Restaurant & Hospitality",
  "Office & Building Management",
  "Warehouse & Distribution",
  "Apartment & Multi-unit",
  "Construction",
  "Healthcare & Professional Services",
  "Other",
] as const;

export const careerPerks = [
  "Competitive wages",
  "Steady, local work",
  "Supportive team environment",
  "Opportunities for long-term growth",
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
