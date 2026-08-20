import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
    default: `${site.name} | Calgary & Cochrane Waste, Trash & Garbage Collection`,
    template: `%s | ${site.name}`,
  },
  description:
    "Commercial waste, trash, and garbage collection in Calgary, Cochrane, and surrounding areas. Front-load dumpsters, reliable pickup, and no hidden fees.",
  keywords: [
    "waste disposal Calgary",
    "garbage collection Calgary",
    "trash pickup Calgary",
    "waste management Cochrane",
    "commercial dumpster service",
    "front-load dumpsters",
  ],
  metadataBase: new URL("https://trailwastedisposal.ca"),
  openGraph: {
    title: `${site.name} | Calgary Waste, Trash & Garbage Collection`,
    description:
      "Local commercial waste, trash, and garbage pickup for businesses and multi-unit properties in Calgary and Cochrane.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${barlowCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white text-ink" suppressHydrationWarning>
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
