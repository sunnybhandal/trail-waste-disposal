import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Calgary & Cochrane Waste, Garbage, and Recycling Collection`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "commercial garbage collection Calgary",
    "commercial dumpster service Calgary",
    "front load dumpster Calgary",
    "commercial waste collection Calgary",
    "garbage collection Cochrane",
    "commercial recycling Calgary",
  ],
  metadataBase: new URL(site.url),
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: `${site.name} | Calgary & Cochrane Waste, Garbage, and Recycling Collection`,
    description:
      "Commercial garbage collection and front-load dumpster service for businesses and multi-unit properties in Calgary and Cochrane.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.variable} ${barlowCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white text-ink" suppressHydrationWarning>
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
