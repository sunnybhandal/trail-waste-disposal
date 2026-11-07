import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contact-us", destination: "/#contact", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/how-it-works", destination: "/#how-it-works", permanent: true },
      { source: "/careers", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
