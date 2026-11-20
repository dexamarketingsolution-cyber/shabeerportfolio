import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Uses NEXT_PUBLIC_SITE_URL if set, otherwise Vercel's production domain, otherwise localhost.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Mohammed Shabeer E | Branch Accountant & Exchange House Operations";
const description =
  "Experienced Branch Accountant and Exchange House Operations professional with 4+ years of UAE experience in foreign currency exchange, remittance processing, WPS, cash management, accounting and financial reporting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Mohammed Shabeer E",
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    "Mohammed Shabeer E",
    "Branch Accountant Dubai",
    "Exchange House Operations",
    "Cashier UAE",
    "Foreign Currency Exchange",
    "Remittance Processing",
    "WPS Processing",
    "AML KYC Compliance",
    "Accountant Dubai",
    "Tally Prime",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Mohammed Shabeer E",
    title,
    description,
    locale: "en_AE",
    firstName: "Mohammed Shabeer",
    lastName: "E",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Shabeer E — Branch Accountant | Cashier | Exchange House Operations" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#070B1E",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.designation,
  email: `mailto:${profile.email}`,
  telephone: "+971501477390",
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  sameAs: [profile.linkedin],
  worksFor: { "@type": "Organization", name: profile.company },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Satwa, Dubai",
    addressCountry: "AE",
  },
  knowsLanguage: ["English", "Arabic", "Hindi", "Malayalam", "Tamil"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
