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
  {
    question:
      "How can I cancel my waste collection service? Are there cancellation fees?",
    answer:
      "If you need to cancel your service, simply contact our team and we’ll help you through the process. We aim to keep cancellations straightforward and transparent, with no unexpected fees. Any applicable cancellation terms will be reviewed with you before your service begins.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We offer convenient payment options for our commercial customers. Contact our team to learn more about available payment methods and billing options.",
  },
  {
    question: "What if I need to change my scheduled pickup day?",
    answer:
      "We understand that business needs can change. If you need to adjust your pickup schedule, contact us as soon as possible and we’ll do our best to accommodate your request based on route availability.",
  },
  {
    question: "What size dumpster do I need?",
    answer:
      "The right dumpster size depends on the type and volume of waste your business produces, as well as how frequently you need pickups. We’ll work with you to determine the appropriate bin size and pickup schedule for your needs.",
  },
  {
    question: "How often can my dumpster be picked up?",
    answer:
      "Pickup frequency is based on your business’s waste volume and requirements. We can help establish a schedule that keeps your dumpster from overflowing while avoiding unnecessary pickups.",
  },
  {
    question: "What types of waste do you collect?",
    answer:
      "We provide commercial waste, trash, garbage, recycling, and organics collection for businesses and multi-unit properties. If you’re unsure whether we can handle a particular type of waste, contact us and we’ll be happy to help.",
  },
  {
    question: "Do you provide waste collection for restaurants?",
    answer:
      "Yes. We provide commercial waste collection for restaurants and other businesses that generate regular amounts of commercial waste. We can help determine the appropriate dumpster size and pickup frequency for your operation.",
  },
  {
    question: "Do you offer recycling and organics collection?",
    answer:
      "Yes. We offer commercial recycling and organics collection in addition to regular garbage and waste services. Let us know what your business needs and we can help create the right collection plan.",
  },
  {
    question:
      "What happens if my dumpster is full before my scheduled pickup?",
    answer:
      "If you find that your dumpster is filling up faster than expected, contact us and we’ll work with you to determine the best solution. This may include adjusting your pickup frequency or reviewing your dumpster size.",
  },
  {
    question: "Do you service apartment buildings and multi-unit properties?",
    answer:
      "Yes. We provide commercial waste collection for apartment complexes and multi-unit properties, in addition to businesses and other commercial properties.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide commercial waste collection throughout Calgary, Cochrane, and surrounding communities. If you’re located just outside our regular service area, contact us and we’ll let you know if we can accommodate your property.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Tell us about your business, property, and waste collection needs through our {link}. We’ll review your requirements, confirm availability, and work with you to establish a pickup schedule that fits your property.",
    link: { href: "/#contact", label: "quote form" },
  },
] as const;
